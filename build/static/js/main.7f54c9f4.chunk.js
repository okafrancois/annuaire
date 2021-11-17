(this.webpackJsonpannuaire=this.webpackJsonpannuaire||[]).push([[0],{16:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var r=n(1),s=n.n(r),c=n(11),a=n.n(c),i=(n(16),n(6)),l=n(2),o=n(5),u=n(0),j=function(e){var t=Object(l.f)(),n=Object(r.useState)(e.currentSearch||""),s=Object(o.a)(n,2),c=s[0],a=s[1],i=e.loadindState||!1;return Object(u.jsxs)("form",{className:"row",onSubmit:function(e){e.preventDefault(),t("/resultats/".concat(c,"/1"))},children:[Object(u.jsx)("div",{className:"col-sm-12 col-md-9 my-1 ps-0",children:Object(u.jsx)("input",{type:"search",className:"form-control",id:"searchText",placeholder:"Entrez un nom, un siret ou un siren",value:c,onChange:function(e){a(e.target.value)}})}),Object(u.jsxs)("div",{className:"col-sm-12 col-md-3 my-1 pe-0",children:[i&&Object(u.jsxs)("button",{className:"btn btn-primary w-100",disabled:!0,type:"button",children:[Object(u.jsx)("span",{className:"spinner-border spinner-border-sm",role:"status","aria-hidden":"true"}),Object(u.jsx)("span",{className:"d-sm-none",children:"Recherche en cours"})]}),!i&&Object(u.jsx)("button",{className:"btn btn-primary w-100",type:"button",onClick:function(){return t("/resultats/".concat(c,"/1"))},children:"Lancer"})]})]})},d=function(){return Object(u.jsxs)("div",{className:"row",children:[Object(u.jsx)("h1",{className:"text-center my-4",children:"Annuaire des entreprises en France"}),Object(u.jsx)(j,{}),Object(u.jsx)("p",{className:"text-primary text-center fs-4 my-3",children:"Retrouvez toutes les informations publiques concernant les entreprises fran\xe7aises"})]})},b=n(7),h=n.n(b),m=n(3),x=n(8),p=function(e){for(var t=Object(l.f)(),n=e.currentPage,r=e.totalPages,s=e.currentSearch,c=[],a=function(e){r>10&&(r=10);var a=Object(u.jsx)("li",{className:"page-item ".concat(e-n===0?"active":""),children:Object(u.jsx)("button",{className:"page-link",onClick:function(){return t("/resultats/".concat(s,"/").concat(e))},children:e})},"page-".concat(e));c.push(a)},i=1;i<=r;i++)a(i);return Object(u.jsx)("nav",{className:"row my-3",children:Object(u.jsxs)("ul",{className:"pagination flex-wrap justify-content-center",children:[Object(u.jsx)("li",{className:"page-item ".concat(n-1===0?"disabled":""),children:Object(u.jsx)("button",{className:"page-link",onClick:function(){return t("/resultats/".concat(s,"/").concat(1*n-1))},children:"Pr\xe9c\xe9dent"})}),c,Object(u.jsx)("li",{className:"page-item ".concat(n-r===0?"disabled":""),children:Object(u.jsx)("button",{className:"page-link",onClick:function(){return t("/resultats/".concat(s,"/").concat(1*n+1))},children:"Suivant"})})]})})},O=function(e){var t=Object(l.f)(),n=e.nom,r=e.activitePrincipale,s=e.siren;return Object(u.jsx)("div",{className:"card border-0 col-sm-12 col-md-4",children:Object(u.jsxs)("div",{className:"card-body rounded-2 bg-light custom-shadow  my-2 mx-2",children:[Object(u.jsx)("h5",{className:"card-title",children:n}),Object(u.jsx)("p",{className:"card-text",children:r}),Object(u.jsx)("button",{className:"btn btn-primary",onClick:function(){return t("/entreprise/".concat(s))},children:"Plus de d\xe9tails"})]})})},f=function(){return Object(u.jsxs)("div",{className:"col-12 my-5 d-flex justify-content-center align-items-center",children:[Object(u.jsx)("div",{className:"spinner-border text-primary",role:"status"}),Object(u.jsx)("span",{className:"sr-only",children:" \xa0 Chargement..."})]})},v=function(){var e=Object(r.useState)({loading:!0,error:!1,result:null,nothingFound:!1}),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(l.g)(),a=c.searchText,i=c.currentPage;return Object(r.useEffect)((function(){Object(x.a)(h.a.mark((function e(){var t,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:!1})})),e.prev=1,e.next=4,fetch("https://entreprise.data.gouv.fr/api/sirene/v1/full_text/".concat(a,"?per_page=12&page=").concat(i));case 4:if(!(t=e.sent).ok||404===t.status){e.next=10;break}return e.next=8,t.json();case 8:n=e.sent,s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!1,result:n,nothingFound:!1})}));case 10:if(404!==t.status){e.next=16;break}return e.next=13,t.json();case 13:r=e.sent,console.error(r),s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!1,result:null,nothingFound:!0})}));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0),s((function(t){return Object(m.a)(Object(m.a)({},t),{},{loading:!1,error:!0,result:e.t0,nothingFound:!1})}));case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))()}),[i,a]),Object(u.jsxs)("div",{className:"row mt-2",children:[Object(u.jsx)("h1",{className:"text-center my-4",children:"Annuaire des entreprises en France"}),Object(u.jsx)(j,{currentSearch:a,loadindState:n.loading}),Object(u.jsxs)("div",{className:"row",children:[n.error&&Object(u.jsx)("div",{className:"col-12 py-3",children:Object(u.jsx)("p",{className:"text-danger",children:"Oops, il y a eu une erreur. Essayez de relancer la recherche ou v\xe9rifiez votre connexion"})}),n.nothingFound&&Object(u.jsxs)("p",{className:"text-center py-3",children:["\ud83e\udd14 Nous n'avons rien trouv\xe9 qui ressemble \xe0 \"",a,"\". V\xe9rifiez l'orthographe ou changez de recherche."]}),n.loading&&Object(u.jsx)(f,{}),null!=n.result&&!n.loading&&!n.error&&Object(u.jsxs)("div",{className:"container mt-3",children:[Object(u.jsxs)("h2",{children:[n.result.total_results," ",n.result.total_results>1?"r\xe9sultats trouv\xe9s":"r\xe9sultat touv\xe9",' pour "',a,'"']}),n.result.total_results>1e3&&Object(u.jsx)("p",{className:"alert-warning p-1 rounded-1",children:"\ud83d\ude33 \xc7a fait beaucoup l\xe0. Essayez d'affiner votre recherche pour un r\xe9sultat pr\xe9cis."}),Object(u.jsx)("div",{className:"row",children:n.result.etablissement.map((function(e){return Object(u.jsx)(O,{nom:e.nom_raison_sociale,activitePrincipale:e.libelle_activite_principale,siren:e.siren},e.id)}))}),n.result.total_pages>=1&&Object(u.jsx)(p,{totalPages:n.result.total_pages,currentSearch:a,currentPage:i})]})]})]})},g=["Janvier","F\xe9vrier","Mars","Avril","Mai","Juin","Juillet","Ao\xfbt","Septembre","Octobre","Novembre","D\xe9cembre"],N=function(){var e=Object(r.useState)({loading:!0,error:!1,result:null,nothingFound:!1}),t=Object(o.a)(e,2),n=t[0],s=t[1],c=Object(l.g)().searchSiren;return Object(r.useEffect)((function(){Object(x.a)(h.a.mark((function e(){var t,n,r;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!0,error:!1})})),e.prev=1,e.next=4,fetch("https://entreprise.data.gouv.fr/api/sirene/v1/siren/".concat(c));case 4:if(!(t=e.sent).ok||404===t.status){e.next=10;break}return e.next=8,t.json();case 8:n=e.sent,s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!1,result:n,nothingFound:!1})}));case 10:if(404!==t.status){e.next=16;break}return e.next=13,t.json();case 13:r=e.sent,console.error(r),s((function(e){return Object(m.a)(Object(m.a)({},e),{},{loading:!1,error:!1,result:null,nothingFound:!0})}));case 16:e.next=22;break;case 18:e.prev=18,e.t0=e.catch(1),console.error(e.t0),s((function(t){return Object(m.a)(Object(m.a)({},t),{},{loading:!1,error:!0,result:e.t0,nothingFound:!1})}));case 22:case"end":return e.stop()}}),e,null,[[1,18]])})))()}),[c]),Object(u.jsxs)("div",{className:"container-fluid",children:[Object(u.jsx)("h1",{className:"text-center my-4",children:"Annuaire des entreprises en France"}),Object(u.jsx)(j,{currentSearch:c,loadindState:n.loading}),!n.error&&null!=n.result&&Object(u.jsx)(y,{details:n.result.siege_social}),Object(u.jsxs)("div",{className:"row messages",children:[n.error&&Object(u.jsx)("div",{className:"col-12 py-3",children:Object(u.jsx)("p",{className:"text-danger",children:"Oops, il y a eu une erreur. Essayez de relancer la recherche ou v\xe9rifiez votre connexion"})}),n.nothingFound&&Object(u.jsxs)("p",{className:"text-center py-3",children:["\ud83e\udd14 Nous n'avons rien trouv\xe9 qui ressemble \xe0 \"",c,"\". V\xe9rifiez l'orthographe ou changez de recherche."]}),n.loading&&Object(u.jsx)(f,{})]})]})},y=function(e){var t=e.details,n=t.siren,r=t.siret,s=t.libelle_activite_principale,c=t.date_creation,a=t.nom_raison_sociale,i=t.libelle_nature_juridique_entreprise,l=t.geo_adresse;return Object(u.jsx)("div",{className:"item-details mt-3 h-100 bg-light p-3 rounded-3",children:Object(u.jsxs)("div",{className:"titles",children:[Object(u.jsx)("h2",{className:"item-name",children:a}),Object(u.jsx)("p",{className:"item-siren",children:n}),Object(u.jsxs)("p",{className:"item-date",children:[Object(u.jsx)("span",{className:"fw-bold",children:"Date de cr\xe9ation: "}),function(){var e=c.slice(0,4),t=parseInt(c.slice(4,6),10),n=c.slice(6,8);return"".concat(n," ").concat(g[t-1]," ").concat(e)}()]}),Object(u.jsxs)("p",{className:"item-siren",children:[Object(u.jsx)("span",{className:"fw-bold",children:"Siren: "}),n]}),Object(u.jsxs)("p",{className:"item-siret",children:[Object(u.jsx)("span",{className:"fw-bold",children:"Siret: "}),r]}),Object(u.jsxs)("p",{className:"item-statut",children:[Object(u.jsx)("span",{className:"fw-bold",children:"Nature juridique: "}),i]}),Object(u.jsxs)("div",{className:"item-description",children:[Object(u.jsx)("p",{className:"fw-bold",children:"Activit\xe9 principale:"}),Object(u.jsx)("p",{children:s})]}),Object(u.jsxs)("div",{className:"item-adresse",children:[Object(u.jsx)("span",{className:"fw-bold",children:"Si\xe8ge social: "}),l]})]})})},w=function(){return Object(u.jsxs)("div",{className:"row d-flex h-100 align-items-center",style:{padding:"1rem"},children:[Object(u.jsx)("h1",{className:"text-center",children:"Erreur 404, Page non trouv\xe9 "}),Object(u.jsx)("button",{className:"btn btn-primary",children:Object(u.jsx)(i.b,{to:"/",children:"Retour \xe0 la page d'acceuil"})})]})},_=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)("header",{className:"container-fluid px-0",children:Object(u.jsxs)("nav",{className:"px-2 navbar navbar-expand-lg navbar-light bg-light justify-content-between",children:[Object(u.jsx)(i.b,{to:"/",className:"navbar-brand",children:"Annuaire d'entreprises"}),Object(u.jsx)("span",{className:"navbar-tex",children:" Toutes les donn\xe9es publics des entreprises en France"})]})}),Object(u.jsx)("main",{className:"container",children:Object(u.jsxs)(l.c,{children:[Object(u.jsx)(l.a,{path:"/",element:Object(u.jsx)(d,{})}),Object(u.jsx)(l.a,{path:"resultats/:searchText/:currentPage",element:Object(u.jsx)(v,{})}),Object(u.jsx)(l.a,{path:"entreprise/:searchSiren",element:Object(u.jsx)(N,{})}),Object(u.jsx)(l.a,{path:"*",element:Object(u.jsx)(w,{})})]})})]})};a.a.render(Object(u.jsx)(s.a.StrictMode,{children:Object(u.jsx)(i.a,{children:Object(u.jsx)(_,{})})}),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.7f54c9f4.chunk.js.map