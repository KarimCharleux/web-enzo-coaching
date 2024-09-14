import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NgOptimizedImage,
    RouterLink,
    NgForOf,
    NgxSkeletonLoaderModule,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  protected loading: boolean = true;
  @ViewChild('videoPlayer') videoPlayer!: ElementRef<HTMLVideoElement>;

  onLoadedData() {
    this.loading = false;
    this.videoPlayer.nativeElement.play()
      .then()
      .catch(() => {
        setTimeout(() => this.onLoadedData(), 1000);
      });
  }

  onVideoWaiting() {
    this.videoPlayer.nativeElement.play()
      .then()
      .catch(() => {
        setTimeout(() => this.onVideoWaiting(), 1000);
      });
  }
}

