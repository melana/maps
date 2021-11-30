import { Component } from '@angular/core';
import { HttpService } from './shared/http.service';
import { Obj } from './obj';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'maps';
  lat = 50.678418;
  lng = 30.809007;

  objectName: any;
  selectedItem = null;

  constructor(private httpService: HttpService){}
  
  objects: Obj[]=[];

  onClick(item: any) {
    for (let i = 0; i < this.objects.length; i++){
      this.objects[i].selectedItem = false;
    }
    this.selectedItem = item;
    item.selectedItem =true;
    
  }
  
  ngOnInit(){   
    this.httpService.getData().subscribe((data: any) => this.objects=data["objList"]);
  }

}
