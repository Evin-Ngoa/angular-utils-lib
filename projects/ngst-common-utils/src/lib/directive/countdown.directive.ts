import { Directive, ElementRef, Input, OnDestroy, OnInit } from '@angular/core';

@Directive({
  selector: '[countdown]'
})
export class CountdownDirective implements OnInit, OnDestroy {

  @Input() countdownValue!: number;
  interval: any;

  constructor(private elementRef: ElementRef) { }

  ngOnInit() {
    this.interval = setInterval(() => {
      this.countdownValue--;
      if (this.countdownValue === 0) {
        clearInterval(this.interval);
      }
      this.elementRef.nativeElement.innerHTML = this.countdownValue.toString();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

}