## angular-cli 重写官方教程
传送门：[angular2-cli](https://cli.angular.io/)
注意事项：使用 `angular-cli` 生成的项目中，`angular` 版本为 `2.0.0-rc.4` 版本，在很多 API 的使用上有不一样的地方。

### 下载项目
``` bash
git clone https://github.com/lichenbuliren/angular2-tour-of-heroes.git
// 进入项目目录
cd angular2-tour-of-heroes
```
### 安装依赖
``` bash
npm install
```
### 运行项目
``` bash
ng serve
```
### 浏览器访问
浏览器输入： [localhost:4200](localhost:4200) 就能看到例子了

### 主要知识点总结

#### 一、项目结构
入口文件：main.ts, index.html。
在官方 demo 中，有四个基础文件：`main.ts`、`app.component.ts`、`app.module.ts`、`app.routing.ts`。
然而在我们的 `angular-cli` 生成的项目结构中，入口文件将只有三个：`main.ts`、`app.component.ts`、`app.routing.ts`。也就是说我们的项目中比官方 demo 的教程中少了一个 `app.module.ts` 文件。

#### 二、项目路由改动
由于`angular-cli` 生成的项目结构中，对于路由的配置和官方 demo 中有很大的不一样，所在特别提前到这里来说明。

在官方的 demo 中，我们需要在 `app.module.ts` 中去声明、引入自定义配置的路由文件；在我们的项目中，由于不存在 `app.module.ts` 文件，这个时候，路由配置该怎么配置呢。答案是配置在 `main.ts` 中：

第一步，路由配置文件的改动：
``` javascript
import { provideRouter, RouterConfig } from '@angular/router';

import { HeroesComponent } from './heroes/';
import { DashboardComponent } from './dashboard/';
import { HeroDetailComponent } from './hero-detail/';

const appRoutes: RouterConfig = [
  {
    path: 'heroes',
    component: HeroesComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  }
]

export const routing = [
  provideRouter(appRoutes)
];
```

注意上面代码中和官方 demo 不一致的地方。

第二步，在初始化项目的时候，引入 路由配置文件。

``` javascript
import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

import { routing } from './app/app.routing';
import { HeroService } from './app/hero.service';
import { AppComponent, environment } from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [ 
  routing, 
  HTTP_PROVIDERS, 
  HeroService 
]).catch(err => console.log(err));


```

第三步，在 `app.component.ts` 文件中，配置路由指令，让 `app.component.ts` 识别路由.

``` javascript
import { Component } from '@angular/core';
// 很重要的点，新版本的 router 需要使用这个指令
import { ROUTER_DIRECTIVES } from '@angular/router';

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

```

第四步，在 `app.component.html` 模板文件中，引入 `<router-outlet></router-outlet>` 标签。

至此，我们的路由就配置完成了。

