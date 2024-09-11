import {Component, ElementRef, ViewChild} from '@angular/core';
import {NgForOf, NgIf, NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {NgxSkeletonLoaderModule} from "ngx-skeleton-loader";
import {log} from "@angular-devkit/build-angular/src/builders/ssr-dev-server";

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
    console.log('Video is loaded');
    this.loading = false;
    this.videoPlayer.nativeElement.play()
      .then(() => console.log('Video is playing'))
      .catch((error) => {
        if (error.name === 'NotAllowedError') {
          setTimeout(() => this.onLoadedData(),1000);
        }
      });
  }

  onVideoWaiting() {
    console.log('Video is waiting');
    // Check if the video is loaded
    this.videoPlayer.nativeElement.play();
  }
}

