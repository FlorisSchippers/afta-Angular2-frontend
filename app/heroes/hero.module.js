"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var hero_detail_component_1 = require("./hero-detail.component");
var hero_list_component_1 = require("./hero-list.component");
var hero_add_component_1 = require("./hero-add.component");
var hero_edit_component_1 = require("./hero-edit.component");
var hero_filter_pipe_1 = require("./hero-filter.pipe");
var hero_service_1 = require("./hero.service");
var shared_module_1 = require("../shared/shared.module");
var HeroModule = (function () {
    function HeroModule() {
    }
    return HeroModule;
}());
HeroModule = __decorate([
    core_1.NgModule({
        imports: [
            shared_module_1.SharedModule,
            router_1.RouterModule.forChild([
                { path: 'heroes', component: hero_list_component_1.HeroListComponent },
                { path: 'hero/:id', component: hero_detail_component_1.HeroDetailComponent },
                { path: 'hero/:id/edit', component: hero_edit_component_1.HeroEditComponent },
                { path: 'add', component: hero_add_component_1.HeroAddComponent }
            ])
        ],
        declarations: [
            hero_list_component_1.HeroListComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_add_component_1.HeroAddComponent,
            hero_edit_component_1.HeroEditComponent,
            hero_filter_pipe_1.HeroFilterPipe
        ],
        providers: [
            hero_service_1.HeroService
        ]
    }),
    __metadata("design:paramtypes", [])
], HeroModule);
exports.HeroModule = HeroModule;
//# sourceMappingURL=hero.module.js.map