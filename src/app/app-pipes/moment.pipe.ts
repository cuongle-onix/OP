import { Pipe, PipeTransform } from '@angular/core';
import { DateService } from '../app-services/date.service';
import * as moment from 'moment';

@Pipe({
	name: 'momentPipe'
})
export class MomentPipe implements PipeTransform {

	constructor(private dateService: DateService) {
    }

	transform(value: any, args?: any): any {
		let format = this.dateService.getLocaleDateFormat();
        return moment(value).format(format);
	}

}
