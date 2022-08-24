import { Injectable } from '@angular/core';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class SweetAlertService {
  constructor() {}
  public showErrorMessage(message: string) {
    Swal.fire({
      icon: 'error',
      text: message,
    });
  }
  public showChoiceMessage(message: string){
    return Swal.fire({
      title: message,
      // title: 'Cette action va annuler tous les entretiens incluent dans cette session! Voulez-vous continuer?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'Oui',
      cancelButtonText: 'Non',
      showCancelButton: true,
      showCloseButton: true
    }).then(result =>{
      if(result.value){
        return true;
      } else {
        return false;
      }
    })
  }
  public showChoiceFormat(message: string){
    return Swal.fire({
      title: message,
      // title: 'Cette action va annuler tous les entretiens incluent dans cette session! Voulez-vous continuer?',
      icon: 'question',
      iconHtml: '?',
      confirmButtonText: 'PDF',
      cancelButtonText: 'WORD',
      showCancelButton: true,
      showCloseButton: true
    }).then(result =>{
      if(result.value){
        return true;
      } else {
        return false;
      }
    })
  }
  
}
