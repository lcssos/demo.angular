import {Directive, ElementRef, HostListener, Input} from '@angular/core';

//自定义指令集
@Directive({
    selector: '[hhHighlight]'
})
export class HighlightDirective {

    constructor(private el: ElementRef) { }

    @Input() defaultColor: string;
    @Input('hhHighlight') highlightColor: string;

    @HostListener('mouseenter') onMouseEnter() {
        this.highlight(this.highlightColor || this.defaultColor || 'red');
    }

    @HostListener('mouseleave') onMouseLeave() {
        this.highlight(null);
    }

    private highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }
}