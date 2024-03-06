import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css']
})
export class AnagramComponent implements OnInit {
  text1='';
  text2='';
  anagram_result='';
  checked:boolean = false;

  constructor() { }

  ngOnInit(): void {
  }
  checkforAnagram(text1:any, text2:any){
    console.log("User entered", text1, text2);
    let text_1= text1.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    let text_2= text2.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
    console.log("User entered text after space removed and converted to lowercase", text_1, text_2);
    this.checked = true;
    if (text_1 === text_2) {
      this.anagram_result = 'YES, those 2 strings are Anagram';
    }
    else{
      this.anagram_result = 'NO, those 2 strings are not Anagram';
    }
    return this.anagram_result;
    
  }

}
