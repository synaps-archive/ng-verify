import { Component, Input, HostListener, Output, EventEmitter, ViewChild, ElementRef, OnChanges,AfterViewInit, SimpleChanges } from '@angular/core';

type Service = 'individual' | 'corporate'
interface Color {
  primary?: string
  secondary?: string
}

const serviceUrl = {
  individual: 'https://verify.synaps.io',
  corporate: 'https://verify-v3.synaps.io'
}
@Component({
  selector: 'synaps-verify',
  template: `
    <iframe
    #iframe
    style="min-width: 400px; min-height: 687px;"
    class="root"
    allow="microphone; camera; midi; encrypted-media;"
    allowfullscreen="true"
    frameBorder="none"
  >
  `,
})
export class NgVerifyComponent implements OnChanges, AfterViewInit {

 @Output()ready = new EventEmitter();
 @Output()finish = new EventEmitter();
 @ViewChild('iframe')
  iframe!: ElementRef;
 @Input() sessionId!: string
 @Input() service!: Service
 @Input() className?: string
 @Input() color?: Color
 @Input() lang?: string
 @Input() tier?: number
  constructor() {}
  get url() {
    const { sessionId, service, color, lang, tier } = this;
      const params: Record<string, string | undefined | number> = {
        service,
        session_id: sessionId,
        primary_color: color ? color.primary : undefined,
        secondary: color ? color.secondary : undefined,
        lang: lang ? lang : "en",
        tier: tier ? tier : undefined,
      }
      const url =  `${serviceUrl[service]}?${Object.keys(params)
        .reduce((acc: string[], key: string): string[] => {
          if (params[key]) {
            acc.push(`${key}=${params[key]}`);
          }
          return acc;
        }, [])
        .join("&")}`;
        return url;
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['sessionId'] && changes['sessionId'].currentValue && this.iframe) {
      this.iframe.nativeElement.src = this.url;
    }
  }
  ngAfterViewInit() {
    this.iframe.nativeElement.src = this.url;
  }
  @HostListener('window:message', ['$event'])
  _listernerMessage({ data }: MessageEvent){
    if (data.type === 'ready') {
      this.ready.emit()
    } else if (data.type === 'finish') {
      this.finish.emit()
    }
  }

}
