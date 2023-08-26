import { Directive, HostListener, Injectable, OnInit } from "@angular/core";

@Directive({
    selector : "[cards]"
})
export class CreditDirective implements OnInit{
    msg !:HTMLParagraphElement;

    
    constructor(){}

    ngOnInit(): void {
 
    }
       //value get 
    @HostListener('input',['$event'])

    validCards(eve:Event){
     
        let inputControl = eve.target as HTMLInputElement;
        let value = inputControl.value.replace(/\s/g, '') as string;
       // console.log(inputControl);
         inputControl.value = value
// length problem solve
        if(value.length > 16 ){
            value= value.substring(0,16)
        }
      inputControl.value = value
       // console.log(value);


      // 4 words 
        let numsArray :Array<string> = [];

        for(let i = 0; i < value.length; i+=4){
            numsArray.push(value.substring(i, i+4))
           }
        
        inputControl.value =numsArray.join(" ");
        console.log(value)
        inputControl.nextElementSibling?.classList.add('d-none')
      if(/[^\d]/.test(value)){
    inputControl.nextElementSibling?.classList.remove('d-none');

      }

    }
   

  
   }
