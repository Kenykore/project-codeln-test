import { Component, OnInit, ViewChild } from '@angular/core';
import { PhotoService } from '../../services/photos/photo.service';
import { Photo } from 'src/app/interfaces/photos/photo';
import { IonSlide,IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'flask',
    'wifi',
    'beer',
    'football',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
  ];
  public photos: Array<Photo> = [];
  currentImage:Photo={
    albumId:1,
    url:"",
    title:"",
    id:1,
    thumbnailUrl:""
  }
  @ViewChild(IonSlides,{static:false}) slides: IonSlides;
  constructor(public photoService:PhotoService) {
    
  }

 async ngOnInit() {
   await this.GetPhoto()
   return
  }
  async GetPhoto(){
    try {
      const photo_retrieve = await this.photoService.GetPhoto()
      if(photo_retrieve.length!==0){
        console.log("photos",photo_retrieve.slice(0,30))
        this.photos=photo_retrieve.slice(0,30)
        this.currentImage=this.photos[0]
        return
      }
    } catch (err) {
      console.log(err)
    }
    }
   async ChangeActiveImg(){
     try{
      let index= await this.slides.getActiveIndex()
      this.currentImage=this.photos[index]
     }
     catch(err){
      console.log(err)
     }
    }
}
