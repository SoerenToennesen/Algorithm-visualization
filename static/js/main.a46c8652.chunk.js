(this["webpackJsonpalgorithms-visualization"]=this["webpackJsonpalgorithms-visualization"]||[]).push([[0],{12:function(e,t,n){"use strict";n.r(t);var i=n(2),a=n(1),o=n.n(a),s=n(4),c=n.n(s);n(9),n(10);function l(e,t){for(var n=0;n<e.length;n++)if(e[n].toString()===t.toString())return!0;return!1}function r(e,t){for(var n=[],i=!1,a=t,o=e.length-1;o>=0&&(o===e.length-1&&n.push(t),!i);o--)for(var s=0;s<e[o].length;s++)if(e[o][s][0]===a[0]&&e[o][s][1]===a[1]){if(e[o][s][2]===Number.MIN_SAFE_INTEGER){i=!0;break}n.push([e[o][s][2],e[o][s][3]]),a=[e[o][s][2],e[o][s][3]];break}return n}function d(e,t,n,i,a,o,s,c,r){if(o)return e;var h,f=[[1,0],[0,1],[-1,0],[0,-1]],u=[],b=[];for(h=0;h<i.length;h++)i[h][3]>=i[h][4]?u.push([i[h][0]+f[i[h][2]][0],i[h][1]+f[i[h][2]][1],i[h][0],i[h][1]]):b.push([i[h][0],i[h][1],i[h][2],Math.round(10*(i[h][3]+.2))/10,i[h][4]]);e.push([[]]);var j=e.length-1;for(h=0;h<t.length;h++)if(!l(a,[t[h][0],t[h][1]])){0===h?e[j][0]=t[h]:e[j].push(t[h]),[t[h][0],t[h][1]].toString()!==[t[h][2],t[h][3]].toString()&&a.push([t[h][0],t[h][1]]);for(var g=0;g<f.length;g++)if(!(l(a,[t[h][0]+f[g][0],t[h][1]+f[g][1]])||t[h][0]+f[g][0]<=r[0]||t[h][0]+f[g][0]>=r[1]||t[h][1]+f[g][1]<=r[2]||t[h][1]+f[g][1]>=r[3])){var m,O=!0;for(m=0;m<s.length;m++)if([t[h][0]+f[g][0],t[h][1]+f[g][1]].toString()===s[m].toString()){O=!1;break}if(O)for(m=0;m<c.length;m++)if([t[h][0]+f[g][0],t[h][1]+f[g][1]].toString()===[c[m][0],c[m][1]].toString()){b.push([t[h][0],t[h][1],g,.2,c[m][2]]),O=!1;break}O&&u.push([t[h][0]+f[g][0],t[h][1]+f[g][1],t[h][0],t[h][1]])}o||t[h][0]!==n[0]||t[h][1]!==n[1]||(o=!0)}return u.toString()===[].toString()?e:d(e,u,n,b,a,o,s,c,r)}function h(e,t,n,i,a,o,s,c,r,d){if(o)return e;var f,u=[[1,0],[0,1],[-1,0],[0,-1]],b=[],j=[],g=[];for(f=0;f<i.length;f++)i[f][3]>=i[f][4]?d.push([i[f][0]+u[i[f][2]][0],i[f][1]+u[i[f][2]][1],i[f][0],i[f][1],e.length-1]):j.push([i[f][0],i[f][1],i[f][2],Math.round(10*(i[f][3]+.2))/10,i[f][4]]);e.push([[]]);var m=e.length-1;for(f=0;f<t.length;f++)if(!l(a,[t[f][0],t[f][1]])){0===f?e[m][0]=t[f]:e[m].push(t[f]),a.push([t[f][0],t[f][1]]);var O,v,x,p=-1,S=-1;for(O=0;O<u.length+1;O++){if(O!==u.length){if(l(a,[t[f][0]+u[O][0],t[f][1]+u[O][1]])||t[f][0]+u[O][0]<=r[0]||t[f][0]+u[O][0]>=r[1]||t[f][1]+u[O][1]<=r[2]||t[f][1]+u[O][1]>=r[3])continue;for(x=!0,v=0;v<s.length;v++)if([t[f][0]+u[O][0],t[f][1]+u[O][1]].toString()===s[v].toString()){x=!1;break}if(x)for(v=0;v<c.length;v++)if([t[f][0]+u[O][0],t[f][1]+u[O][1]].toString()===[c[v][0],c[v][1]].toString()){j.push([t[f][0],t[f][1],O,.2,c[v][2]]),x=!1;break}if(!x)continue;p=O;break}for(v=0;v<d.length;v++)p=O,S=v,g.push(d[v])}if(-1===p){var N=!0;for(O=e.length-1;O>=0;O--){var M=!1;for(v=0;v<u.length;v++)if(!(l(a,[e[O][0][0]+u[v][0],e[O][0][1]+u[v][1]])||e[O][0][0]+u[v][0]<=r[0]||e[O][0][0]+u[v][0]>=r[1]||e[O][0][1]+u[v][1]<=r[2]||e[O][0][1]+u[v][1]>=r[3])){var k;for(x=!0,k=0;k<s.length;k++)if([e[O][0][0]+u[v][0],e[O][0][1]+u[v][1]].toString()===s[k].toString()){x=!1;break}if(x)for(k=0;k<c.length;k++)if([e[O][0][0]+u[v][0],e[O][0][1]+u[v][1]].toString()===[c[k][0],c[k][1]].toString()){j.push([e[O][0][0],e[O][0][1],v,.2,c[k][2]]),x=!1;break}if(x){b.push([e[O][0][0]+u[v][0],e[O][0][1]+u[v][1],e[O][0][0],e[O][0][1]]),N=!1,M=!0;break}}if(M)break}if(N)return e}else 4===p?b.push([d[S][0],d[S][1],d[S][2],d[S][3]]):b.push([t[f][0]+u[p][0],t[f][1]+u[p][1],t[f][0],t[f][1]]);o||t[f][0]!==n[0]||t[f][1]!==n[1]||(o=!0)}var w=!0;return g.toString()===[].toString()&&(w=!1),h(e,b,n,j,a,o,s,c,r,w?g:d)}function f(e,t,n,i,a,o,s,c,r){if(o)return e;var d,h=[[1,0],[0,1],[-1,0],[0,-1]],u=[],b=[],j=[];for(d=0;d<i.length;d++)i[d][3]>=i[d][4]?j.push([i[d][0]+h[i[d][2]][0],i[d][1]+h[i[d][2]][1],i[d][0],i[d][1],e.length-1]):b.push([i[d][0],i[d][1],i[d][2],Math.round(10*(i[d][3]+.2))/10,i[d][4]]);e.push([[]]);var g=e.length-1;for(d=0;d<t.length;d++)if(!l(a,[t[d][0],t[d][1]])){0===d?e[g][0]=t[d]:e[g].push(t[d]),a.push([t[d][0],t[d][1]]);var m,O,v,x,p=[Number.MAX_SAFE_INTEGER,-1],S=[];for(m=0;m<j.length;m++)(v=Math.abs(j[m][0]-n[0])+Math.abs(j[m][1]-n[1]))<=p[0]&&(p=[v,m,1],S=[j[m][0],j[m][1],j[m][2],j[m][3]]);for(m=0;m<h.length;m++)if(!(l(a,[t[d][0]+h[m][0],t[d][1]+h[m][1]])||t[d][0]+h[m][0]<=r[0]||t[d][0]+h[m][0]>=r[1]||t[d][1]+h[m][1]<=r[2]||t[d][1]+h[m][1]>=r[3])){for(x=!0,O=0;O<s.length;O++)if([t[d][0]+h[m][0],t[d][1]+h[m][1]].toString()===s[O].toString()){x=!1;break}if(x)for(O=0;O<c.length;O++)if([t[d][0]+h[m][0],t[d][1]+h[m][1]].toString()===[c[O][0],c[O][1]].toString()){b.push([t[d][0],t[d][1],m,.2,c[O][2]]),x=!1;break}x&&(v=Math.abs(t[d][0]+h[m][0]-n[0])+Math.abs(t[d][1]+h[m][1]-n[1]))<=p[0]&&(p=[v,m,0])}if(0===p[2])u.push([t[d][0]+h[p[1]][0],t[d][1]+h[p[1]][1],t[d][0],t[d][1]]);else if(1===p[2])u.push(S);else{var N=[Number.MAX_SAFE_INTEGER,-1],M=!0,k=[];for(m=e.length-1;m>=0;m--)for(O=0;O<h.length;O++)if(!(l(a,[e[m][0][0]+h[O][0],e[m][0][1]+h[O][1]])||e[m][0][0]+h[O][0]<=r[0]||e[m][0][0]+h[O][0]>=r[1]||e[m][0][1]+h[O][1]<=r[2]||e[m][0][1]+h[O][1]>=r[3])){var w;for(x=!0,w=0;w<s.length;w++)if([e[m][0][0]+h[O][0],e[m][0][1]+h[O][1]].toString()===s[w].toString()){x=!1;break}if(x)for(w=0;w<c.length;w++)if([e[m][0][0]+h[O][0],e[m][0][1]+h[O][1]].toString()===[c[w][0],c[w][1]].toString()){b.push([e[m][0][0],e[m][0][1],O,.2,c[w][2]]),x=!1;break}x&&((v=Math.abs(e[m][0][0]+h[O][0]-n[0])+Math.abs(e[m][0][1]+h[O][1]-n[1]))<=N[0]&&(N=[v,O],k=[e[m][0][0],e[m][0][1]]),M=!1)}if(M)return e;u.push([k[0]+h[N[1]][0],k[1]+h[N[1]][1],k[0],k[1]])}o||t[d][0]!==n[0]||t[d][1]!==n[1]||(o=!0)}return f(e,u,n,b,a,o,s,c,r)}function u(e,t,n,i,a,o,s,c,r){if(o)return e;var d,h=[[1,0],[0,1],[-1,0],[0,-1]],f=[],b=[],j=[];for(d=0;d<i.length;d++)i[d][3]>=i[d][4]?j.push([i[d][0]+h[i[d][2]][0],i[d][1]+h[i[d][2]][1],i[d][0],i[d][1],e.length-1]):b.push([i[d][0],i[d][1],i[d][2],Math.round(10*(i[d][3]+.2))/10,i[d][4]]);e.push([[]]);var g=e.length-1;for(d=0;d<t.length;d++)if(!l(a,[t[d][0],t[d][1]])){0===d?e[g][0]=t[d]:e[g].push(t[d]),a.push([t[d][0],t[d][1]]);var m,O,v,x,p=[Number.MAX_SAFE_INTEGER,-1,-1],S=[];for(m=0;m<j.length;m++)(v=j[m][4]+(Math.abs(j[m][0]-n[0])+Math.abs(j[m][1]-n[1])))<=p[0]&&(p=[v,m,1],S=[j[m][0],j[m][1],j[m][2],j[m][3]]);for(m=0;m<h.length;m++)if(!(l(a,[t[d][0]+h[m][0],t[d][1]+h[m][1]])||t[d][0]+h[m][0]<=r[0]||t[d][0]+h[m][0]>=r[1]||t[d][1]+h[m][1]<=r[2]||t[d][1]+h[m][1]>=r[3])){for(x=!0,O=0;O<s.length;O++)if([t[d][0]+h[m][0],t[d][1]+h[m][1]].toString()===s[O].toString()){x=!1;break}if(x)for(O=0;O<c.length;O++)if([t[d][0]+h[m][0],t[d][1]+h[m][1]].toString()===[c[O][0],c[O][1]].toString()){b.push([t[d][0],t[d][1],m,.2,c[O][2]]),x=!1;break}x&&(v=g+1+(Math.abs(t[d][0]+h[m][0]-n[0])+Math.abs(t[d][1]+h[m][1]-n[1])))<=p[0]&&(p=[v,m,0])}if(0===p[2])f.push([t[d][0]+h[p[1]][0],t[d][1]+h[p[1]][1],t[d][0],t[d][1]]);else if(1===p[2])f.push(S);else{var N=[Number.MAX_SAFE_INTEGER,-1],M=!0,k=[];for(m=e.length-1;m>=0;m--)for(O=0;O<h.length;O++)if(!(l(a,[e[m][0][0]+h[O][0],e[m][0][1]+h[O][1]])||e[m][0][0]+h[O][0]<=r[0]||e[m][0][0]+h[O][0]>=r[1]||e[m][0][1]+h[O][1]<=r[2]||e[m][0][1]+h[O][1]>=r[3])){var w;for(x=!0,w=0;w<s.length;w++)if([e[m][0][0]+h[O][0],e[m][0][1]+h[O][1]].toString()===s[w].toString()){x=!1;break}if(x)for(w=0;w<c.length;w++)if([e[m][0][0]+h[O][0],e[m][0][1]+h[O][1]].toString()===[c[w][0],c[w][1]].toString()){b.push([e[m][0][0],e[m][0][1],O,.2,c[w][2]]),x=!1;break}x&&((v=g+1+(Math.abs(e[m][0][0]+h[O][0]-n[0])+Math.abs(e[m][0][1]+h[O][1]-n[1])))<=N[0]&&(N=[v,O],k=[e[m][0][0],e[m][0][1]]),M=!1)}if(M)return e;f.push([k[0]+h[N[1]][0],k[1]+h[N[1]][1],k[0],k[1]])}o||t[d][0]!==n[0]||t[d][1]!==n[1]||(o=!0)}return u(e,f,n,b,a,o,s,c,r)}var b=n(0);function j(e,t,n,i,a,o,s,c){return Object(b.jsxs)("div",{className:"legend-container",children:[Object(b.jsx)("div",{className:"legend-title",children:"Legend"}),e&&"Add walls"===o&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-colorm1",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Add walls"]}),s.toString()!==[].toString()&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-colorm2",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Wall nodes"]}),e&&"Add weights"===o&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-color0",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Add weights"]}),c.toString()!==[].toString()&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-colorm3",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Weight nodes"]}),e&&"Select nodes"===o&&!t&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-color1",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Select start node"]}),t&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-color1",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Start node"]}),t&&"Select nodes"===o&&!n&&(0===i?Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-color2",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (green light)"]}):1===i?Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-color3",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (computationally hard)"]}):Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-color4",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (restricted)"]})),n&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:0===a?"legend-color2":1===a?"legend-color3":"legend-color4",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Goal node"]}),n&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-color5",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Search"]}),n&&Object(b.jsxs)("div",{className:"legend-info",children:[Object(b.jsx)("div",{className:"legend-color6",children:Object(b.jsx)("i",{className:"fas fa-square"})}),"\xa0Path found"]})]})}function g(e,t,n,i,a){return Object(b.jsxs)("footer",{className:"footer-container",children:[!e&&Object(b.jsx)("div",{className:"footer-info",children:"Select an algorithm or datastructure"}),!t&&e&&Object(b.jsx)("div",{className:"footer-info",children:"Select your start node"}),t&&!n&&Object(b.jsx)("div",{className:"footer-info",children:"Select your goal node"}),t&&n&&Object(b.jsx)("div",{className:"footer-inf-nowiggle",children:"Enjoy the show!"})]})}function m(e,t,n,i){return Object(b.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",marginTop:"".concat(e[0],"px"),marginLeft:"".concat(e[1],"px"),top:"3px",left:"3px",backgroundColor:"Select nodes"===i?t?0===n?"rgb(49, 158, 63, 0.5)":1===n?"rgb(211, 221, 63, 0.5)":"rgb(221, 63, 63, 0.5)":"rgb(65,126,238, 0.5)":"Add walls"===i?"rgb(146, 95, 0, 0.5)":"rgb(68, 0, 179, 0.5)",borderRadius:"35%",display:"inline-block",zIndex:-1}})}function O(e,t,n){return Object(b.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"3px",left:"3px",backgroundColor:t?0===n?"rgb(49, 158, 63)":1===n?"rgb(211, 221, 63)":"rgb(221, 63, 63)":"rgb(65,126,238)",borderRadius:"35%",display:"inline-block",animation:"fadeMe .2s",zIndex:-.9}})}function v(e,t){return e.map((function(e){return e.map((function(e){return Object(b.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"3px",left:"3px",backgroundColor:"rgb(90, 90, 90)",borderRadius:"35%",display:"inline-block",animation:t?"fadeMe .2s":"",zIndex:-1}})}))}))}function x(e,t){return e.map((function(e){return Object(b.jsx)("div",{style:{position:"absolute",height:"7.5px",width:"7.5px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"6.85px",left:"6.85px",backgroundColor:"rgb(240,149,55)",borderRadius:"35%",display:"inline-block",animation:t?"fadeMe .2s":"",zIndex:-.8}})}))}function p(e,t){return e.map((function(e){return Object(b.jsx)("div",{style:{position:"absolute",height:"20px",width:"20px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"0px",left:"0px",backgroundColor:"rgb(146, 95, 0)",display:"inline-block",animation:t?"fadeMe 1s":"",zIndex:-.8}})}))}function S(e,t){return e.map((function(e){return Object(b.jsx)("div",{style:{position:"absolute",height:"20px",width:"20px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"0px",left:"0px",backgroundColor:"rgb(68, 0, 179, ".concat(e[2],")"),display:"inline-block",animation:t?"fadeMe 1s":"",zIndex:-.8}})}))}function N(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],o=t[1],s=Object(a.useState)(!1),c=Object(i.a)(s,2),l=c[0],N=c[1],M=Object(a.useState)(!1),k=Object(i.a)(M,2),w=k[0],E=k[1],A=Object(a.useState)([]),I=Object(i.a)(A,2),_=I[0],F=I[1],y=Object(a.useState)([]),C=Object(i.a)(y,2),T=C[0],Y=C[1],G=Object(a.useState)([]),R=Object(i.a)(G,2),X=R[0],q=R[1],L=Object(a.useState)([]),W=Object(i.a)(L,2),B=W[0],z=W[1],D=Object(a.useState)([]),H=Object(i.a)(D,2),J=H[0],P=H[1],K=Object(a.useState)([]),Q=Object(i.a)(K,2),U=Q[0],V=Q[1],Z=Object(a.useState)([]),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(a.useState)([]),ie=Object(i.a)(ne,2),ae=ie[0],oe=ie[1],se=Object(a.useState)([]),ce=Object(i.a)(se,2),le=ce[0],re=ce[1],de=Object(a.useState)(!1),he=Object(i.a)(de,2),fe=he[0],ue=he[1],be=Object(a.useState)(0),je=Object(i.a)(be,2),ge=je[0],me=je[1],Oe=Object(a.useState)(0),ve=Object(i.a)(Oe,2),xe=ve[0],pe=ve[1],Se=Object(a.useState)(!0),Ne=Object(i.a)(Se,2),Me=Ne[0],ke=Ne[1],we=Object(a.useState)([]),Ee=Object(i.a)(we,2),Ae=Ee[0],Ie=Ee[1],_e=Object(a.useState)([]),Fe=Object(i.a)(_e,2),ye=Fe[0],Ce=Fe[1],Te=Object(a.useState)(!1),Ye=Object(i.a)(Te,2),Ge=Ye[0],Re=Ye[1],Xe=Object(a.useState)("Select nodes"),qe=Object(i.a)(Xe,2),Le=qe[0],We=qe[1],Be=Object(a.useState)(!1),ze=Object(i.a)(Be,2),De=ze[0],He=ze[1],Je=Object(a.useState)(!1),Pe=Object(i.a)(Je,2),Ke=Pe[0],Qe=Pe[1],Ue=Object(a.useState)(!1),Ve=Object(i.a)(Ue,2),Ze=Ve[0],$e=Ve[1],et=Object(a.useState)(!1),tt=Object(i.a)(et,2),nt=tt[0],it=tt[1],at=Object(a.useState)("Nothing selected"),ot=Object(i.a)(at,2),st=ot[0],ct=ot[1];if("Add walls"===Le&&(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmousemove=function(e){e.clientY>=80&&(F([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]),onmousedown=function(t){if(t.clientY>=80){var n,i=!0,a=Ae;for(n=0;n<a.length;n++)if(a[n].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){i=!1;break}if(i){var o=[];for(n=0;n<ye.length;n++)[ye[n][0],ye[n][1]].toString()!==[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()&&o.push(ye[n]);Ce(o)}i&&(a.push([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),Ie(a))}})}),"Add weights"===Le&&(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmousemove=function(e){e.clientY>=80&&(F([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]),onmousedown=function(t){if(t.clientY>=80){var n,i=!0,a=ye;for(n=0;n<a.length;n++)if([ye[n][0],ye[n][1]].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){i=!1,a[n][2]=1===a[n][2]?.2:Math.round(10*(a[n][2]+.2))/10;break}if(i)for(n=0;n<Ae.length;n++)if(Ae[n].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){i=!1;break}i&&(a.push([Math.floor(e.clientX/20),Math.floor(e.clientY/20),.2]),Ce(a))}})}),n&&"Select nodes"===Le&&(l&&w||(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmouseup=function(e){if("Select nodes"===Le)if(l||0!==T.length){if(!w&&0===X.length){if(e.clientY>=80)if(2!==ge)pe(ge),q([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),E(!0)}}else e.clientY>=80&&(Y([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),N(!0))})),!w&&n&&"Select nodes"===Le&&(onmousemove=function(e){var t=Math.abs(Math.floor(e.clientX/20)-T[0])+Math.abs(Math.floor(e.clientY/20)-T[1]);e.clientY>=80&&("BFS algorithm selected"===st?(t<20&&me(0),t>=20&&t<40&&me(1),t>=40&&me(2)):("DFS algorithm selected"===st||"GBFS algorithm selected"===st||"A* algorithm selected"===st)&&me(0),F([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]))}),w&&!fe&&(onmousedown=function(e){},onmouseup=function(e){},onmousemove=function(e){},0===B.length||0===le.length)){var lt,rt,dt=Math.floor((Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)-19.99)/20)+1,ht=Math.floor(4)-1,ft=Math.floor((Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)-19.99)/20)+1;"BFS algorithm selected"===st?(lt=d([],[[T[0],T[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],X,[],[],!1,Ae,ye,[-1,dt,ht,ft]),z(lt),rt=(rt=r(lt,X)).reverse(),re(rt),ue(!0)):"DFS algorithm selected"===st?(lt=h([],[[T[0],T[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],X,[],[],!1,Ae,ye,[-1,dt,ht,ft],[]),z(lt),rt=(rt=r(lt,X)).reverse(),re(rt),ue(!0)):"GBFS algorithm selected"===st?(lt=f([],[[T[0],T[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],X,[],[],!1,Ae,ye,[-1,dt,ht,ft]),z(lt),rt=(rt=r(lt,X)).reverse(),re(rt),ue(!0)):"A* algorithm selected"===st&&(lt=u([],[[T[0],T[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],X,[],[],!1,Ae,ye,[-1,dt,ht,ft]),z(lt),rt=(rt=r(lt,X)).reverse(),re(rt),ue(!0))}function ut(){N(!1),E(!1),Y([]),q([]),z([]),P([]),V([]),te([]),oe([]),re([]),ue(!1),me(0)}return Object(a.useEffect)((function(){var e=0,t=0;if(fe){ke(!1);var n=setInterval((function(){if(e===B.length){if(t===le.length)return ke(!0),void clearInterval(n);if(t>0){for(var i=[],a=0;a<t;a++)i[a]=le[a];oe(i)}var o=[];o[t]=le[t],V(o),t++}else{if(e>0){for(var s=[],c=0;c<e;c++)s[c]=B[c];te(s)}var l=[];l[e]=B[e],P(l),e++}}),2e3/B.length)}}),[fe,B,le]),Object(b.jsxs)("div",{className:"body",children:[Object(b.jsxs)("nav",{className:"navbar",children:[Object(b.jsxs)("div",{className:"navbar-logo",children:["DSA visuals ",Object(b.jsx)("i",{className:"fas fa-project-diagram"})]}),Object(b.jsx)("div",{className:"navbar-selected",children:st}),Object(b.jsx)("div",{className:"menu-icon",onClick:function(){return He(!De)},children:Object(b.jsx)("i",{className:De?"fas fa-times":"fas fa-bars"})}),Object(b.jsxs)("ul",{className:De?"nav-menu active":"nav-menu",children:[Ge&&Object(b.jsxs)("li",{className:"nav-item",children:[Object(b.jsx)("div",{className:Me?"Select nodes"!==Le?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:Me?function(){He(!1),We("Select nodes")}:function(){},children:"Select nodes"}),Object(b.jsx)("div",{className:Me?"Add walls"!==Le?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:Me?function(){He(!1),We("Add walls")}:function(){},children:"Add walls"}),Object(b.jsx)("div",{className:Me?"Add weights"!==Le?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:Me?function(){He(!1),We("Add weights")}:function(){},children:"Add weights"})]}),Object(b.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?Qe(!1):Qe(!0)},onMouseLeave:function(){window.innerWidth,Qe(!1)},children:[Object(b.jsxs)("div",{className:"nav-links",onClick:function(){return He(!1)},children:["Pathfinding Algorithms ",Object(b.jsx)("i",{className:"fas fa-caret-down"})]}),Ke&&Object(b.jsxs)("ul",{className:"dropdown-menu",children:[Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"dropdown-link",onClick:function(){ct("BFS algorithm selected"),o(!0),Re(!0),We("Select nodes"),ut()},children:"Breadth-First Search"})}),Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"dropdown-link",onClick:function(){ct("DFS algorithm selected"),o(!0),Re(!0),We("Select nodes"),ut()},children:"Depth-First Search"})}),Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"dropdown-link",onClick:function(){ct("GBFS algorithm selected"),o(!0),Re(!0),We("Select nodes"),ut()},children:"Greedy Best-First Search"})}),Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"dropdown-link",onClick:function(){ct("A* algorithm selected"),o(!0),Re(!0),We("Select nodes"),ut()},children:"A* Search"})})]})]}),Object(b.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?it(!1):it(!0)},onMouseLeave:function(){window.innerWidth,it(!1)},children:[Object(b.jsxs)("div",{className:"nav-links",onClick:function(){return He(!1)},children:["Sorting Algorithms ",Object(b.jsx)("i",{className:"fas fa-caret-down"})]}),nt&&Object(b.jsx)("ul",{className:"dropdown-menu",children:Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"dropdown-link",children:"Nothing implemented yet"})})})]}),Object(b.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?$e(!1):$e(!0)},onMouseLeave:function(){window.innerWidth,$e(!1)},children:[Object(b.jsxs)("div",{className:"nav-links",onClick:function(){return He(!1)},children:["Data Structures ",Object(b.jsx)("i",{className:"fas fa-caret-down"})]}),Ze&&Object(b.jsx)("ul",{className:"dropdown-menu",children:Object(b.jsx)("li",{children:Object(b.jsx)("div",{className:"dropdown-link",children:"Nothing implemented yet"})})})]}),Object(b.jsx)("li",{className:"nav-item",children:Object(b.jsx)("div",{className:"nav-links-mobile",onClick:function(){return He(!1)},children:"Dropdowns and buttons not yet implemented"})})]}),Object(b.jsx)("div",{children:Object(b.jsx)("button",{className:Me?"btn":"bt-done",onClick:Me?function(){He(!1),o(!1),ct("Nothing selected"),Re(!1),N(!1),E(!1),Y([]),q([]),z([]),P([]),V([]),te([]),oe([]),re([]),ue(!1),me(0),We("Select nodes"),Ie([]),Ce([])}:function(){},children:"Reset"})})]}),g(n,l,w),j(n,l,w,ge,xe,Le,Ae,ye),p(Ae,!0),S(ye,!0),!w&&n&&m(_,l,ge,Le),l&&O(T,!1,0),w&&O(X,!0,xe),fe&&v(J,!0),fe&&v(ee,!1),fe&&x(U,!0),fe&&x(ae,!1)]})}c.a.render(Object(b.jsx)(o.a.StrictMode,{children:Object(b.jsx)(N,{})}),document.getElementById("root"))},9:function(e,t,n){}},[[12,1,2]]]);
//# sourceMappingURL=main.a46c8652.chunk.js.map