import {Component} from '@angular/core';

// 与AppComponent和大多数其它组件不同的是，它甚至都没有指定选择器selector。 它不需要选择器，因为我们不会把这个组件嵌入到某个父模板中，而是使用路由器导航到它。
@Component({
    template:  `
        <h2>CRISIS CENTER222</h2>
        <router-outlet></router-outlet>
    `
})
export class CrisisCenterComponent { }
