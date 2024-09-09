import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChild,
  ViewChildren
} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgForOf, NgOptimizedImage} from "@angular/common";
import {LogoComponent} from "../../../shared/logo.component";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    NgOptimizedImage,
    NgForOf,
    LogoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements AfterViewInit{

  protected navOptions = [
    {label: 'Accueil', href: '#home'},
    {label: 'À propos', href: '#about'},
    {label: 'Services', href: '#services'},
    {label: 'Avis', href: '#reviews'},
  ];

  @ViewChildren('tabRef') tabRefs!: QueryList<ElementRef<HTMLAnchorElement>>;
  @ViewChild('underline') underlineRef!: ElementRef<HTMLDivElement>;

  protected activeTab: number = 0;
  protected hoveredTab: number = -1;
  protected color: 'white' | 'black' = 'white';

  ngAfterViewInit(): void {
    this.setActiveTab(this.activeTab);
  }

  toggleNavigationExpanded(): void {
    console.log('Toggle Navigation Expanded');
    const navigationExpanded = document.querySelector('.header-content');
    navigationExpanded?.classList.toggle('show');

    const hamburger = document.querySelector('.header-menu-icon');
    hamburger?.classList.toggle('active');

    const meats = document.querySelectorAll('.header-menu-icon-bar');
    meats?.forEach(function (meat) {
      meat.classList.toggle('active');
    });

    this.color = this.color === 'white' ? 'black' : 'white';

    this.updateUnderline(this.activeTab);
  }

  setActiveTab(index: number): void {
    this.activeTab = index;
    this.updateUnderline(index);
  }

  setHoveredTab(index: number): void {
    this.hoveredTab = index;
    if (index !== -1) {
      this.updateUnderline(index);
    } else {
      this.updateUnderline(this.activeTab);
    }
  }

  updateUnderline(index: number): void {
    const element = this.tabRefs?.toArray()[index]?.nativeElement;
    if (element && this.underlineRef) {
      const underlineElement = this.underlineRef.nativeElement;
      underlineElement.style.width = `${element.offsetWidth}px`;
      underlineElement.style.left = `${element.offsetLeft}px`;
      underlineElement.style.top = `${element.offsetTop + element.offsetHeight}px`;
    }
  }
}
