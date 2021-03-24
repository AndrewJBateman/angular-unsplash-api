exports.ids=[1],exports.modules={cLdK:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ContactModule",function(){return ContactModule});var common=__webpack_require__("ofXK"),router=__webpack_require__("tyNb"),Observable=__webpack_require__("HDdC"),core=__webpack_require__("fXoL"),throwError=__webpack_require__("z6cu"),take=__webpack_require__("IzEk"),share=__webpack_require__("w1tV"),catchError=__webpack_require__("JIr8"),http=__webpack_require__("tk/3");class github_service_GithubService{constructor(http){this.http=http}getUser(user){const userSearchUrl=""+("https://api.github.com/users/"+user);return this.userData||(this.userData=this.http.get(userSearchUrl).pipe(Object(take.a)(1),Object(share.a)(),Object(catchError.a)(err=>Object(throwError.a)("There was a problem fetching user data from Github API, error: ",err)))),this.userData}}function ContactComponent_ng_container_3_Template(rf,ctx){if(1&rf&&(core.Hc(0),core.Jc(1,"div",3),core.Jc(2,"div",4),core.Jc(3,"div",5),core.Jc(4,"div",6),core.Fc(5,"img",7),core.Ic(),core.Jc(6,"div",8),core.Jc(7,"h3",9),core.Jc(8,"span",10),core.hd(9,"App by"),core.Ic(),core.hd(10),core.Ic(),core.Jc(11,"div",11),core.Jc(12,"p",12),core.Jc(13,"span",13),core.hd(14),core.Tc(15,"slice"),core.Ic(),core.hd(16),core.Tc(17,"slice"),core.Ic(),core.Ic(),core.Jc(18,"table",14),core.Jc(19,"tbody"),core.Jc(20,"tr"),core.Jc(21,"td",15),core.Jc(22,"span",13),core.hd(23,"Github Repos:"),core.Ic(),core.Ic(),core.Jc(24,"td",16),core.hd(25),core.Ic(),core.Ic(),core.Jc(26,"tr"),core.Jc(27,"td",15),core.Jc(28,"span",13),core.hd(29,"Location:"),core.Ic(),core.Ic(),core.Jc(30,"td",16),core.hd(31,"Spain, France"),core.Ic(),core.Ic(),core.Jc(32,"tr"),core.Jc(33,"td",15),core.Jc(34,"span",13),core.hd(35,"Updated"),core.Ic(),core.Ic(),core.Jc(36,"td",16),core.hd(37),core.Tc(38,"date"),core.Ic(),core.Ic(),core.Ic(),core.Ic(),core.Jc(39,"div",17),core.Jc(40,"a",18),core.hd(41,"See my Github profile"),core.Ic(),core.Jc(42,"a",19),core.hd(43,"Send me a message"),core.Ic(),core.Ic(),core.Ic(),core.Ic(),core.Ic(),core.Ic(),core.Gc()),2&rf){const user_r1=ctx.ngIf;core.vc(5),core.Xc("src",user_r1.avatar_url,core.dd),core.vc(5),core.jd(" ",user_r1.name," "),core.vc(4),core.jd("",core.Wc(15,6,user_r1.bio,0,42)," "),core.vc(2),core.jd(" ",core.Vc(17,10,user_r1.bio,42)," "),core.vc(9),core.jd(" ",user_r1.public_repos," "),core.vc(12),core.jd(" ",core.Uc(38,13,user_r1.updated_at)," ")}}github_service_GithubService.\u0275fac=function GithubService_Factory(t){return new(t||github_service_GithubService)(core.Nc(http.b))},github_service_GithubService.\u0275prov=core.Ac({token:github_service_GithubService,factory:github_service_GithubService.\u0275fac,providedIn:"root"});class contact_component_ContactComponent{constructor(githubService){this.githubService=githubService,this.user$=new Observable.a}ngOnInit(){this.user$=this.githubService.getUser("andrewjbateman")}}contact_component_ContactComponent.\u0275fac=function ContactComponent_Factory(t){return new(t||contact_component_ContactComponent)(core.Ec(github_service_GithubService))},contact_component_ContactComponent.\u0275cmp=core.yc({type:contact_component_ContactComponent,selectors:[["app-contact"]],decls:5,vars:3,consts:[["name","description","content","Shows contact details of author"],[1,"min-h-screen","min-w-screen","unsplash-blue"],[4,"ngIf"],[1,"flex","justify-center","w-full","h-screen","pt-10","mx-auto"],[1,"max-w-xs"],[1,"shadow-xl","info-card"],[1,"px-2","pt-5","photo-wrapper"],["alt","Github user profile photo",1,"w-40","h-40","mx-auto","rounded-full",3,"src"],[1,"p-2"],[1,"pb-1","text-xl","font-medium","leading-8","text-center","text-gray-900"],[1,"text-xs","italic","text-gray-600"],[1,"text-center","table-text-left"],[1,"px-2","pb-1","text-xs","text-gray-600"],[1,"font-bold","text-gray-900"],[1,"mx-auto","my-2","text-xs"],[1,"px-2"],[1,"px-2","text-xs","text-gray-600"],[1,"my-3","text-center"],["href","https://github.com/AndrewJBateman","target","_blank","rel","noopener noreferrer",1,"mr-5","text-xs","italic","font-medium","text-indigo-600","hover:underline","hover:text-indigo-800"],["href","https://andrewbateman.org/contact","target","_blank","rel","noopener noreferrer",1,"text-xs","italic","font-medium","text-indigo-600","hover:underline","hover:text-indigo-800"]],template:function ContactComponent_Template(rf,ctx){1&rf&&(core.Jc(0,"head"),core.Fc(1,"meta",0),core.Ic(),core.Jc(2,"body",1),core.fd(3,ContactComponent_ng_container_3_Template,44,15,"ng-container",2),core.Tc(4,"async"),core.Ic()),2&rf&&(core.vc(3),core.Xc("ngIf",core.Uc(4,1,ctx.user$)))},directives:[common.j],pipes:[common.b,common.m,common.e],encapsulation:2});const routes=[{path:"",component:contact_component_ContactComponent}];class ContactRoutingModule{}ContactRoutingModule.\u0275fac=function ContactRoutingModule_Factory(t){return new(t||ContactRoutingModule)},ContactRoutingModule.\u0275mod=core.Cc({type:ContactRoutingModule}),ContactRoutingModule.\u0275inj=core.Bc({imports:[[router.c.forChild(routes)],router.c]});class ContactModule{}ContactModule.\u0275fac=function ContactModule_Factory(t){return new(t||ContactModule)},ContactModule.\u0275mod=core.Cc({type:ContactModule}),ContactModule.\u0275inj=core.Bc({imports:[[common.c,ContactRoutingModule]]})}};