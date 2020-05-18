import {Injectable} from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToasterService {

  constructor(private toastr: ToastrService) {
  }

  public toastErrorMessage(status: number) {
    if (status === 404) {
      this.toastr.error('This station does not exists.', 'Station not found');
    } else {
      this.toastr.error('An error occured fetching infos from SNCF server', 'Remote error');
    }
  }
}
