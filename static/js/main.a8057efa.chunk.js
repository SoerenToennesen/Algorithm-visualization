(this["webpackJsonpalgorithms-visualization"]=this["webpackJsonpalgorithms-visualization"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(7),c=n(1),a=n.n(c),r=n(8),s=n.n(r),l=(n(17),n(18),n(9));function d(e,t){for(var n=0;n<e.length;n++)if(e[n].toString()===t.toString())return!0;return!1}function u(e,t){for(var n=[],i=!1,o=t,c=e.length-1;c>=0&&(c===e.length-1&&n.push(t),!i);c--)for(var a=0;a<e[c].length;a++)if(e[c][a][0]===o[0]&&e[c][a][1]===o[1]){if(e[c][a][2]===Number.MIN_SAFE_INTEGER){i=!0;break}n.push([e[c][a][2],e[c][a][3]]),o=[e[c][a][2],e[c][a][3]];break}return n}function h(e,t,n,i,o,c,a,r,s){if(c)return e;var l,u=[[1,0],[0,1],[-1,0],[0,-1]],f=[],b=[];for(l=0;l<i.length;l++)i[l][3]>=i[l][4]?f.push([i[l][0]+u[i[l][2]][0],i[l][1]+u[i[l][2]][1],i[l][0],i[l][1]]):b.push([i[l][0],i[l][1],i[l][2],Math.round(10*(i[l][3]+.2))/10,i[l][4]]);e.push([[]]);var j=e.length-1;for(l=0;l<t.length;l++)if(!d(o,[t[l][0],t[l][1]])){0===l?e[j][0]=t[l]:e[j].push(t[l]),[t[l][0],t[l][1]].toString()!==[t[l][2],t[l][3]].toString()&&o.push([t[l][0],t[l][1]]);for(var g=0;g<u.length;g++)if(!(d(o,[t[l][0]+u[g][0],t[l][1]+u[g][1]])||t[l][0]+u[g][0]<=s[0]||t[l][0]+u[g][0]>=s[1]||t[l][1]+u[g][1]<=s[2]||t[l][1]+u[g][1]>=s[3])){var m,p=!0;for(m=0;m<a.length;m++)if([t[l][0]+u[g][0],t[l][1]+u[g][1]].toString()===a[m].toString()){p=!1;break}if(p)for(m=0;m<r.length;m++)if([t[l][0]+u[g][0],t[l][1]+u[g][1]].toString()===[r[m][0],r[m][1]].toString()){b.push([t[l][0],t[l][1],g,.2,r[m][2]]),p=!1;break}p&&f.push([t[l][0]+u[g][0],t[l][1]+u[g][1],t[l][0],t[l][1]])}c||t[l][0]!==n[0]||t[l][1]!==n[1]||(c=!0)}return f.toString()===[].toString()?e:h(e,f,n,b,o,c,a,r,s)}function f(e,t,n,i,o,c,a,r,s,l){if(c)return e;var u,h=[[1,0],[0,1],[-1,0],[0,-1]],b=[],j=[],g=[];for(u=0;u<i.length;u++)i[u][3]>=i[u][4]?l.push([i[u][0]+h[i[u][2]][0],i[u][1]+h[i[u][2]][1],i[u][0],i[u][1],e.length-1]):j.push([i[u][0],i[u][1],i[u][2],Math.round(10*(i[u][3]+.2))/10,i[u][4]]);e.push([[]]);var m=e.length-1;for(u=0;u<t.length;u++)if(!d(o,[t[u][0],t[u][1]])){0===u?e[m][0]=t[u]:e[m].push(t[u]),o.push([t[u][0],t[u][1]]);var p,x,O,v=-1,S=-1;for(p=0;p<h.length+1;p++){if(p!==h.length){if(d(o,[t[u][0]+h[p][0],t[u][1]+h[p][1]])||t[u][0]+h[p][0]<=s[0]||t[u][0]+h[p][0]>=s[1]||t[u][1]+h[p][1]<=s[2]||t[u][1]+h[p][1]>=s[3])continue;for(O=!0,x=0;x<a.length;x++)if([t[u][0]+h[p][0],t[u][1]+h[p][1]].toString()===a[x].toString()){O=!1;break}if(O)for(x=0;x<r.length;x++)if([t[u][0]+h[p][0],t[u][1]+h[p][1]].toString()===[r[x][0],r[x][1]].toString()){j.push([t[u][0],t[u][1],p,.2,r[x][2]]),O=!1;break}if(!O)continue;v=p;break}for(x=0;x<l.length;x++)v=p,S=x,g.push(l[x])}if(-1===v){var N=!0;for(p=e.length-1;p>=0;p--){var M=!1;for(x=0;x<h.length;x++)if(!(d(o,[e[p][0][0]+h[x][0],e[p][0][1]+h[x][1]])||e[p][0][0]+h[x][0]<=s[0]||e[p][0][0]+h[x][0]>=s[1]||e[p][0][1]+h[x][1]<=s[2]||e[p][0][1]+h[x][1]>=s[3])){var k;for(O=!0,k=0;k<a.length;k++)if([e[p][0][0]+h[x][0],e[p][0][1]+h[x][1]].toString()===a[k].toString()){O=!1;break}if(O)for(k=0;k<r.length;k++)if([e[p][0][0]+h[x][0],e[p][0][1]+h[x][1]].toString()===[r[k][0],r[k][1]].toString()){j.push([e[p][0][0],e[p][0][1],x,.2,r[k][2]]),O=!1;break}if(O){b.push([e[p][0][0]+h[x][0],e[p][0][1]+h[x][1],e[p][0][0],e[p][0][1]]),N=!1,M=!0;break}}if(M)break}if(N)return e}else 4===v?b.push([l[S][0],l[S][1],l[S][2],l[S][3]]):b.push([t[u][0]+h[v][0],t[u][1]+h[v][1],t[u][0],t[u][1]]);c||t[u][0]!==n[0]||t[u][1]!==n[1]||(c=!0)}var w=!0;return g.toString()===[].toString()&&(w=!1),f(e,b,n,j,o,c,a,r,s,w?g:l)}function b(e,t,n,i,o,c,a,r,s){if(c)return e;var l,u=[[1,0],[0,1],[-1,0],[0,-1]],h=[],f=[],j=[];for(l=0;l<i.length;l++)i[l][3]>=i[l][4]?j.push([i[l][0]+u[i[l][2]][0],i[l][1]+u[i[l][2]][1],i[l][0],i[l][1],e.length-1]):f.push([i[l][0],i[l][1],i[l][2],Math.round(10*(i[l][3]+.2))/10,i[l][4]]);e.push([[]]);var g=e.length-1;for(l=0;l<t.length;l++)if(!d(o,[t[l][0],t[l][1]])){0===l?e[g][0]=t[l]:e[g].push(t[l]),o.push([t[l][0],t[l][1]]);var m,p,x,O,v=[Number.MAX_SAFE_INTEGER,-1],S=[];for(m=0;m<j.length;m++)(x=Math.abs(j[m][0]-n[0])+Math.abs(j[m][1]-n[1]))<=v[0]&&(v=[x,m,1],S=[j[m][0],j[m][1],j[m][2],j[m][3]]);for(m=0;m<u.length;m++)if(!(d(o,[t[l][0]+u[m][0],t[l][1]+u[m][1]])||t[l][0]+u[m][0]<=s[0]||t[l][0]+u[m][0]>=s[1]||t[l][1]+u[m][1]<=s[2]||t[l][1]+u[m][1]>=s[3])){for(O=!0,p=0;p<a.length;p++)if([t[l][0]+u[m][0],t[l][1]+u[m][1]].toString()===a[p].toString()){O=!1;break}if(O)for(p=0;p<r.length;p++)if([t[l][0]+u[m][0],t[l][1]+u[m][1]].toString()===[r[p][0],r[p][1]].toString()){f.push([t[l][0],t[l][1],m,.2,r[p][2]]),O=!1;break}O&&(x=Math.abs(t[l][0]+u[m][0]-n[0])+Math.abs(t[l][1]+u[m][1]-n[1]))<=v[0]&&(v=[x,m,0])}if(0===v[2])h.push([t[l][0]+u[v[1]][0],t[l][1]+u[v[1]][1],t[l][0],t[l][1]]);else if(1===v[2])h.push(S);else{var N=[Number.MAX_SAFE_INTEGER,-1],M=!0,k=[];for(m=e.length-1;m>=0;m--)for(p=0;p<u.length;p++)if(!(d(o,[e[m][0][0]+u[p][0],e[m][0][1]+u[p][1]])||e[m][0][0]+u[p][0]<=s[0]||e[m][0][0]+u[p][0]>=s[1]||e[m][0][1]+u[p][1]<=s[2]||e[m][0][1]+u[p][1]>=s[3])){var w;for(O=!0,w=0;w<a.length;w++)if([e[m][0][0]+u[p][0],e[m][0][1]+u[p][1]].toString()===a[w].toString()){O=!1;break}if(O)for(w=0;w<r.length;w++)if([e[m][0][0]+u[p][0],e[m][0][1]+u[p][1]].toString()===[r[w][0],r[w][1]].toString()){f.push([e[m][0][0],e[m][0][1],p,.2,r[w][2]]),O=!1;break}O&&((x=Math.abs(e[m][0][0]+u[p][0]-n[0])+Math.abs(e[m][0][1]+u[p][1]-n[1]))<=N[0]&&(N=[x,p],k=[e[m][0][0],e[m][0][1]]),M=!1)}if(M)return e;h.push([k[0]+u[N[1]][0],k[1]+u[N[1]][1],k[0],k[1]])}c||t[l][0]!==n[0]||t[l][1]!==n[1]||(c=!0)}return b(e,h,n,f,o,c,a,r,s)}function j(e,t,n,i,o,c,a,r,s){if(c)return e;var l,u=[[1,0],[0,1],[-1,0],[0,-1]],h=[],f=[],b=[];for(l=0;l<i.length;l++)i[l][3]>=i[l][4]?b.push([i[l][0]+u[i[l][2]][0],i[l][1]+u[i[l][2]][1],i[l][0],i[l][1],e.length-1]):f.push([i[l][0],i[l][1],i[l][2],Math.round(10*(i[l][3]+.2))/10,i[l][4]]);e.push([[]]);var g=e.length-1;for(l=0;l<t.length;l++)if(!d(o,[t[l][0],t[l][1]])){0===l?e[g][0]=t[l]:e[g].push(t[l]),o.push([t[l][0],t[l][1]]);var m,p,x,O,v=[Number.MAX_SAFE_INTEGER,-1,-1],S=[];for(m=0;m<b.length;m++)(x=b[m][4]+(Math.abs(b[m][0]-n[0])+Math.abs(b[m][1]-n[1])))<=v[0]&&(v=[x,m,1],S=[b[m][0],b[m][1],b[m][2],b[m][3]]);for(m=0;m<u.length;m++)if(!(d(o,[t[l][0]+u[m][0],t[l][1]+u[m][1]])||t[l][0]+u[m][0]<=s[0]||t[l][0]+u[m][0]>=s[1]||t[l][1]+u[m][1]<=s[2]||t[l][1]+u[m][1]>=s[3])){for(O=!0,p=0;p<a.length;p++)if([t[l][0]+u[m][0],t[l][1]+u[m][1]].toString()===a[p].toString()){O=!1;break}if(O)for(p=0;p<r.length;p++)if([t[l][0]+u[m][0],t[l][1]+u[m][1]].toString()===[r[p][0],r[p][1]].toString()){f.push([t[l][0],t[l][1],m,.2,r[p][2]]),O=!1;break}O&&(x=g+1+(Math.abs(t[l][0]+u[m][0]-n[0])+Math.abs(t[l][1]+u[m][1]-n[1])))<=v[0]&&(v=[x,m,0])}if(0===v[2])h.push([t[l][0]+u[v[1]][0],t[l][1]+u[v[1]][1],t[l][0],t[l][1]]);else if(1===v[2])h.push(S);else{var N=[Number.MAX_SAFE_INTEGER,-1],M=!0,k=[];for(m=e.length-1;m>=0;m--)for(p=0;p<u.length;p++)if(!(d(o,[e[m][0][0]+u[p][0],e[m][0][1]+u[p][1]])||e[m][0][0]+u[p][0]<=s[0]||e[m][0][0]+u[p][0]>=s[1]||e[m][0][1]+u[p][1]<=s[2]||e[m][0][1]+u[p][1]>=s[3])){var w;for(O=!0,w=0;w<a.length;w++)if([e[m][0][0]+u[p][0],e[m][0][1]+u[p][1]].toString()===a[w].toString()){O=!1;break}if(O)for(w=0;w<r.length;w++)if([e[m][0][0]+u[p][0],e[m][0][1]+u[p][1]].toString()===[r[w][0],r[w][1]].toString()){f.push([e[m][0][0],e[m][0][1],p,.2,r[w][2]]),O=!1;break}O&&((x=g+1+(Math.abs(e[m][0][0]+u[p][0]-n[0])+Math.abs(e[m][0][1]+u[p][1]-n[1])))<=N[0]&&(N=[x,p],k=[e[m][0][0],e[m][0][1]]),M=!1)}if(M)return e;h.push([k[0]+u[N[1]][0],k[1]+u[N[1]][1],k[0],k[1]])}c||t[l][0]!==n[0]||t[l][1]!==n[1]||(c=!0)}return j(e,h,n,f,o,c,a,r,s)}function g(e,t,n,i){for(var o=[],c=0;c<n;c++)if(o.push(e[c]),e[c]===t)return i;return i.push(o),g(e,t,n+1,i)}function m(e,t){if(1===e.length){for(var n=[],i=0;i<t.length;i++){for(var o=[],c=0;c<t[i].length;c++)o.push([c,t[i][c]]);n.push(o)}return n}for(var a=[],r=0;r<e.length;r+=2)if(r===e.length-1)a.push(e[r]);else{for(var s=0,l=0,d=[];s<=e[r].length&&l<=e[r+1].length;)s===e[r].length?(d.push(e[r+1][l]),l++):l===e[r+1].length?(d.push(e[r][s]),s++):e[r][s]>e[r+1][l]?(d.push(e[r+1][l]),l++):(d.push(e[r][s]),s++);d.pop(),a.push(d)}for(var u=t,h=[],f=0;f<a.length;f++)for(var b=0;b<a[f].length;b++)h.push(a[f][b]);return u.push(h),m(a,u)}function p(e,t,n,i){if(n>=i)return e;e.push(t.slice());var o=function(e,t,n){for(var i=e[n],o=t;o<n;o++)if(e[o]<=i){var c=e[o];e[o]=e[t],e[t]=c,t++}var a=e[n];return e[n]=e[t],e[t]=a,[t,e]}(t,n,i);return p(e,o[1],n,o[0]-1),p(e,o[1],o[0]+1,i),e}function x(e,t,n){if(t.push(e.slice()),0===n){for(var i=[],o=0;o<t.length;o++){for(var c=[],a=0;a<t[o].length;a++)c.push([a,t[o][a]]);i.push(c)}return i}for(var r=0;r<n;r++)if(e[r]>e[r+1]){var s=e[r];e[r]=e[r+1],e[r+1]=s}return x(e,t,n-1)}var O,v=n(0);function S(e,t,n,i,o,c,a,r){return Object(v.jsxs)("div",{className:"legend-container",children:[Object(v.jsx)("div",{className:"legend-title",children:"Legend"}),e&&"Add walls"===c&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-colorm1",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Add walls"]}),a.toString()!==[].toString()&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-colorm2",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Wall nodes"]}),e&&"Add weights"===c&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-color0",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Add weights"]}),r.toString()!==[].toString()&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-colorm3",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Weight nodes"]}),e&&"Select nodes"===c&&!t&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-color1",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Select start node"]}),t&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-color1",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Start node"]}),t&&"Select nodes"===c&&!n&&(0===i?Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-color2",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (green light)"]}):1===i?Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-color3",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (computationally hard)"]}):Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-color4",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (restricted)"]})),n&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:0===o?"legend-color2":1===o?"legend-color3":"legend-color4",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Goal node"]}),n&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-color5",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Search"]}),n&&Object(v.jsxs)("div",{className:"legend-info",children:[Object(v.jsx)("div",{className:"legend-color6",children:Object(v.jsx)("i",{className:"fas fa-square"})}),"\xa0Path found"]})]})}function N(e,t,n,i,o){return Object(v.jsxs)("footer",{className:"footer-container",children:[!e&&Object(v.jsx)("div",{className:"footer-info",children:"Select an algorithm or datastructure"}),!t&&e&&Object(v.jsx)("div",{className:"footer-info",children:"Select your start node"}),t&&!n&&Object(v.jsx)("div",{className:"footer-info",children:"Select your goal node"}),t&&n&&Object(v.jsx)("div",{className:"footer-inf-nowiggle",children:"Enjoy the show!"})]})}function M(e,t,n,i){return Object(v.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",marginTop:"".concat(e[0],"px"),marginLeft:"".concat(e[1],"px"),top:"3px",left:"3px",backgroundColor:"Select nodes"===i?t?0===n?"rgb(49, 158, 63, 0.5)":1===n?"rgb(211, 221, 63, 0.5)":"rgb(221, 63, 63, 0.5)":"rgb(65,126,238, 0.5)":"Add walls"===i?"rgb(146, 95, 0, 0.5)":"rgb(68, 0, 179, 0.5)",borderRadius:"35%",display:"inline-block",zIndex:-1}})}function k(e,t,n){return Object(v.jsx)("div",{style:{position:"absolute",height:n<0?"20px":"15px",width:n<0?"20px":"15px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:n<0?"0px":"3px",left:n<0?"0px":"3px",backgroundColor:-2===n?"rgb(65,126,238,0.5)":-1===n?"rgb(49, 158, 63,0.5)":t?0===n?"rgb(49, 158, 63)":1===n?"rgb(211, 221, 63)":"rgb(221, 63, 63)":"rgb(65,126,238)",borderRadius:n<0?"0%":"35%",display:"inline-block",animation:"fadeMe .2s",zIndex:-.9}})}function w(e,t){return e.map((function(e){return e.map((function(e){return Object(v.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"3px",left:"3px",backgroundColor:"rgb(90, 90, 90)",borderRadius:"35%",display:"inline-block",animation:t?"fadeMe .2s":"",zIndex:-1}})}))}))}function E(e,t){return e.map((function(e){return Object(v.jsx)("div",{style:{position:"absolute",height:"7.5px",width:"7.5px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"6.85px",left:"6.85px",backgroundColor:"rgb(240,149,55)",borderRadius:"35%",display:"inline-block",animation:t?"fadeMe .2s":"",zIndex:-.8}})}))}function I(e,t){return e.map((function(e){return Object(v.jsx)("div",{style:{position:"absolute",height:"20px",width:"20px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"0px",left:"0px",backgroundColor:"rgb(146, 95, 0)",display:"inline-block",animation:t?"fadeMe 1s":"",zIndex:-.8}})}))}function A(e,t){return e.map((function(e){return Object(v.jsx)("div",{style:{position:"absolute",height:"20px",width:"20px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"0px",left:"0px",backgroundColor:"rgb(68, 0, 179, ".concat(e[2],")"),display:"inline-block",animation:t?"fadeMe 1s":"",zIndex:-.8}})}))}function y(e,t){return e.map((function(e){return Object(v.jsx)("div",{style:{position:"absolute",height:"".concat(20*e[1],"px"),width:"15px",marginLeft:"".concat(20*e[0]+2.5,"px"),bottom:"0px",left:"0px",borderRadius:"5px",backgroundColor:t?"rgb(125,194,175,0.7)":"rgb(65,126,238,0.7)",display:"inline-block",zIndex:-2}})}))}function C(e,t){return e.map((function(e){return Object(v.jsx)("div",{style:{position:"absolute",height:"20px",width:"20px",marginLeft:"".concat(e%t*20,"px"),marginTop:"".concat(20*Math.floor(e/t),"px"),backgroundColor:"rgb(30,30,30,0.8)",display:"inline-block",animation:"fadeMe .2s",zIndex:-1}})}))}var F=l.a.div(O||(O=Object(o.a)(["\n  display: flex;\n  position: fixed;\n  align-items: center;\n  color: rgb(125,194,175);\n  margin-top: 50px;\n  right: 30px;\n\n  .value {\n    flex: 1;\n    margin-right: 15px;\n    font-size: 30px;\n  }\n  \n  .slider {\n    flex: 100;\n    -webkit-appearance: none;\n    height: 10px;\n    width: 300px;\n    border-radius: 5px;\n    background: rgb(226,125,95,0.8);\n    outline: none;\n\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      width: 20px;\n      height: 20px;\n      border-radius: 5px;\n      background: ",";\n      opacity: ",";\n      cursor: pointer;\n      outline: 3px solid rgb(65,126,238);\n    }\n  }\n"])),(function(e){return e.color}),(function(e){return e.opacity}));function Y(){var e,t,n=Object(c.useState)(!1),o=Object(i.a)(n,2),a=o[0],r=o[1],s=Object(c.useState)(!1),l=Object(i.a)(s,2),d=l[0],O=l[1],Y=Object(c.useState)(!1),_=Object(i.a)(Y,2),W=_[0],R=_[1],T=Object(c.useState)(!1),X=Object(i.a)(T,2),G=(X[0],X[1],Object(c.useState)(!1)),L=Object(i.a)(G,2),z=L[0],B=L[1],q=Object(c.useState)(!1),D=Object(i.a)(q,2),H=D[0],J=D[1],P=Object(c.useState)([]),Q=Object(i.a)(P,2),K=Q[0],U=Q[1],V=Object(c.useState)([]),Z=Object(i.a)(V,2),$=Z[0],ee=Z[1],te=Object(c.useState)([]),ne=Object(i.a)(te,2),ie=ne[0],oe=ne[1],ce=Object(c.useState)([]),ae=Object(i.a)(ce,2),re=ae[0],se=ae[1],le=Object(c.useState)([]),de=Object(i.a)(le,2),ue=de[0],he=de[1],fe=Object(c.useState)([]),be=Object(i.a)(fe,2),je=be[0],ge=be[1],me=Object(c.useState)([]),pe=Object(i.a)(me,2),xe=pe[0],Oe=pe[1],ve=Object(c.useState)([]),Se=Object(i.a)(ve,2),Ne=Se[0],Me=Se[1],ke=Object(c.useState)([]),we=Object(i.a)(ke,2),Ee=we[0],Ie=we[1],Ae=Object(c.useState)([]),ye=Object(i.a)(Ae,2),Ce=ye[0],Fe=ye[1],Ye=Object(c.useState)(!1),_e=Object(i.a)(Ye,2),We=_e[0],Re=_e[1],Te=Object(c.useState)(!1),Xe=Object(i.a)(Te,2),Ge=Xe[0],Le=Xe[1],ze=Object(c.useState)(0),Be=Object(i.a)(ze,2),qe=Be[0],De=Be[1],He=Object(c.useState)(0),Je=Object(i.a)(He,2),Pe=Je[0],Qe=Je[1],Ke=Object(c.useState)(!0),Ue=Object(i.a)(Ke,2),Ve=Ue[0],Ze=Ue[1],$e=Object(c.useState)([]),et=Object(i.a)($e,2),tt=et[0],nt=et[1],it=Object(c.useState)([]),ot=Object(i.a)(it,2),ct=ot[0],at=ot[1],rt=Object(c.useState)(!1),st=Object(i.a)(rt,2),lt=st[0],dt=st[1],ut=Object(c.useState)("Select nodes"),ht=Object(i.a)(ut,2),ft=ht[0],bt=ht[1],jt=Object(c.useState)(!1),gt=Object(i.a)(jt,2),mt=gt[0],pt=gt[1],xt=Object(c.useState)(!1),Ot=Object(i.a)(xt,2),vt=Ot[0],St=Ot[1],Nt=Object(c.useState)(!1),Mt=Object(i.a)(Nt,2),kt=Mt[0],wt=Mt[1],Et=Object(c.useState)(!1),It=Object(i.a)(Et,2),At=It[0],yt=It[1],Ct=Object(c.useState)("Nothing selected"),Ft=Object(i.a)(Ct,2),Yt=Ft[0],_t=Ft[1],Wt=Object(c.useState)(50),Rt=Object(i.a)(Wt,2),Tt=Rt[0],Xt=Rt[1],Gt=Object(c.useState)([]),Lt=Object(i.a)(Gt,2),zt=Lt[0],Bt=Lt[1],qt=Object(c.useState)(""),Dt=Object(i.a)(qt,2),Ht=Dt[0],Jt=Dt[1],Pt=Object(c.useState)(!1),Qt=Object(i.a)(Pt,2),Kt=Qt[0],Ut=Qt[1],Vt=Object(c.useState)([]),Zt=Object(i.a)(Vt,2),$t=Zt[0],en=Zt[1],tn=Object(c.useState)([0,0]),nn=Object(i.a)(tn,2),on=nn[0],cn=nn[1],an=Object(c.useState)([]),rn=Object(i.a)(an,2),sn=rn[0],ln=rn[1],dn=Object(c.useState)(!1),un=Object(i.a)(dn,2),hn=un[0],fn=un[1],bn=Object(c.useState)(!1),jn=Object(i.a)(bn,2),gn=jn[0],mn=jn[1],pn=Object(c.useState)([]),xn=Object(i.a)(pn,2),On=xn[0],vn=xn[1],Sn=Object(c.useState)([]),Nn=Object(i.a)(Sn,2),Mn=Nn[0],kn=Nn[1],wn=Object(c.useState)(0),En=Object(i.a)(wn,2),In=En[0],An=En[1],yn=Object(c.useState)(!1),Cn=Object(i.a)(yn,2),Fn=Cn[0],Yn=Cn[1];function _n(){onmousedown=function(){},onmouseup=function(){},onmousemove=function(){}}if(d&&Ht.includes("search")&&!hn&&(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmousemove=function(e){e.clientY>=80&&e.clientY<=60+Tt/Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20)*20||e.clientY<=80+Tt/Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20)*20&&e.clientX<=Tt%Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20)*20?(U([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]),onmousedown=function(t){if(t.clientY>=80)return ln([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),An(Math.floor(e.clientX/20)+(Math.floor(e.clientY/20)-4)*Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20)),fn(!0),void _n()}):onmousedown=function(){}}),"Add walls"===ft&&(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmousemove=function(e){e.clientY>=80&&(U([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]),onmousedown=function(t){if(t.clientY>=80){var n,i=!0,o=!1,c=[];for(n=0;n<tt.length;n++)tt[n].toString()!==[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()?c.push(tt[n]):(i=!1,o=!0);if(i){var a=[];for(n=0;n<ct.length;n++)[ct[n][0],ct[n][1]].toString()!==[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()&&a.push(ct[n]);at(a)}i&&(c.push([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),nt(c)),o&&nt(c)}})}),"Add weights"===ft&&(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmousemove=function(e){e.clientY>=80&&(U([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]),onmousedown=function(t){if(t.clientY>=80){var n,i=!0,o=ct;for(n=0;n<o.length;n++)if([ct[n][0],ct[n][1]].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){i=!1,o[n][2]=1===o[n][2]?.2:Math.round(10*(o[n][2]+.2))/10;break}if(i)for(n=0;n<tt.length;n++)if(tt[n].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){i=!1;break}i&&(o.push([Math.floor(e.clientX/20),Math.floor(e.clientY/20),.2]),at(o))}})}),a&&"Select nodes"===ft&&(z&&H||(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmouseup=function(e){if("Select nodes"===ft)if(z||0!==$.length){if(!H&&0===ie.length){if(e.clientY>=80)if(2!==qe)Qe(qe),oe([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),J(!0)}}else e.clientY>=80&&(ee([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),B(!0))})),!H&&a&&"Select nodes"===ft&&(onmousemove=function(e){var t=Math.abs(Math.floor(e.clientX/20)-$[0])+Math.abs(Math.floor(e.clientY/20)-$[1]);e.clientY>=80&&("BFS algorithm selected"===Yt?(t<20&&De(0),t>=20&&t<40&&De(1),t>=40&&De(2)):("DFS algorithm selected"===Yt||"GBFS algorithm selected"===Yt||"A* algorithm selected"===Yt)&&De(0),U([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]))}),H&&!We&&(onmousedown=function(e){},onmouseup=function(e){},onmousemove=function(e){},0===re.length||0===Ce.length)){var Wn,Rn,Tn=Math.floor((Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)-19.99)/20)+1,Xn=Math.floor(4)-1,Gn=Math.floor((Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)-19.99)/20)+1;"BFS algorithm selected"===Yt?(Wn=h([],[[$[0],$[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],ie,[],[],!1,tt,ct,[-1,Tn,Xn,Gn]),se(Wn),Rn=(Rn=u(Wn,ie)).reverse(),Fe(Rn),Re(!0)):"DFS algorithm selected"===Yt?(Wn=f([],[[$[0],$[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],ie,[],[],!1,tt,ct,[-1,Tn,Xn,Gn],[]),se(Wn),Rn=(Rn=u(Wn,ie)).reverse(),Fe(Rn),Re(!0)):"GBFS algorithm selected"===Yt?(Wn=b([],[[$[0],$[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],ie,[],[],!1,tt,ct,[-1,Tn,Xn,Gn]),se(Wn),Rn=(Rn=u(Wn,ie)).reverse(),Fe(Rn),Re(!0)):"A* algorithm selected"===Yt&&(Wn=j([],[[$[0],$[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],ie,[],[],!1,tt,ct,[-1,Tn,Xn,Gn]),se(Wn),Rn=(Rn=u(Wn,ie)).reverse(),Fe(Rn),Re(!0))}function Ln(){for(var e=0;e<Tt;e++)$t.push(e);en($t)}function zn(){B(!1),J(!1),ee([]),oe([]),se([]),ge([]),Oe([]),Me([]),Ie([]),Fe([]),Re(!1),De(0)}function Bn(){en([]),cn([0,0]),ln([]),fn(!1),mn(!1),vn([]),kn([]),An(0),Yn(!1),Jt("")}function qn(){Le(!1),he([]),Ut(!1),Jt("")}return Object(c.useEffect)((function(){var e=0,t=0;if(We){Ze(!1);var n=setInterval((function(){if(e===re.length){if(t===Ce.length)return Ze(!0),void clearInterval(n);if(t>0){for(var i=[],o=0;o<t;o++)i[o]=Ce[o];Ie(i)}var c=[];c[t]=Ce[t],Oe(c),t++}else{if(e>0){for(var a=[],r=0;r<e;r++)a[r]=re[r];Me(a)}var s=[];s[e]=re[e],ge(s),e++}}),2e3/re.length)}}),[We,re,Ce]),Object(c.useEffect)((function(){if(Ge)var e=0,t=setInterval((function(){if(e>=ue.length)return Ut(!0),void clearInterval(t);Bt(ue[e]),e++}),5e3/ue.length)}),[Ge]),Object(c.useEffect)((function(){if(hn){var e=[];"Linear search selected"===Ht&&(e=g($t,In,1,[]),vn(e),mn(!0)),"Binary search selected"===Ht&&(vn([]),mn(!0)),"Jump search selected"===Ht&&(vn([]),mn(!0))}}),[hn]),Object(c.useEffect)((function(){if(gn)var e=0,t=setInterval((function(){if(e>=On.length)return Yn(!0),void clearInterval(t);kn(On[e]),e++}),2e3/On.length)}),[gn]),Object(c.useEffect)((function(){if(Yt.includes("sort")){for(var e=Math.floor((Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)-19.99)/20)-3,t=[],n=0;n<Tt;n++){var i=Math.floor(Math.random()*(e-1+1)+1);t.push([n,i])}Bt(t)}if(Yt.includes("search")){for(var o=[],c=0;c<Tt;c++)o.push(c);en(o)}}),[Tt]),Object(c.useEffect)((function(){var e=[];if("Quick sort selected"===Ht){for(var t=0;t<zt.length;t++)e.push(zt[t][1]);for(var n=p([],e,0,e.length-1),i=[],o=0;o<n.length;o++){for(var c=[],a=0;a<n[o].length;a++)c.push([a,n[o][a]]);i.push(c)}he(i),Le(!0)}var r=[];if("Merge sort selected"===Ht){for(t=0;t<zt.length;t++)r.push([zt[t][1]]);var s=m(r,[]);he(s),Le(!0)}if("Bubble sort selected"===Ht){for(t=0;t<zt.length;t++)e.push(zt[t][1]);var l=x(e,[],e.length-1);he(l),Le(!0)}}),[Ht]),Object(v.jsxs)("div",{className:"body",children:[Object(v.jsxs)("nav",{className:"navbar",children:[Object(v.jsxs)("div",{className:"navbar-logo",children:["DSA visuals ",Object(v.jsx)("i",{className:"fas fa-project-diagram"})]}),Object(v.jsx)("div",{className:"navbar-selected",children:Yt}),Object(v.jsx)("div",{className:"menu-icon",onClick:function(){return pt(!mt)},children:Object(v.jsx)("i",{className:mt?"fas fa-times":"fas fa-bars"})}),Object(v.jsxs)("ul",{className:mt?"nav-menu active":"nav-menu",children:[lt&&Object(v.jsxs)("li",{className:"nav-item",children:[Object(v.jsx)("div",{className:Ve?"Select nodes"!==ft?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:Ve?function(){pt(!1),bt("Select nodes")}:function(){},children:"Select nodes"}),Object(v.jsx)("div",{className:Ve?"Add walls"!==ft?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:Ve?function(){pt(!1),bt("Add walls")}:function(){},children:"Add walls"}),Object(v.jsx)("div",{className:Ve?"Add weights"!==ft?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:Ve?function(){pt(!1),bt("Add weights")}:function(){},children:"Add weights"})]}),Object(v.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?St(!1):St(!0)},onMouseLeave:function(){window.innerWidth,St(!1)},children:[Object(v.jsxs)("div",{className:"nav-links",onClick:function(){return pt(!1)},children:["Pathfinder Algorithms ",Object(v.jsx)("i",{className:"fas fa-caret-down"})]}),vt&&Object(v.jsxs)("ul",{className:"dropdown-menu",children:[Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){_t("BFS algorithm selected"),R(!1),O(!1),r(!0),dt(!0),bt("Select nodes"),zn()},children:"Breadth-First Search"})}),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){_t("DFS algorithm selected"),R(!1),O(!1),r(!0),dt(!0),bt("Select nodes"),zn()},children:"Depth-First Search"})}),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){_t("GBFS algorithm selected"),R(!1),O(!1),r(!0),dt(!0),bt("Select nodes"),zn()},children:"Greedy Best-First Search"})}),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){_t("A* algorithm selected"),R(!1),O(!1),r(!0),dt(!0),bt("Select nodes"),zn()},children:"A* Search"})})]})]}),Object(v.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?yt(!1):yt(!0)},onMouseLeave:function(){window.innerWidth,yt(!1)},children:[Object(v.jsxs)("div",{className:"nav-links",onClick:function(){return pt(!1)},children:["Search & Sort Algorithms ",Object(v.jsx)("i",{className:"fas fa-caret-down"})]}),At&&Object(v.jsxs)("ul",{className:"dropdown-menu",children:[Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){Ln(),Bn(),_t("Linear search selected"),R(!1),r(!1),O(!0)},children:"Linear search"})}),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){Ln(),Bn(),_t("Binary search selected"),R(!1),r(!1),O(!0)},children:"Binary search"})}),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){Ln(),Bn(),_t("Jump search selected"),R(!1),r(!1),O(!0)},children:"Jump search"})}),Object(v.jsx)("div",{className:"divider"}),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){qn(),_t("Quick sort selected"),r(!1),O(!1),R(!0)},children:"Quick sort"})}),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){qn(),_t("Merge sort selected"),r(!1),O(!1),R(!0)},children:"Merge sort"})}),Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",onClick:function(){qn(),_t("Bubble sort selected"),r(!1),O(!1),R(!0)},children:"Bubble sort"})})]})]}),Object(v.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?wt(!1):wt(!0)},onMouseLeave:function(){window.innerWidth,wt(!1)},children:[Object(v.jsxs)("div",{className:"nav-links",onClick:function(){return pt(!1)},children:["Data Structures ",Object(v.jsx)("i",{className:"fas fa-caret-down"})]}),kt&&Object(v.jsx)("ul",{className:"dropdown-menu",children:Object(v.jsx)("li",{children:Object(v.jsx)("div",{className:"dropdown-link",children:"Nothing implemented yet"})})})]}),Object(v.jsx)("li",{className:"nav-item",children:Object(v.jsx)("div",{className:"nav-links-mobile",onClick:function(){return pt(!1)},children:"Dropdowns and buttons not yet implemented"})})]}),Object(v.jsx)("div",{children:Object(v.jsx)("button",{className:Ve?"btn":"bt-done",onClick:Ve?function(){pt(!1),r(!1),R(!1),O(!1),_t("Nothing selected"),dt(!1),B(!1),J(!1),ee([]),oe([]),se([]),ge([]),Oe([]),Me([]),Ie([]),Fe([]),Re(!1),De(0),bt("Select nodes"),nt([]),at([])}:function(){},children:"Reset"})})]}),N(a,z,H),S(a,z,H,qe,Pe,ft,tt,ct),I(tt,!0),A(ct,!0),(W||d)&&function(e){var t=Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20),n=Math.floor(Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/20)-4;return on[0]!==t&&on[1]!==n&&cn([t,n]),Object(v.jsxs)(v.Fragment,{children:[Object(v.jsx)("div",{className:"slider-text",style:{zIndex:-1},children:"Amount of entries"}),Object(v.jsxs)(F,{opacity:.8,color:"rgb(".concat(1.5*Tt,",").concat(201-1.5*Tt,",0)"),children:[Object(v.jsx)("div",{className:"value",style:{zIndex:-1},children:Tt}),Object(v.jsx)("input",{type:"range",min:2,max:e?1*(Math.floor((Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)-19.99)/20)+1)*10/10:t*n,value:Tt,className:"slider",onChange:function(e){return Xt(e.target.value)},onInput:function(){return e?qn():Bn()}})]}),Object(v.jsx)("button",{className:"btn-sort",onClick:function(){return Jt(Yt)},children:e?"Run sort":"Pick target"})]})}(W),W&&y(zt,Kt),d&&(e=$t,t=on[0],e.map((function(e){return Object(v.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",fontSize:e>=1e3?"8px":e>=100?"10px":"12px",marginLeft:"".concat(e%t*20-(e>=100||e>=100?1:e>=10?0:-4),"px"),marginTop:"".concat(20*Math.floor(e/t)+80-(e>=1e3?-2:e>=100?-1:0),"px"),top:"3px",left:"3px",borderRadius:"35%",display:"inline-block",animation:"fadeMe .2s",zIndex:-1},children:e})}))),d&&!hn&&M(K,!1,0,"Select nodes"),gn&&C(Mn,on[0]),hn&&k(sn,!1,Fn?-1:-2),!H&&a&&M(K,z,qe,ft),z&&k($,!1,0),H&&k(ie,!0,Pe),We&&w(je,!0),We&&w(Ne,!1),We&&E(xe,!0),We&&E(Ee,!1)]})}s.a.render(Object(v.jsx)(a.a.StrictMode,{children:Object(v.jsx)(Y,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.a8057efa.chunk.js.map