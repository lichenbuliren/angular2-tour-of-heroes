import { Component } from '@angular/core';
// 很重要的点，新版本的 router 需要使用这个指令
import { ROUTER_DIRECTIVES } from '@angular/router';

import { routing } from './app.routing';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  styleUrls: ['app.component.css'],
  templateUrl: 'app.component.html',
  // 告诉angular使用 ROUTER_DIRECTIVES 指令
  directives: [ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'Tour of Heroes';
}
