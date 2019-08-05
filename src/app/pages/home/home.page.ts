import { Component } from '@angular/core';
import { PhotoService } from '../../services/photos/photo.service';
import { Photo } from 'src/app/interfaces/photos/photo';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
photos:Array<Photo>=[]
  constructor(public photoService:PhotoService) {

  }
  async ngOnInit() {
    await this.GetPhoto()
  }
   async GetPhoto(){
   try {
     const photo_retrieve = await this.photoService.GetPhoto()
     if(photo_retrieve.length!==0){
       console.log("photos",photo_retrieve.slice(0,30))
       return this.photos=photo_retrieve.slice(0,30)
     }
   } catch (err) {
     console.log(err)
   }
   }

}
