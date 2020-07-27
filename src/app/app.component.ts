import { Component } from '@angular/core';
import {WebcamImage} from 'ngx-webcam';

export enum PagesInedxName {
  LOSS_DECLARATION = 0,
  VERBAL = 1,
  BILL = 2,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ephod-application';

    public visibilityArray = [true, false, false];
    // latest snapshot
    public webcamImage: WebcamImage = null;

    handleImage(webcamImage: WebcamImage) {
      this.webcamImage = webcamImage;
    }

    public next(nextIndex: number) {
      if (nextIndex >= this.visibilityArray.length) {
        return;
      }

      this.visibilityArray[nextIndex] = true;

      if (nextIndex > 0) {
        this.visibilityArray[nextIndex - 1] = false;
      }
    }
  }

