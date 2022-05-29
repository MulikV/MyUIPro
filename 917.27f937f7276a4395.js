"use strict";(self.webpackChunkangular_boilerplate=self.webpackChunkangular_boilerplate||[]).push([[917],{4917:(I,p,g)=>{g.r(p),g.d(p,{SettingModule:()=>O});var l=g(9808),_=g(8330),e=g(5e3),m=g(4483),u=g(7758),a=g(3075);function x(n,r){1&n&&(e.TgZ(0,"label",22),e._uU(1,"Automatically detect operating system settings"),e.qZA())}function h(n,r){1&n&&(e.TgZ(0,"label",22),e._uU(1,"Manually detect operating system settings"),e.qZA())}function Z(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div"),e.TgZ(1,"h6",19),e._uU(2,"Automatic proxy setup"),e.qZA(),e._UZ(3,"div",10),e.TgZ(4,"div",11),e.TgZ(5,"input",20),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().proxySetting.isAutomaticProxy=i})("change",function(i){return e.CHM(t),e.oxw().chkAutoProxyChange(i)}),e.qZA(),e.YNc(6,x,2,0,"label",21),e.YNc(7,h,2,0,"label",21),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(5),e.Q6J("ngModel",t.proxySetting.isAutomaticProxy),e.xp6(1),e.Q6J("ngIf",t.proxySetting.isAutomaticProxy),e.xp6(1),e.Q6J("ngIf",!t.proxySetting.isAutomaticProxy)}}function y(n,r){1&n&&(e.TgZ(0,"p",33),e._uU(1,"Address is required."),e.qZA())}const c=function(n){return[n,"fdx-c-form-group fdx-c-form-group--float-label fdx-c-form-group--has-value"]};function A(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",23),e.TgZ(1,"div",24),e.TgZ(2,"div",25),e.TgZ(3,"div",26),e.TgZ(4,"input",27),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().proxySetting.address=i})("focus",function(i){return e.CHM(t),e.oxw().onAddressFocusEvent(i)}),e.qZA(),e.TgZ(5,"label",28),e.TgZ(6,"span"),e._uU(7," Address "),e.TgZ(8,"abbr",29),e._uU(9," *"),e.qZA(),e.TgZ(10,"span",30),e._uU(11,"(required)"),e.qZA(),e.qZA(),e._UZ(12,"span",31),e.qZA(),e.qZA(),e.qZA(),e.YNc(13,y,2,0,"p",32),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngClass",e.VKq(3,c,""==t.proxySetting.address&&t.isAddress?"fdx-c-form-group--is-invalid":"")),e.xp6(2),e.Q6J("ngModel",t.proxySetting.address),e.xp6(9),e.Q6J("ngIf",""==t.proxySetting.address&&1==t.isAddress)}}function P(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",34),e.TgZ(1,"div",5),e.TgZ(2,"div",35),e.TgZ(3,"div",26),e.TgZ(4,"input",36),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().proxySetting.userName=i}),e.qZA(),e.TgZ(5,"label",28),e.TgZ(6,"span"),e._uU(7," Username "),e._UZ(8,"abbr",37),e.TgZ(9,"span",30),e._uU(10,"(required)"),e.qZA(),e.qZA(),e._UZ(11,"span",31),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(12,"div",5),e.TgZ(13,"div",35),e.TgZ(14,"div",26),e.TgZ(15,"input",38),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().proxySetting.password=i}),e.qZA(),e.TgZ(16,"label",28),e.TgZ(17,"span"),e._uU(18," Password "),e._UZ(19,"abbr",37),e.TgZ(20,"span",30),e._uU(21,"(required)"),e.qZA(),e.qZA(),e._UZ(22,"span",31),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(4),e.Q6J("ngModel",t.proxySetting.userName),e.xp6(11),e.Q6J("ngModel",t.proxySetting.password)}}function T(n,r){1&n&&(e.TgZ(0,"p",42),e._uU(1,"Port is required & should be numeric value."),e.qZA())}function b(n,r){if(1&n){const t=e.EpF();e.TgZ(0,"div",23),e.TgZ(1,"div",5),e.TgZ(2,"div",25),e.TgZ(3,"div",26),e.TgZ(4,"input",39),e.NdJ("ngModelChange",function(i){return e.CHM(t),e.oxw().proxySetting.port=i})("keypress",function(i){return e.CHM(t),e.oxw().keyPressNumbers(i)})("focus",function(i){return e.CHM(t),e.oxw().onPortFocusEvent(i)}),e.qZA(),e.TgZ(5,"label",28),e.TgZ(6,"span"),e._uU(7," Port "),e.TgZ(8,"abbr",40),e._uU(9," *"),e.qZA(),e.TgZ(10,"span",30),e._uU(11,"(required)"),e.qZA(),e.qZA(),e._UZ(12,"span",31),e.qZA(),e.qZA(),e.qZA(),e.YNc(13,T,2,0,"p",41),e.qZA(),e.qZA()}if(2&n){const t=e.oxw();e.xp6(2),e.Q6J("ngClass",e.VKq(3,c,""==t.proxySetting.port&&t.isPort?"fdx-c-form-group--is-invalid":"")),e.xp6(2),e.Q6J("ngModel",t.proxySetting.port),e.xp6(9),e.Q6J("ngIf",""==t.proxySetting.port&&1==t.isPort)}}let C=(()=>{class n{constructor(t,o){this.proxySettingService=t,this.notify=o,this.isAddress=!1,this.isPort=!1,this.proxySetting={isProxyOn:!1,isAutomaticProxy:!1,address:"",port:"",userName:"",password:""}}ngOnInit(){this.proxySettingService.getProxySettingList().subscribe(t=>{this.proxySetting=t.data,console.log(t.data)})}onSubmit(t){let o={isProxyOn:this.proxySetting.isProxyOn,isAutomaticProxy:this.proxySetting.isAutomaticProxy,address:void 0===t.value.address||null==t.value.address?"":t.value.address,port:void 0===t.value.port||null==t.value.port?"":t.value.port,userName:void 0===t.value.userName||null==t.value.userName?"":t.value.userName,password:void 0===t.value.password||null==t.value.password?"":t.value.password};this.isAddress=!(!this.proxySetting.isProxyOn||o.isAutomaticProxy||""!=o.address.trim()),this.isPort=!(!this.proxySetting.isProxyOn||o.isAutomaticProxy||""!=o.port.trim()),!this.isAddress&&!this.isPort&&this.proxySettingService.postProxySetting(o).subscribe(i=>{console.log(i),this.notify.showSuccess(i.message)},i=>{this.notify.showError(i.error.errorMessage.message),console.log(i)})}chkAutoProxyChange(t){this.proxySetting.isAutomaticProxy=t.target.checked,this.proxySetting.isAutomaticProxy||(this.proxySetting.address="",this.proxySetting.port="",this.proxySetting.userName="",this.proxySetting.password="")}chkUserProxyChange(t){this.proxySetting.isProxyOn=t.target.checked,this.proxySetting.isAutomaticProxy=!1,this.proxySetting.address="",this.proxySetting.port="",this.proxySetting.userName="",this.proxySetting.password=""}keyPressNumbers(t){var o=t.which?t.which:t.keyCode;return!(o<48||o>57)||(t.preventDefault(),!1)}onAddressFocusEvent(t){this.isAddress=!0}onPortFocusEvent(t){this.isPort=!0}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.k),e.Y36(u.g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-proxysetting"]],decls:30,vars:5,consts:[[1,"fdx-o-grid--max-width","fdx-u-mt--7","fdx-u-mb--7"],[3,"ngSubmit"],["fm","ngForm"],[1,"fdx-u-border--top","fdx-u-border--right","fdx-u-border--left","fdx-u-border--bottom",2,"padding","2%"],[2,"float","right"],[1,"column"],[1,"fdx-c-button","fdx-c-button--secondary-outline"],[1,"fdx-c-heading","fdx-c-heading--h4"],[2,"padding-top","2%"],[1,"fdx-c-heading","fdx-c-heading--h6"],[2,"padding-top","1%"],[1,"fdx-c-form-group","fdx-c-form-group--toggle"],["type","checkbox","name","isProxyOn","id","chkManualProxySetup","value","VALUE","aria-describedby","text-1 text-2","aria-labelledby","check4","required","",1,"fdx-c-form-group__checkbox",3,"ngModel","ngModelChange","change"],["for","chkManualProxySetup",1,"fdx-c-form__label","ng-star-inserted"],[4,"ngIf"],[1,"container-flex"],[1,"row"],["style","padding-top: 1%;","class","form-group",4,"ngIf"],["class","form-group",4,"ngIf"],["id","text-1",1,"fdx-c-heading","fdx-c-heading--h6",2,"padding-top","2%"],["type","checkbox","name","isAutomaticProxy","id","chkAutoProxySetup","value","VALUE","aria-describedby","text-1 text-2","aria-labelledby","check4","required","",1,"fdx-c-form-group__checkbox",3,"ngModel","ngModelChange","change"],["for","chkAutoProxySetup","class","fdx-c-form__label",4,"ngIf"],["for","chkAutoProxySetup",1,"fdx-c-form__label"],[1,"form-group",2,"padding-top","1%"],[1,"columns"],[3,"ngClass"],[1,"fdx-c-form-group__item"],["type","text","id","txtAddress","value","","aria-describedby","alertID","name","address","required","",1,"fdx-c-form-group__input",3,"ngModel","ngModelChange","focus"],["for","INPUT",1,"fdx-c-form-group__label","fdx-c-form-group__label--dark"],["aria-hidden","true",1,"fdx-u-bg-color--red",2,"color","red"],[1,"fdx-u-visual-hidden"],[1,"fdx-c-form-group__label__description"],["class","fdx-c-form-group__message fdx-c-form-group__message--has-message","style","color: red;",4,"ngIf"],[1,"fdx-c-form-group__message","fdx-c-form-group__message--has-message",2,"color","red"],[1,"form-group"],[1,"fdx-c-form-group","fdx-c-form-group--float-label","fdx-c-form-group--has-value"],["type","text","id","txtUsername","value","","name","userName","aria-describedby","alertID",1,"fdx-c-form-group__input",3,"ngModel","ngModelChange"],["aria-hidden","true"],["type","password","id","txtpassword","value","","name","password","aria-describedby","alertID",1,"fdx-c-form-group__input",3,"ngModel","ngModelChange"],["type","text","id","txtport","value","","aria-describedby","alertID","name","port","required","",1,"fdx-c-form-group__input",3,"ngModel","ngModelChange","keypress","focus"],["aria-hidden","true",2,"color","red"],["class","fdx-c-form-group__message fdx-c-form-group__message--has-message","style","overflow-wrap: break-word;max-width: fit-content; color: red;",4,"ngIf"],[1,"fdx-c-form-group__message","fdx-c-form-group__message--has-message",2,"overflow-wrap","break-word","max-width","fit-content","color","red"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"form",1,2),e.NdJ("ngSubmit",function(){e.CHM(i);const d=e.MAs(2);return o.onSubmit(d)}),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"button",6),e._uU(7," Save "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"h4",7),e._uU(9,"Proxy Settings"),e.qZA(),e._UZ(10,"div",8),e.TgZ(11,"h6",9),e._uU(12,"User proxy setup"),e.qZA(),e._UZ(13,"div",10),e.TgZ(14,"div",11),e.TgZ(15,"input",12),e.NdJ("ngModelChange",function(d){return o.proxySetting.isProxyOn=d})("change",function(d){return o.chkUserProxyChange(d)}),e.qZA(),e.TgZ(16,"label",13),e._uU(17,"User Proxy Server"),e.qZA(),e.qZA(),e._UZ(18,"div",8),e.YNc(19,Z,8,3,"div",14),e.TgZ(20,"div",15),e.TgZ(21,"div",16),e.YNc(22,A,14,5,"div",17),e.qZA(),e.qZA(),e.TgZ(23,"div",15),e.TgZ(24,"div",16),e.YNc(25,P,23,2,"div",18),e.qZA(),e.qZA(),e.TgZ(26,"div",15),e.TgZ(27,"div",16),e.YNc(28,b,14,5,"div",17),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(29,"div",8),e.qZA()}2&t&&(e.xp6(15),e.Q6J("ngModel",o.proxySetting.isProxyOn),e.xp6(4),e.Q6J("ngIf",o.proxySetting.isProxyOn),e.xp6(3),e.Q6J("ngIf",o.proxySetting.isProxyOn&&!o.proxySetting.isAutomaticProxy),e.xp6(3),e.Q6J("ngIf",o.proxySetting.isProxyOn&&!o.proxySetting.isAutomaticProxy),e.xp6(3),e.Q6J("ngIf",o.proxySetting.isProxyOn&&!o.proxySetting.isAutomaticProxy))},directives:[a._Y,a.JL,a.F,a.Zs,a.Wl,a.JJ,a.On,l.O5,l.mk,a.Fj,a.Q7],styles:['.hr[_ngcontent-%COMP%], .hr1[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.column[_ngcontent-%COMP%]{float:left;width:50%;padding:2%}.columns[_ngcontent-%COMP%]{float:left;width:100%;padding:2%}.row[_ngcontent-%COMP%]{display:inline-block;width:60%}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}']}),n})();var q=g(520);let S=(()=>{class n{constructor(t){this.http=t}postLogfile(t){return this.http.post("https://localhost:44361/Settings/CreateLogSettingsAsync",t)}getLogfileList(){return this.http.get("https://localhost:44361/Settings/GetLogSettingsAsync")}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(q.eN))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac,providedIn:"root"}),n})();function w(n,r){1&n&&(e.TgZ(0,"p",30),e._uU(1,"Path field is required."),e.qZA())}function M(n,r){1&n&&(e.TgZ(0,"p",30),e._uU(1,"Valid Path is required."),e.qZA())}function U(n,r){1&n&&(e.TgZ(0,"div",31),e._uU(1,"Retention period field must be between 1 and 60."),e.qZA())}function k(n,r){1&n&&(e.TgZ(0,"div",31),e._uU(1,"Retention period field should be numeric value."),e.qZA())}const f=function(n){return[n,"fdx-c-form-group fdx-c-form-group--float-label fdx-c-form-group--has-value"]};let J=(()=>{class n{constructor(t,o){this.logfileService=t,this.notify=o,this.browsevalue="",this.isPath=!1,this.isValidPath=!0,this.isRetentionPeriodValid=!1,this.isRetentionPeriodNumericValid=!1,this.logfile={path:"",retentionPeriod:"",level:"",sysCreatedBy:"",sysCreatedDate:"",sysUpdatedBy:"",sysUpdatedDate:"",id:""}}ngOnInit(){this.logfileService.getLogfileList().subscribe(t=>{this.logfile=t.data,console.log(t.data),this.logfile.retentionPeriod=""==this.logfile.retentionPeriod||"0"==this.logfile.retentionPeriod?"30":this.logfile.retentionPeriod})}onSubmit(t){let o={path:void 0===t.value.path||null==t.value.path?"":t.value.path,retentionPeriod:void 0===t.value.retentionPeriod||null==t.value.retentionPeriod||""==t.value.retentionPeriod.trim()?"30":t.value.retentionPeriod,level:this.logfile.level,sysCreatedBy:"Vaibhav"};this.isPath=""==o.path.trim(),this.isRetentionPeriodNumericValid=!1,!this.checkValidvalue(o.retentionPeriod)&&!this.isPath&&this.logfileService.postLogfile(o).subscribe(i=>{console.log(i),this.notify.showSuccess(i.message)},i=>{this.notify.showError(i.error.errorMessage.message),console.log(i)})}SelectFolderPath(t){}onRetentionPeriodkeypressEvent(t){var o=t.which?t.which:t.keyCode;o<48||o>57?(t.preventDefault(),this.isRetentionPeriodNumericValid=!0):this.isRetentionPeriodNumericValid=!1}onRetentionPeriodkeydownEvent(t){var i=t.keyCode||t.charCode;(8==i||46==i)&&(this.isRetentionPeriodNumericValid=!1)}onPathFocusEvent(t){this.isPath=!0}onPathFocusOutEvent(t){this.isValidPath=""==this.logfile.path.trim()||/^[a-zA-Z]:\\(\w+\\)*\w*$/.test(this.logfile.path)}checkValidvalue(t){if(""!=t){let o=+t;return o<1||o>60}return!1}checkValidPath(t){return""==t.trim()||/^[a-zA-Z]:\\(\w+\\)*\w*$/.test(t)}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(S),e.Y36(u.g))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-logfile"]],decls:55,vars:13,consts:[[1,"fdx-o-grid--max-width","fdx-u-mt--7","fdx-u-mb--7"],[3,"ngSubmit"],["fm","ngForm"],[1,"fdx-u-border--top","fdx-u-border--right","fdx-u-border--left","fdx-u-border--bottom",2,"padding","2%"],[2,"float","right"],[1,"column"],[1,"fdx-c-button","fdx-c-button--secondary-outline"],[1,"fdx-c-heading","fdx-c-heading--h4"],[2,"padding-top","2%"],[1,"container-flex"],[1,"row"],[1,"form-group"],[1,"columns"],[3,"ngClass"],[1,"fdx-c-form-group__item"],["type","text","id","txtPath","value","","name","Path","aria-describedby","alertID","name","path",1,"fdx-c-form-group__input",3,"ngModel","ngModelChange","focus","focusout"],["for","INPUT",1,"fdx-c-form-group__label","fdx-c-form-group__label--dark"],["aria-hidden","true",1,"fdx-u-bg-color--red",2,"color","red"],[1,"fdx-u-visual-hidden"],[1,"fdx-c-form-group__label__description"],["class","fdx-c-form-group__message fdx-c-form-group__message--has-message","style","color: red;",4,"ngIf"],[1,"form-group",2,"padding-top","2%"],["type","text","id","txtPeriod","aria-describedby","alertID","name","retentionPeriod",1,"fdx-c-form-group__input",3,"ngModel","ngModelChange","keypress","keydown"],["aria-hidden","true"],["class","fdx-c-form-group__message fdx-c-form-group__message--has-message","style","overflow-wrap: break-word;max-width: fit-content; color: red;",4,"ngIf"],[1,"fdx-c-form-group","fdx-c-form-group--select","fdx-c-form-group--float-label","fdx-c-form-group--has-value"],["id","dropdown","aria-labelledby","MyLABEL","name","level",1,"fdx-c-form-group__select",3,"ngModel","ngModelChange"],["value","Debug"],["value","INFO"],["for","INPUT","id","MyLABEL",1,"fdx-c-form-group__label"],[1,"fdx-c-form-group__message","fdx-c-form-group__message--has-message",2,"color","red"],[1,"fdx-c-form-group__message","fdx-c-form-group__message--has-message",2,"overflow-wrap","break-word","max-width","fit-content","color","red"]],template:function(t,o){if(1&t){const i=e.EpF();e.TgZ(0,"div",0),e.TgZ(1,"form",1,2),e.NdJ("ngSubmit",function(){e.CHM(i);const d=e.MAs(2);return o.onSubmit(d)}),e.TgZ(3,"div",3),e.TgZ(4,"div",4),e.TgZ(5,"div",5),e.TgZ(6,"button",6),e._uU(7," Save "),e.qZA(),e.qZA(),e.qZA(),e.TgZ(8,"h4",7),e._uU(9,"Log Files"),e.qZA(),e._UZ(10,"div",8),e.TgZ(11,"div",9),e.TgZ(12,"div",10),e.TgZ(13,"div",11),e.TgZ(14,"div",12),e.TgZ(15,"div",13),e.TgZ(16,"div",14),e.TgZ(17,"input",15),e.NdJ("ngModelChange",function(d){return o.logfile.path=d})("focus",function(d){return o.onPathFocusEvent(d)})("focusout",function(d){return o.onPathFocusOutEvent(d)}),e.qZA(),e.TgZ(18,"label",16),e.TgZ(19,"span"),e._uU(20," Path "),e.TgZ(21,"abbr",17),e._uU(22," *"),e.qZA(),e.TgZ(23,"span",18),e._uU(24,"(required)"),e.qZA(),e.qZA(),e._UZ(25,"span",19),e.qZA(),e.qZA(),e.qZA(),e.YNc(26,w,2,0,"p",20),e.YNc(27,M,2,0,"p",20),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.TgZ(28,"div",9),e.TgZ(29,"div",10),e.TgZ(30,"div",21),e.TgZ(31,"div",5),e.TgZ(32,"div",13),e.TgZ(33,"div",14),e.TgZ(34,"input",22),e.NdJ("ngModelChange",function(d){return o.logfile.retentionPeriod=d})("keypress",function(d){return o.onRetentionPeriodkeypressEvent(d)})("keydown",function(d){return o.onRetentionPeriodkeydownEvent(d)}),e.qZA(),e.TgZ(35,"label",16),e.TgZ(36,"span"),e._uU(37," Retention period in days (min 1,max 60) "),e._UZ(38,"abbr",23),e.TgZ(39,"span",18),e._uU(40,"(required)"),e.qZA(),e.qZA(),e._UZ(41,"span",19),e.qZA(),e.qZA(),e.qZA(),e.YNc(42,U,2,0,"div",24),e.YNc(43,k,2,0,"div",24),e.qZA(),e.TgZ(44,"div",5),e.TgZ(45,"div",25),e.TgZ(46,"span",14),e.TgZ(47,"select",26),e.NdJ("ngModelChange",function(d){return o.logfile.level=d}),e.TgZ(48,"option",27),e._uU(49,"DEBUG"),e.qZA(),e.TgZ(50,"option",28),e._uU(51,"INFO"),e.qZA(),e.qZA(),e.TgZ(52,"label",29),e._uU(53,"Active Log level"),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e.qZA(),e._UZ(54,"div",8),e.qZA()}2&t&&(e.xp6(15),e.Q6J("ngClass",e.VKq(9,f,o.isPath&&""==o.logfile.path||!o.checkValidPath(o.logfile.path)?"fdx-c-form-group--is-invalid":"")),e.xp6(2),e.Q6J("ngModel",o.logfile.path),e.xp6(9),e.Q6J("ngIf",o.isPath&&""==o.logfile.path),e.xp6(1),e.Q6J("ngIf",!o.checkValidPath(o.logfile.path)),e.xp6(5),e.Q6J("ngClass",e.VKq(11,f,o.checkValidvalue(o.logfile.retentionPeriod)||o.isRetentionPeriodNumericValid?"fdx-c-form-group--is-invalid":"")),e.xp6(2),e.Q6J("ngModel",o.logfile.retentionPeriod),e.xp6(8),e.Q6J("ngIf",o.checkValidvalue(o.logfile.retentionPeriod)),e.xp6(1),e.Q6J("ngIf",o.isRetentionPeriodNumericValid),e.xp6(4),e.Q6J("ngModel",o.logfile.level))},directives:[a._Y,a.JL,a.F,l.mk,a.Fj,a.JJ,a.On,l.O5,a.EJ,a.YN,a.Kr],styles:['.hr[_ngcontent-%COMP%], .hr1[_ngcontent-%COMP%]{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.column[_ngcontent-%COMP%]{float:left;width:50%;padding:2%}.columns[_ngcontent-%COMP%]{float:left;width:100%;padding:2%}.row[_ngcontent-%COMP%]{display:inline-block;width:60%}.row[_ngcontent-%COMP%]:after{content:"";display:table;clear:both}']}),n})(),L=(()=>{class n{constructor(){}ngOnInit(){}}return n.\u0275fac=function(t){return new(t||n)},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-setting"]],decls:8,vars:0,consts:[[1,"fdx-o-grid--max-width","fdx-u-mt--7","fdx-u-mb--7"],[1,"fdx-o-grid__row","fdx-u-align--center"],[1,"fdx-o-grid__item--12"],[1,"fdx-c-header","fdx-c-header--h2","fdx-c-header--h3@small-only","fdx-o-grid__item--8@small-only","fdx-u-ml--12@small-only"]],template:function(t,o){1&t&&(e.TgZ(0,"div",0),e.TgZ(1,"div",1),e.TgZ(2,"div",2),e.TgZ(3,"h1",3),e._uU(4,"Settings"),e.qZA(),e.qZA(),e.qZA(),e._UZ(5,"hr"),e._UZ(6,"app-proxysetting"),e._UZ(7,"app-logfile"),e.qZA())},directives:[C,J],styles:[""]}),n})(),O=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[l.ez,a.u5,a.UX,_.Bz.forChild([{path:"",component:L,data:{title:"SettingComponent",robots:"noindex, nofollow"}}])]]}),n})()}}]);