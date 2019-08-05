import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Photo } from '../../interfaces/photos/photo';
@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  constructor(public http:HttpClient) {

   }
   async GetPhoto():Promise<Array<Photo>>{
     try {
       const photos_retrieve:any= await this.http.get("https://jsonplaceholder.typicode.com/photos").toPromise()
        if(photos_retrieve.length!==undefined){
          const photos:Array<Photo>=photos_retrieve
          return photos
        }
        else{
          return []
        }
     } catch (err) {
       console.log(err)
       return []
     }
   }
}
