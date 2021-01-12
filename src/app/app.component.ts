import {
  ChangeDetectionStrategy, ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  TrackByFunction,
  ViewChild
} from '@angular/core';
import { BehaviorSubject, combineLatest, Subject } from 'rxjs';
import {debounceTime, map, takeUntil, tap} from 'rxjs/operators';
import { ArraySortPipe } from './array-sort-pipe';
import { toPng } from 'html-to-image';
import * as localforage from 'localforage';

interface CssFilterEntry {
  order: number;
  type: string;
  value: string;
  enabled: boolean;
}

interface OptionsState {
  useMask: boolean;
  opacity: number;

  useCustomCssBelowImage: boolean;
  customCssBelowImage: string;

  useCustomCssAboveImage: boolean;
  customCssAboveImage: string;
}

const DEFAULT_OPTIONS_STATE: OptionsState = {
  useMask: true,
  opacity: 50,
  useCustomCssBelowImage: false,
  useCustomCssAboveImage: false,
  customCssBelowImage: '  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);',
  customCssAboveImage: '  background: conic-gradient(red, yellow, lime, aqua, blue, magenta, red);',
};

function createDefaultCssFilters(): CssFilterEntry[] {
  let order = 0;
  const enabled = false;

  return [
    {
      type: 'hue-rotate',
      value: '90deg',
      order: order++,
      enabled
    },
    {
      type: 'grayscale',
      value: '70%',
      order: order++,
      enabled
    },
    {
      type: 'blur',
      value: '5px',
      order: order++,
      enabled
    },
    {
      type: 'brightness',
      value: '2',
      order: order++,
      enabled
    },
    {
      type: 'contrast',
      value: '200%',
      order: order++,
      enabled
    },
    {
      type: 'drop-shadow',
      value: '16px 16px 10px black',
      order: order++,
      enabled
    },
    {
      type: 'invert',
      value: '100%',
      order: order++,
      enabled
    },

    {
      type: 'saturate',
      value: '100%',
      order: order++,
      enabled
    },

    {
      type: 'sepia',
      value: '100%',
      order: order++,
      enabled
    }
  ];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit, OnDestroy {
  private cssFilterSubject$ = new BehaviorSubject<CssFilterEntry[]>([]);
  private updateOtherOptionsSubject$ = new BehaviorSubject(null);
  // tslint:disable-next-line:variable-name
  private _destroy$ = new Subject();

  title = 'image-css-magic';

  cssFilterArray$ =  this.cssFilterSubject$.asObservable().pipe(
    map(entries => this.arraySortingPipe.transform(entries, 'order'))
  );

  cssFilterString$ = this.cssFilterArray$.pipe(
    map(value => {
      const enabledFilters = value.filter(e => e.enabled);

      return enabledFilters.map(e => `${e.type}(${e.value})`).join(' ');
    })
  );

  @ViewChild('targetImage')
  image: ElementRef<HTMLImageElement> | null = null;


  @ViewChild('canvasElement')
  canvas: ElementRef<HTMLCanvasElement> | null = null;


  @ViewChild('holdingElement')
  holding: ElementRef<HTMLDivElement> | null = null;

  public downloadButtonEnabled = false;

  public imagePath = '';

  public optionsState: OptionsState = DEFAULT_OPTIONS_STATE;

  private fr = new FileReader();

  constructor(private arraySortingPipe: ArraySortPipe,
              private cd: ChangeDetectorRef) {
    this.cssFilterSubject$.next(createDefaultCssFilters());

    this.fr.onload = (e) => {
      if (!this.image) {
        return;
      }

      if (typeof this.fr.result === 'string') {
        this.imagePath = this.fr.result;
        this.downloadButtonEnabled = false;
        this.cd.detectChanges();

        setTimeout(() => {
          this.cd.detectChanges();
          this.updateOtherOptionsSubject$.next(null);
        }, 120)


        localforage.setItem('current_image', this.imagePath);
      } else {
        alert('WAT');
      }
    };

    combineLatest([
      this.cssFilterSubject$,
      this.updateOtherOptionsSubject$
    ]).pipe(
      takeUntil(this._destroy$),
      tap(() => {
        this.downloadButtonEnabled = false;
        this.cd.markForCheck();
      }),
      debounceTime(2500)
    ).subscribe(() => {
      if (!this.holding?.nativeElement){
        return;
      }

      localforage.setItem('options_state', this.optionsState);
      localforage.setItem('css_filters', this.cssFilterSubject$.value);


      toPng(this.holding?.nativeElement).then(dataPath => {

        var img = new Image();
        img.src = dataPath;

        img.onload = () => {
          const canvas = this.canvas?.nativeElement;
          const ctx = canvas?.getContext('2d');
          if (ctx) {
            ctx.clearRect(0, 0, canvas?.width ?? 0, canvas?.height ?? 0);
            ctx.drawImage(img, 0, 0);

            this.downloadButtonEnabled = true;
            this.cd.detectChanges();
          }
        };
      } );
    });
  }

  trackByFilter: TrackByFunction<CssFilterEntry> = (index, item) => item.type;

  displaySelectedImage(inputElement: HTMLInputElement): void {
    const gotAFile = inputElement.files?.[0];

    if (gotAFile) {
      this.fr.readAsDataURL(gotAFile);
    }
  }

  updateList(): void {
    this.cssFilterSubject$.next([...this.cssFilterSubject$.value]);
  }

  updateOtherOptions(): void {
    this.updateOtherOptionsSubject$.next(null);
  }

  ngOnDestroy(): void {
    this._destroy$.next();
    this._destroy$.complete();
  }

  downloadToImage(canvasElement: HTMLCanvasElement): void {
    const fileName = prompt('Filename?');

    if (!fileName) {
      return;
    }

    var link = document.createElement('a');
    link.download = `${fileName}.png`;
    link.href = canvasElement.toDataURL();
    link.click();
  }

  async ngOnInit(): Promise<void> {
    const lastImage = await localforage.getItem<string>('current_image') ?? '';

    this.imagePath = lastImage;

    this.optionsState = await localforage.getItem('options_state') ?? DEFAULT_OPTIONS_STATE;

    const savedCssFilters = await localforage.getItem<CssFilterEntry[]>('css_filters') ?? createDefaultCssFilters();

    this.cssFilterSubject$.next(savedCssFilters);
  }
}
