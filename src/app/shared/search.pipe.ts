import { Pipe, PipeTransform } from '@angular/core';
import { Obj } from '../obj';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(objects: Obj[], objectName = ''): any {
    if (!objectName.trim()) {
      return objects;
    }

    return objects.filter( obj => {
      return obj.name.toLowerCase().includes(objectName.toLowerCase());
    })
  }

}
