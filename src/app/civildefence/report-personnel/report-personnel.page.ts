import { Component, OnInit, ChangeDetectorRef, Injectable, Inject } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';
import { File, FileEntry } from '@ionic-native/file/ngx';
import { ActionSheetController, ToastController, Platform, LoadingController } from '@ionic/angular';
import { WebView } from '@ionic-native/ionic-webview/ngx';
import { Storage } from '@ionic/storage';


const STORAGE_KEY = 'my_images';
@Component({
  selector: 'app-report-personnel',
  templateUrl: './report-personnel.page.html',
  styleUrls: ['./report-personnel.page.scss'],
})
// tslint:disable-next-line: component-class-suffix
export class ReportPersonnelPage implements OnInit {
  search = true;
  showResult = false;
  enterReport = false;
  images = [];
  constructor(private camera: Camera, private file: File, private storage: Storage, private webview: WebView,
    private actionSheetController: ActionSheetController, private plt: Platform,
    private toastController: ToastController, private loadingCtrl: LoadingController,
    private ref: ChangeDetectorRef) { }


  displayResult() {
    this.showResult = true;
    this.search = false;
  }
  reportPersonnel() {
    this.showResult = false;
    this.enterReport = true;
    this.search = false;
  }
  changeSearch() {
    this.search = true;
    this.showResult = false;
  }

  deleteImg(imgEntry, position) {
    this.images.splice(position, 1);
    this.storage.get(STORAGE_KEY).then(images => {
      const arr = JSON.parse(images);
      const filtered = arr.filter(name => name !== imgEntry.name);
      this.storage.set(STORAGE_KEY, JSON.stringify(filtered));

      const correctPath = imgEntry.filePath.substr(0, imgEntry.filePath.lastIndexOf('/') + 1);

      this.file.removeFile(correctPath, imgEntry.name).then(res => {
        this.presentToast('File Removed');
      });
    });
  }

  ngOnInit() {
    this.plt.ready().then(() => {
      this.updateStoredImages(name);
    });
  }

  async selectImage() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Select Image source',
      buttons: [{
        text: 'Load from Library',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.PHOTOLIBRARY);
        }
      },
      {
        text: 'Use Camera',
        handler: () => {
          this.takePicture(this.camera.PictureSourceType.CAMERA);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  takePicture(sourceType: PictureSourceType) {
    const options: CameraOptions = {
      quality: 100,
      // tslint:disable-next-line: object-literal-shorthand
      sourceType: sourceType,
      saveToPhotoAlbum: false,
      correctOrientation: true
    };
    this.camera.getPicture(options).then(imagePath => {
      const currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
      const correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
      this.copyFileToLocalDir(
        correctPath,
        currentName,
        this.createFileName()
      );
    });


  }

  createFileName() {
    // tslint:disable-next-line: one-variable-per-declaration
    const d = new Date(),
      n = d.getTime(),
      newFileName = n + '.jpg';
    return newFileName;
  }

  copyFileToLocalDir(namePath: string, currentName: string, newFileName: string) {
    this.file.copyFile(namePath, currentName, this.file.dataDirectory, newFileName).then(
      success => {
        this.updateStoredImages(newFileName);
      },
      error => {
        this.presentToast('Error while storing file.');
      });
  }

  updateStoredImages(name) {
    this.storage.get(STORAGE_KEY).then(images => {
      let arr = [];
      if (images && images !== '' && images.length > 0) {
        arr = JSON.parse(images);
      } else {
        arr = [];
      }
      if (!arr) {
        const newImages = [name];
        this.storage.set(STORAGE_KEY, JSON.stringify(newImages));
      } else {
        arr.push(name);
        this.storage.set(STORAGE_KEY, JSON.stringify(arr));
      }
      const filePath = this.file.dataDirectory + name;
      const resPath = this.pathForImage(filePath);
      const newEntry = {
        // tslint:disable-next-line: object-literal-shorthand
        name: name,
        path: resPath,
        // tslint:disable-next-line: object-literal-shorthand
        filePath: filePath
      };
      this.images = [newEntry, ...this.images];
      this.ref.detectChanges();
    });
  }

  pathForImage(img) {
    if (img === null) {
      return '';
    } else {
      const converted = this.webview.convertFileSrc(img);
      return converted;
    }
  }

  async presentToast(text) {
    const toast = await this.toastController.create({
      message: text,
      position: 'bottom',
      duration: 3000
    });
  }

}
