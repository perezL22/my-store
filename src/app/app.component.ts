import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Jose';
  age = 20;
  img = 'https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403'
  btnDisabled = true;
  person ={
    name: 'Nicolas',
    age: 18,
    avatar: 'https://static1.abc.es/media/play/2020/09/29/avatar-kE4H--1200x630@abc.jpeg'
  }

  namesArray: (string|number) []  = ['nicolas','julian','santi',15]

  toggelBtn(){
    this.btnDisabled = !this.btnDisabled
  }

  increAge(){
    this.age++
  }

  onScroll(event: Event){
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name = element.value
  }

}
