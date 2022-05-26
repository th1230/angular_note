import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  // 屬性宣告與預設值設定~~~一般寫法
  // private el: ElementRef;
  // constructor(el) {
  //   this.el = el;
  // }

  // 屬性宣告與預設值設定~~~縮寫
  constructor(private el: ElementRef) {
    //  當掛載此裝飾器後會創建對應的物件實例，以操作標籤屬性
    // console.log(this);
  }

  @Input() appHighlight = '';
  @Input() defaultColor = '';

  @HostListener('mouseenter') onMouseEnter() {
    // 預設值是red，若有提供值，則依照該值
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
