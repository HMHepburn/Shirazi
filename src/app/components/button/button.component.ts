import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {

  // onButtonGroupClick(e: any){
  //   let clickedElement = e.target || e.srcElement;

  //   if( clickedElement.nodeName === "BUTTON" ) {

  //     let isCertainButtonAlreadyActive = clickedElement.parentElement.querySelector(".active");
  //     // if a Button already has Class: .active
  //     if( isCertainButtonAlreadyActive ) {
  //       isCertainButtonAlreadyActive.classList.remove("active");
  //     }

  //     clickedElement.className += " active";
  //   }

    clickedButton(e: any){console.log(e)
      let temp= e.srcElement.parentNode;
      for(let i = 0; i < temp.childNodes.length; i++){
        if(temp.childNodes[i].nodeName === 'BUTTON'){
        if(temp.childNodes[i].classList.contains('active')){
          temp.childNodes[i].classList.remove('active');
        }  }
      }
      e.srcElement.classList.add('active')
      
    }
  }
