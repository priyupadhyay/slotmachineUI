import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';


declare var $:any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit{
  reward = 0; 
  static tokens: number = 0;
  static playCount: number=0;
  constructor() {
  
  }
  playGame(){
    //alert('bleh');
    	
    DashboardComponent.playCount++;
    
    $( "#slotGif" ).show();
    $(".slots").hide();
    $(".playBtn").hide();
    setTimeout(function(){
      console.log("Entered in timeout")
      var left = Math.floor((Math.random() * 8) + 1);
      var middle = Math.floor((Math.random() * 8) + 1);
      var right = Math.floor((Math.random() * 8) + 1);
      //alert(left+"::"+middle+"::"+right);
      $('#leftSlot').attr("src","https://dummyimage.com/200x200/f516f5/fff&text="+left);
      $('#middleSlot').attr("src","https://dummyimage.com/200x200/64f516/fff&text="+middle);
      $('#rightSlot').attr("src","https://dummyimage.com/200x200/f5a716/fff&text="+right);
      $( "#slotGif" ).hide();
      $( ".slots" ).show();
      $(".playBtn").show();
      $( "#playBtn" ).text("Play Again");
      var score = 0;
      if(left==middle && middle==right){
        if(left=7){
          score = 100;
        }
        else score = 80;
      }
      else if(left==middle || left==right || middle==right){
        score = 50;
      }
      else{
        score =  Math.floor((Math.random() * 29) + 1);
      }
      
      DashboardComponent.tokens += (score);
      //alert(this.tokens);
      
      $("#rewardNum").html("<p>Rewards</p>$"+score);
      $("#tokensNum").html("<p>Tokens</p>$"+DashboardComponent.tokens);
    
      if(DashboardComponent.playCount==3){

      DashboardComponent.playCount = 0;
        
      $(".playBtn").show();
      $( "#playBtn" ).text("Play Now");
      DashboardComponent.tokens=0;
      setTimeout(function(){$( ".slots" ).hide();$("#tokensNum").html("<p>Tokens</p>$"+DashboardComponent.tokens);},3000);
      }
    },2500);

  
    
  }
    ngOnInit(){
      $("#slotGif").hide();
      $(".slots").hide();
      $("#rewardNum").html("<p>Rewards</p>$"+this.reward);
      //alert(this.tokens);
    }
}
