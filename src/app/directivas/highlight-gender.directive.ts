import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  standalone: true,
  selector: '[appHighlightGender]'
})
export class HighlightGenderDirective implements OnInit {
  
  @Input('appHighlightGender') gender!: string;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    if (this.gender === 'male') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#ADD8E6'); 
    } else if (this.gender === 'female') {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', '#FFB6C1');
    }
  }
}
