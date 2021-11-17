(this.webpackJsonpannuaire=this.webpackJsonpannuaire||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),s=n(10),a=n.n(s),l=(n(16),n(6)),i=n(2),o=n(4),u=n(0),j=function(e){var t=Object(i.f)(),n=Object(r.useState)(e.currentSearch||""),c=Object(o.a)(n,2),s=c[0],a=c[1],l=e.loadindState||!1;return Object(u.jsxs)("form",{className:"row",onSubmit:function(e){e.preventDefault(),t("/resultats/".concat(s,"/1"))},children:[Object(u.jsx)("div",{className:"col-sm-12 col-md-9 my-1 ps-0",children:Object(u.jsx)("input",{type:"search",className:"form-control",id:"searchText",placeholder:"Entrez un nom, un siret ou un siren",value:s,onChange:function(e){a(e.target.value)}})}),Object(u.jsxs)("div",{className:"col-sm-12 col-md-3 my-1 pe-0",children:[l&&Object(u.jsxs)("button",{className:"btn btn-primary w-100",disabled:!0,type:"button",children:[Object(u.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(u.jsx)("span",{className:"d-sm-none",children:"Recherche en cours"})]}),!l&&Object(u.jsx)("button",{className:"btn btn-primary w-100",type:"button",onClick:function(){return t("/resultats/".concat(s,"/1"))},children:"Lancer"})]})]})},d=function(){return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h1",{className:"text-center my-4",children:"Annuaire des entreprises en France"}),Object(u.jsx)(j,{}),Object(u.jsx)("p",{className:"text-primary text-center fs-4 my-3",children:"Retrouvez toutes les informations publiques concernant les entreprises fran\xe7aises"})]})},b=n(9),h=n.n(b),m=n(5),x=n(11),p=function(e){for(var t=Object(i.f)(),n=e.currentPage,r=e.totalPages,c=e.currentSearch,s=[],a=function(e){r>10&&(r=10);var a=Object(u.jsx)("li",{className:"page-item ".concat(e-n===0?"active":""),children:Object(u.jsx)("button",{className:"page-link",onClick:function(){return t("/resultats/".concat(c,"/").concat(e))},children:e})},"page-".concat(e));s.push(a)},l=1;l<=r;l++)a(l);return Object(u.jsx)("nav",{className:"row my-3",children:Object(u.jsxs)("ul",{className:"pagination flex-wrap justify-content-center",children:[Object(u.jsx)("li",{className:"page-item ".concat(n-1===0?"disabled":""),children:Object(u.jsx)("button",{className:"page-link",onClick:function(){return t("/resultats/".concat(c,"/").concat(1*n-1))},children:"Pr\xe9c\xe9dent"})}),s,Object(u.jsx)("li",{className:"page-item ".concat(n-r===0?"disabled":""),children:Object(u.jsx)("button",{className:"page-link",onClick:function(){return t("/resultats/".concat(c,"/").concat(1*n+1))},children:"Suivant"})})]})})},O=function(e){var t=e.nom,n=e.activitePrincipale;return Object(u.jsx)("div",{className:"card border-0 col-sm-12 col-md-4",children:Object(u.jsxs)("div",{className:"card-body rounded-2 bg-light custom-shadow  my-2 mx-2",children:[Object(u.jsx)("h5",{className:"card-title",children:t}),Object(u.jsx)("p",{className:"card-text",children:n}),Object(u.jsx)("button",{className:"btn btn-primary disabled",children:"Voir plus"})]})})},f=function(){return Object(u.jsxs)("div",{className:"col-12 my-5 d-flex justify-content-center align-items-center",children:[Object(u.jsx)("div",{className:"spinner-border text-primary",role:"status"}),Object(u.jsx)("span",{className:"sr-only",children:" \xa0 Chargement..."})]})},g=function(){var e=Object(r.useState)({loading:!0,error:!1,result:null,nothingFound:!1}),t=Object(o.a)(e,2),n=t[0],c=t[1],s=Object(i.g)(),a=s.searchText,l=s.currentPage;return Object(r.useEffect)((function(){Object(x.a)(h.a.mark((function e(){var t,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:!1})})),e.prev=1,e.next=4,fetch("https://entreprise.data.gouv.fr/api/sirene/v1/full_text/".concat(a,"?per_page=12&page=").concat(l));case 4:if(!(t=e.sent).ok||404===t.status){e.next=10;break}return e.next=8,t.json();case 8:n=e.sent,c((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!1,result:n,nothingFound:!1})}));case 10:if(404!==t.status){e.next=16;break}return e.next=13,t.json();case 13:r=e.sent,console.error(r),c((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!1,result:null,nothingFound:!0})}));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0),c((function(t){return Object(m.a)(Object(m.a)({},t),{},{loading:!1,error:!0,result:e.t0,nothingFound:!1})}));case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))()}),[l,a]),Object(u.jsxs)("div",{className:"row mt-2",children:[Object(u.jsx)("h1",{className:"text-center my-4",children:"Annuaire des entreprises en France"}),Object(u.jsx)(j,{currentSearch:a,loadindState:n.loading}),Object(u.jsxs)("div",{className:"row",children:[n.error&&Object(u.jsx)("div",{className:"col-12 py-3",children:Object(u.jsx)("p",{className:"text-danger",children:"Oops, il y a eu une erreur. Essayez de relancer la recherche ou v\xe9rifiez votre connexion"})}),n.nothingFound&&Object(u.jsxs)("p",{className:"text-center py-3",children:["\ud83e\udd14 Nous n'avons rien trouv\xe9 qui ressemble \xe0 \"",a,"\". V\xe9rifiez l'orthographe ou changez de recherche."]}),n.loading&&Object(u.jsx)(f,{}),null!=n.result&&!n.loading&&!n.error&&Object(u.jsxs)("div",{className:"container mt-3",children:[Object(u.jsxs)("h2",{children:[n.result.total_results," ",n.result.total_results>1?"r\xe9sultats trouv\xe9s":"r\xe9sultat touv\xe9",' pour "',a,'"']}),n.result.total_results>1e3&&Object(u.jsx)("p",{className:"alert-warning p-1 rounded-1",children:"\ud83d\ude33 \xc7a fait beaucoup l\xe0. Essayez d'affiner votre recherche pour un r\xe9sultat pr\xe9cis."}),Object(u.jsx)("div",{className:"row",children:n.result.etablissement.map((function(e){return Object(u.jsx)(O,{nom:e.nom_raison_sociale,activitePrincipale:e.libelle_activite_principale},e.id)}))}),n.result.total_pages>=1&&Object(u.jsx)(p,{totalPages:n.result.total_pages,currentSearch:a,currentPage:l})]})]})]})},v=function(){return Object(u.jsxs)("div",{className:"row d-flex h-100 align-items-center",style:{padding:"1rem"},children:[Object(u.jsx)("h1",{className:"text-center",children:"Erreur 404, Page non trouv\xe9 "}),Object(u.jsx)("button",{className:"btn btn-primary",children:Object(u.jsx)(l.b,{to:"/",children:"Retour \xe0 la page d'acceuil"})})]})},N=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"container-fluid px-0",children:Object(u.jsxs)("nav",{className:"px-2 navbar navbar-expand-lg navbar-light bg-light justify-content-between",children:[Object(u.jsx)(l.b,{to:"/",className:"navbar-brand",children:"Annuaire d'entreprises"}),Object(u.jsx)("span",{className:"navbar-tex",children:" Toutes les donn\xe9es publics des entreprises en France"})]})}),Object(u.jsx)("main",{className:"container",children:Object(u.jsxs)(i.c,{children:[Object(u.jsx)(i.a,{path:"/",element:Object(u.jsx)(d,{})}),Object(u.jsx)(i.a,{path:"resultats/:searchText/:currentPage",element:Object(u.jsx)(g,{})}),Object(u.jsx)(i.a,{path:"*",element:Object(u.jsx)(v,{})})]})})]})};a.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(l.a,{children:Object(u.jsx)(N,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.901925d8.chunk.js.map