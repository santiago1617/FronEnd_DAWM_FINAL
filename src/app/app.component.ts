import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'sitioAngular';
}

fetch('http://localhost:3000/rutas')
  .then(texto => texto.json())
  .then(rutas => {
    let map = new Map<string, string>()
    for (var value in rutas["rutas"]) {
      console.log(rutas["rutas"][value]);
      map.set(value, rutas["rutas"][value])
    }
    console.log("map:" + map.size);
    console.log("map:"+map);
  });
  



console.log("HOLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
