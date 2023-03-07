import { Pipe, PipeTransform } from '@angular/core';
import { Place } from '../models/place';


@Pipe({
  name: 'filterPipe'
})
export class FilterPipePipe implements PipeTransform {

  transform(value: Place[], filterText: string): Place[] {
    filterText = filterText?filterText.toLocaleLowerCase():""
    return filterText?value
    .filter((p:Place)=>p.placeName.toLocaleLowerCase().indexOf(filterText)!==-1)
    :value;
  }

}