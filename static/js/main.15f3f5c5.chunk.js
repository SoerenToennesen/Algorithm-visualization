(this["webpackJsonpalgorithms-visualization"]=this["webpackJsonpalgorithms-visualization"]||[]).push([[0],{17:function(e,t,n){},22:function(e,t,n){"use strict";n.r(t);var i=n(2),o=n(7),c=n(1),a=n.n(c),r=n(8),s=n.n(r),l=(n(17),n(18),n(9));function u(e,t){for(var n=0;n<e.length;n++)if(e[n].toString()===t.toString())return!0;return!1}function d(e,t){for(var n=[],i=!1,o=t,c=e.length-1;c>=0&&(c===e.length-1&&n.push(t),!i);c--)for(var a=0;a<e[c].length;a++)if(e[c][a][0]===o[0]&&e[c][a][1]===o[1]){if(e[c][a][2]===Number.MIN_SAFE_INTEGER){i=!0;break}n.push([e[c][a][2],e[c][a][3]]),o=[e[c][a][2],e[c][a][3]];break}return n}function h(e,t,n,i,o,c,a,r,s){if(c)return e;var l,d=[[1,0],[0,1],[-1,0],[0,-1]],f=[],b=[];for(l=0;l<i.length;l++)i[l][3]>=i[l][4]?f.push([i[l][0]+d[i[l][2]][0],i[l][1]+d[i[l][2]][1],i[l][0],i[l][1]]):b.push([i[l][0],i[l][1],i[l][2],Math.round(10*(i[l][3]+.2))/10,i[l][4]]);e.push([[]]);var j=e.length-1;for(l=0;l<t.length;l++)if(!u(o,[t[l][0],t[l][1]])){0===l?e[j][0]=t[l]:e[j].push(t[l]),[t[l][0],t[l][1]].toString()!==[t[l][2],t[l][3]].toString()&&o.push([t[l][0],t[l][1]]);for(var g=0;g<d.length;g++)if(!(u(o,[t[l][0]+d[g][0],t[l][1]+d[g][1]])||t[l][0]+d[g][0]<=s[0]||t[l][0]+d[g][0]>=s[1]||t[l][1]+d[g][1]<=s[2]||t[l][1]+d[g][1]>=s[3])){var m,p=!0;for(m=0;m<a.length;m++)if([t[l][0]+d[g][0],t[l][1]+d[g][1]].toString()===a[m].toString()){p=!1;break}if(p)for(m=0;m<r.length;m++)if([t[l][0]+d[g][0],t[l][1]+d[g][1]].toString()===[r[m][0],r[m][1]].toString()){b.push([t[l][0],t[l][1],g,.2,r[m][2]]),p=!1;break}p&&f.push([t[l][0]+d[g][0],t[l][1]+d[g][1],t[l][0],t[l][1]])}c||t[l][0]!==n[0]||t[l][1]!==n[1]||(c=!0)}return f.toString()===[].toString()?e:h(e,f,n,b,o,c,a,r,s)}function f(e,t,n,i,o,c,a,r,s,l){if(c)return e;var d,h=[[1,0],[0,1],[-1,0],[0,-1]],b=[],j=[],g=[];for(d=0;d<i.length;d++)i[d][3]>=i[d][4]?l.push([i[d][0]+h[i[d][2]][0],i[d][1]+h[i[d][2]][1],i[d][0],i[d][1],e.length-1]):j.push([i[d][0],i[d][1],i[d][2],Math.round(10*(i[d][3]+.2))/10,i[d][4]]);e.push([[]]);var m=e.length-1;for(d=0;d<t.length;d++)if(!u(o,[t[d][0],t[d][1]])){0===d?e[m][0]=t[d]:e[m].push(t[d]),o.push([t[d][0],t[d][1]]);var p,x,O,v=-1,S=-1;for(p=0;p<h.length+1;p++){if(p!==h.length){if(u(o,[t[d][0]+h[p][0],t[d][1]+h[p][1]])||t[d][0]+h[p][0]<=s[0]||t[d][0]+h[p][0]>=s[1]||t[d][1]+h[p][1]<=s[2]||t[d][1]+h[p][1]>=s[3])continue;for(O=!0,x=0;x<a.length;x++)if([t[d][0]+h[p][0],t[d][1]+h[p][1]].toString()===a[x].toString()){O=!1;break}if(O)for(x=0;x<r.length;x++)if([t[d][0]+h[p][0],t[d][1]+h[p][1]].toString()===[r[x][0],r[x][1]].toString()){j.push([t[d][0],t[d][1],p,.2,r[x][2]]),O=!1;break}if(!O)continue;v=p;break}for(x=0;x<l.length;x++)v=p,S=x,g.push(l[x])}if(-1===v){var N=!0;for(p=e.length-1;p>=0;p--){var M=!1;for(x=0;x<h.length;x++)if(!(u(o,[e[p][0][0]+h[x][0],e[p][0][1]+h[x][1]])||e[p][0][0]+h[x][0]<=s[0]||e[p][0][0]+h[x][0]>=s[1]||e[p][0][1]+h[x][1]<=s[2]||e[p][0][1]+h[x][1]>=s[3])){var k;for(O=!0,k=0;k<a.length;k++)if([e[p][0][0]+h[x][0],e[p][0][1]+h[x][1]].toString()===a[k].toString()){O=!1;break}if(O)for(k=0;k<r.length;k++)if([e[p][0][0]+h[x][0],e[p][0][1]+h[x][1]].toString()===[r[k][0],r[k][1]].toString()){j.push([e[p][0][0],e[p][0][1],x,.2,r[k][2]]),O=!1;break}if(O){b.push([e[p][0][0]+h[x][0],e[p][0][1]+h[x][1],e[p][0][0],e[p][0][1]]),N=!1,M=!0;break}}if(M)break}if(N)return e}else 4===v?b.push([l[S][0],l[S][1],l[S][2],l[S][3]]):b.push([t[d][0]+h[v][0],t[d][1]+h[v][1],t[d][0],t[d][1]]);c||t[d][0]!==n[0]||t[d][1]!==n[1]||(c=!0)}var w=!0;return g.toString()===[].toString()&&(w=!1),f(e,b,n,j,o,c,a,r,s,w?g:l)}function b(e,t,n,i,o,c,a,r,s){if(c)return e;var l,d=[[1,0],[0,1],[-1,0],[0,-1]],h=[],f=[],j=[];for(l=0;l<i.length;l++)i[l][3]>=i[l][4]?j.push([i[l][0]+d[i[l][2]][0],i[l][1]+d[i[l][2]][1],i[l][0],i[l][1],e.length-1]):f.push([i[l][0],i[l][1],i[l][2],Math.round(10*(i[l][3]+.2))/10,i[l][4]]);e.push([[]]);var g=e.length-1;for(l=0;l<t.length;l++)if(!u(o,[t[l][0],t[l][1]])){0===l?e[g][0]=t[l]:e[g].push(t[l]),o.push([t[l][0],t[l][1]]);var m,p,x,O,v=[Number.MAX_SAFE_INTEGER,-1],S=[];for(m=0;m<j.length;m++)(x=Math.abs(j[m][0]-n[0])+Math.abs(j[m][1]-n[1]))<=v[0]&&(v=[x,m,1],S=[j[m][0],j[m][1],j[m][2],j[m][3]]);for(m=0;m<d.length;m++)if(!(u(o,[t[l][0]+d[m][0],t[l][1]+d[m][1]])||t[l][0]+d[m][0]<=s[0]||t[l][0]+d[m][0]>=s[1]||t[l][1]+d[m][1]<=s[2]||t[l][1]+d[m][1]>=s[3])){for(O=!0,p=0;p<a.length;p++)if([t[l][0]+d[m][0],t[l][1]+d[m][1]].toString()===a[p].toString()){O=!1;break}if(O)for(p=0;p<r.length;p++)if([t[l][0]+d[m][0],t[l][1]+d[m][1]].toString()===[r[p][0],r[p][1]].toString()){f.push([t[l][0],t[l][1],m,.2,r[p][2]]),O=!1;break}O&&(x=Math.abs(t[l][0]+d[m][0]-n[0])+Math.abs(t[l][1]+d[m][1]-n[1]))<=v[0]&&(v=[x,m,0])}if(0===v[2])h.push([t[l][0]+d[v[1]][0],t[l][1]+d[v[1]][1],t[l][0],t[l][1]]);else if(1===v[2])h.push(S);else{var N=[Number.MAX_SAFE_INTEGER,-1],M=!0,k=[];for(m=e.length-1;m>=0;m--)for(p=0;p<d.length;p++)if(!(u(o,[e[m][0][0]+d[p][0],e[m][0][1]+d[p][1]])||e[m][0][0]+d[p][0]<=s[0]||e[m][0][0]+d[p][0]>=s[1]||e[m][0][1]+d[p][1]<=s[2]||e[m][0][1]+d[p][1]>=s[3])){var w;for(O=!0,w=0;w<a.length;w++)if([e[m][0][0]+d[p][0],e[m][0][1]+d[p][1]].toString()===a[w].toString()){O=!1;break}if(O)for(w=0;w<r.length;w++)if([e[m][0][0]+d[p][0],e[m][0][1]+d[p][1]].toString()===[r[w][0],r[w][1]].toString()){f.push([e[m][0][0],e[m][0][1],p,.2,r[w][2]]),O=!1;break}O&&((x=Math.abs(e[m][0][0]+d[p][0]-n[0])+Math.abs(e[m][0][1]+d[p][1]-n[1]))<=N[0]&&(N=[x,p],k=[e[m][0][0],e[m][0][1]]),M=!1)}if(M)return e;h.push([k[0]+d[N[1]][0],k[1]+d[N[1]][1],k[0],k[1]])}c||t[l][0]!==n[0]||t[l][1]!==n[1]||(c=!0)}return b(e,h,n,f,o,c,a,r,s)}function j(e,t,n,i,o,c,a,r,s){if(c)return e;var l,d=[[1,0],[0,1],[-1,0],[0,-1]],h=[],f=[],b=[];for(l=0;l<i.length;l++)i[l][3]>=i[l][4]?b.push([i[l][0]+d[i[l][2]][0],i[l][1]+d[i[l][2]][1],i[l][0],i[l][1],e.length-1]):f.push([i[l][0],i[l][1],i[l][2],Math.round(10*(i[l][3]+.2))/10,i[l][4]]);e.push([[]]);var g=e.length-1;for(l=0;l<t.length;l++)if(!u(o,[t[l][0],t[l][1]])){0===l?e[g][0]=t[l]:e[g].push(t[l]),o.push([t[l][0],t[l][1]]);var m,p,x,O,v=[Number.MAX_SAFE_INTEGER,-1,-1],S=[];for(m=0;m<b.length;m++)(x=b[m][4]+(Math.abs(b[m][0]-n[0])+Math.abs(b[m][1]-n[1])))<=v[0]&&(v=[x,m,1],S=[b[m][0],b[m][1],b[m][2],b[m][3]]);for(m=0;m<d.length;m++)if(!(u(o,[t[l][0]+d[m][0],t[l][1]+d[m][1]])||t[l][0]+d[m][0]<=s[0]||t[l][0]+d[m][0]>=s[1]||t[l][1]+d[m][1]<=s[2]||t[l][1]+d[m][1]>=s[3])){for(O=!0,p=0;p<a.length;p++)if([t[l][0]+d[m][0],t[l][1]+d[m][1]].toString()===a[p].toString()){O=!1;break}if(O)for(p=0;p<r.length;p++)if([t[l][0]+d[m][0],t[l][1]+d[m][1]].toString()===[r[p][0],r[p][1]].toString()){f.push([t[l][0],t[l][1],m,.2,r[p][2]]),O=!1;break}O&&(x=g+1+(Math.abs(t[l][0]+d[m][0]-n[0])+Math.abs(t[l][1]+d[m][1]-n[1])))<=v[0]&&(v=[x,m,0])}if(0===v[2])h.push([t[l][0]+d[v[1]][0],t[l][1]+d[v[1]][1],t[l][0],t[l][1]]);else if(1===v[2])h.push(S);else{var N=[Number.MAX_SAFE_INTEGER,-1],M=!0,k=[];for(m=e.length-1;m>=0;m--)for(p=0;p<d.length;p++)if(!(u(o,[e[m][0][0]+d[p][0],e[m][0][1]+d[p][1]])||e[m][0][0]+d[p][0]<=s[0]||e[m][0][0]+d[p][0]>=s[1]||e[m][0][1]+d[p][1]<=s[2]||e[m][0][1]+d[p][1]>=s[3])){var w;for(O=!0,w=0;w<a.length;w++)if([e[m][0][0]+d[p][0],e[m][0][1]+d[p][1]].toString()===a[w].toString()){O=!1;break}if(O)for(w=0;w<r.length;w++)if([e[m][0][0]+d[p][0],e[m][0][1]+d[p][1]].toString()===[r[w][0],r[w][1]].toString()){f.push([e[m][0][0],e[m][0][1],p,.2,r[w][2]]),O=!1;break}O&&((x=g+1+(Math.abs(e[m][0][0]+d[p][0]-n[0])+Math.abs(e[m][0][1]+d[p][1]-n[1])))<=N[0]&&(N=[x,p],k=[e[m][0][0],e[m][0][1]]),M=!1)}if(M)return e;h.push([k[0]+d[N[1]][0],k[1]+d[N[1]][1],k[0],k[1]])}c||t[l][0]!==n[0]||t[l][1]!==n[1]||(c=!0)}return j(e,h,n,f,o,c,a,r,s)}function g(e,t,n,i){for(var o=[],c=0;c<n;c++)if(o.push(e[c]),e[c]===t)return i;return i.push(o),g(e,t,n+1,i)}function m(e,t,n,i,o){var c=Math.floor((n+i)/2);if(e[c]===t)return o;t<e[c]?i=c:n=c;var a=[];if(0!==o.length)for(var r=0;r<o[o.length-1].length;r++)a.push(o[o.length-1][r]);return a.push(e[c]),o.push(a),m(e,t,n,i,o)}function p(e,t){if(1===e.length){for(var n=[],i=0;i<t.length;i++){for(var o=[],c=0;c<t[i].length;c++)o.push([c,t[i][c]]);n.push(o)}return n}for(var a=[],r=0;r<e.length;r+=2)if(r===e.length-1)a.push(e[r]);else{for(var s=0,l=0,u=[];s<=e[r].length&&l<=e[r+1].length;)s===e[r].length?(u.push(e[r+1][l]),l++):l===e[r+1].length?(u.push(e[r][s]),s++):e[r][s]>e[r+1][l]?(u.push(e[r+1][l]),l++):(u.push(e[r][s]),s++);u.pop(),a.push(u)}for(var d=t,h=[],f=0;f<a.length;f++)for(var b=0;b<a[f].length;b++)h.push(a[f][b]);return d.push(h),p(a,d)}function x(e,t,n,i){if(n>=i)return e;e.push(t.slice());var o=function(e,t,n){for(var i=e[n],o=t;o<n;o++)if(e[o]<=i){var c=e[o];e[o]=e[t],e[t]=c,t++}var a=e[n];return e[n]=e[t],e[t]=a,[t,e]}(t,n,i);return x(e,o[1],n,o[0]-1),x(e,o[1],o[0]+1,i),e}function O(e,t,n){if(t.push(e.slice()),0===n){for(var i=[],o=0;o<t.length;o++){for(var c=[],a=0;a<t[o].length;a++)c.push([a,t[o][a]]);i.push(c)}return i}for(var r=0;r<n;r++)if(e[r]>e[r+1]){var s=e[r];e[r]=e[r+1],e[r+1]=s}return O(e,t,n-1)}var v,S=n(0);function N(e,t,n,i,o,c,a,r){return Object(S.jsxs)("div",{className:"legend-container",children:[Object(S.jsx)("div",{className:"legend-title",children:"Legend"}),e&&"Add walls"===c&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-colorm1",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Add walls"]}),a.toString()!==[].toString()&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-colorm2",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Wall nodes"]}),e&&"Add weights"===c&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-color0",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Add weights"]}),r.toString()!==[].toString()&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-colorm3",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Weight nodes"]}),e&&"Select nodes"===c&&!t&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-color1",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Select start node"]}),t&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-color1",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Start node"]}),t&&"Select nodes"===c&&!n&&(0===i?Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-color2",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (green light)"]}):1===i?Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-color3",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (computationally hard)"]}):Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-color4",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Select goal node (restricted)"]})),n&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:0===o?"legend-color2":1===o?"legend-color3":"legend-color4",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Goal node"]}),n&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-color5",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Search"]}),n&&Object(S.jsxs)("div",{className:"legend-info",children:[Object(S.jsx)("div",{className:"legend-color6",children:Object(S.jsx)("i",{className:"fas fa-square"})}),"\xa0Path found"]})]})}function M(e,t,n,i,o){return Object(S.jsxs)("footer",{className:"footer-container",children:[!e&&Object(S.jsx)("div",{className:"footer-info",children:"Select an algorithm or datastructure"}),!t&&e&&Object(S.jsx)("div",{className:"footer-info",children:"Select your start node"}),t&&!n&&Object(S.jsx)("div",{className:"footer-info",children:"Select your goal node"}),t&&n&&Object(S.jsx)("div",{className:"footer-inf-nowiggle",children:"Enjoy the show!"})]})}function k(e,t,n,i){return Object(S.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",marginTop:"".concat(e[0],"px"),marginLeft:"".concat(e[1],"px"),top:"3px",left:"3px",backgroundColor:"Select nodes"===i?t?0===n?"rgb(49, 158, 63, 0.5)":1===n?"rgb(211, 221, 63, 0.5)":"rgb(221, 63, 63, 0.5)":"rgb(65,126,238, 0.5)":"Add walls"===i?"rgb(146, 95, 0, 0.5)":"rgb(68, 0, 179, 0.5)",borderRadius:"35%",display:"inline-block",zIndex:-1}})}function w(e,t,n){return Object(S.jsx)("div",{style:{position:"absolute",height:n<0?"20px":"15px",width:n<0?"20px":"15px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:n<0?"0px":"3px",left:n<0?"0px":"3px",backgroundColor:-2===n?"rgb(65,126,238,0.5)":-1===n?"rgb(49, 158, 63,0.5)":t?0===n?"rgb(49, 158, 63)":1===n?"rgb(211, 221, 63)":"rgb(221, 63, 63)":"rgb(65,126,238)",borderRadius:n<0?"0%":"35%",display:"inline-block",animation:"fadeMe .2s",zIndex:-.9}})}function E(e,t){return e.map((function(e){return e.map((function(e){return Object(S.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"3px",left:"3px",backgroundColor:"rgb(90, 90, 90)",borderRadius:"35%",display:"inline-block",animation:t?"fadeMe .2s":"",zIndex:-1}})}))}))}function I(e,t){return e.map((function(e){return Object(S.jsx)("div",{style:{position:"absolute",height:"7.5px",width:"7.5px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"6.85px",left:"6.85px",backgroundColor:"rgb(240,149,55)",borderRadius:"35%",display:"inline-block",animation:t?"fadeMe .2s":"",zIndex:-.8}})}))}function A(e,t){return e.map((function(e){return Object(S.jsx)("div",{style:{position:"absolute",height:"20px",width:"20px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"0px",left:"0px",backgroundColor:"rgb(146, 95, 0)",display:"inline-block",animation:t?"fadeMe 1s":"",zIndex:-.8}})}))}function y(e,t){return e.map((function(e){return Object(S.jsx)("div",{style:{position:"absolute",height:"20px",width:"20px",marginLeft:"".concat(20*e[0],"px"),marginTop:"".concat(20*e[1],"px"),top:"0px",left:"0px",backgroundColor:"rgb(68, 0, 179, ".concat(e[2],")"),display:"inline-block",animation:t?"fadeMe 1s":"",zIndex:-.8}})}))}function C(e,t){return e.map((function(e){return Object(S.jsx)("div",{style:{position:"absolute",height:"".concat(20*e[1],"px"),width:"15px",marginLeft:"".concat(20*e[0]+2.5,"px"),bottom:"0px",left:"0px",borderRadius:"5px",backgroundColor:t?"rgb(125,194,175,0.7)":"rgb(65,126,238,0.7)",display:"inline-block",zIndex:-2}})}))}function Y(e,t){return e.map((function(e){return Object(S.jsx)("div",{style:{position:"absolute",height:"20px",width:"20px",marginLeft:"".concat(e%t*20,"px"),marginTop:"".concat(20*Math.floor(e/t),"px"),backgroundColor:"rgb(30,30,30,0.8)",display:"inline-block",animation:"fadeMe .2s",zIndex:-1}})}))}var F=l.a.div(v||(v=Object(o.a)(["\n  display: flex;\n  position: fixed;\n  align-items: center;\n  color: rgb(125,194,175);\n  margin-top: 50px;\n  right: 30px;\n\n  .value {\n    flex: 1;\n    margin-right: 15px;\n    font-size: 30px;\n  }\n  \n  .slider {\n    flex: 100;\n    -webkit-appearance: none;\n    height: 10px;\n    width: 300px;\n    border-radius: 5px;\n    background: rgb(226,125,95,0.8);\n    outline: none;\n\n    &::-webkit-slider-thumb {\n      -webkit-appearance: none;\n      appearance: none;\n      width: 20px;\n      height: 20px;\n      border-radius: 5px;\n      background: ",";\n      opacity: ",";\n      cursor: pointer;\n      outline: 3px solid rgb(65,126,238);\n    }\n  }\n"])),(function(e){return e.color}),(function(e){return e.opacity}));function _(){var e,t,n=Object(c.useState)(!1),o=Object(i.a)(n,2),a=o[0],r=o[1],s=Object(c.useState)(!1),l=Object(i.a)(s,2),u=l[0],v=l[1],_=Object(c.useState)(!1),W=Object(i.a)(_,2),X=W[0],R=W[1],T=Object(c.useState)(!1),G=Object(i.a)(T,2),L=G[0],z=G[1],B=Object(c.useState)(!1),q=Object(i.a)(B,2),D=q[0],H=q[1],J=Object(c.useState)(!1),P=Object(i.a)(J,2),Q=P[0],K=P[1],U=Object(c.useState)([]),V=Object(i.a)(U,2),Z=V[0],$=V[1],ee=Object(c.useState)([]),te=Object(i.a)(ee,2),ne=te[0],ie=te[1],oe=Object(c.useState)([]),ce=Object(i.a)(oe,2),ae=ce[0],re=ce[1],se=Object(c.useState)([]),le=Object(i.a)(se,2),ue=le[0],de=le[1],he=Object(c.useState)([]),fe=Object(i.a)(he,2),be=fe[0],je=fe[1],ge=Object(c.useState)([]),me=Object(i.a)(ge,2),pe=me[0],xe=me[1],Oe=Object(c.useState)([]),ve=Object(i.a)(Oe,2),Se=ve[0],Ne=ve[1],Me=Object(c.useState)([]),ke=Object(i.a)(Me,2),we=ke[0],Ee=ke[1],Ie=Object(c.useState)([]),Ae=Object(i.a)(Ie,2),ye=Ae[0],Ce=Ae[1],Ye=Object(c.useState)([]),Fe=Object(i.a)(Ye,2),_e=Fe[0],We=Fe[1],Xe=Object(c.useState)(!1),Re=Object(i.a)(Xe,2),Te=Re[0],Ge=Re[1],Le=Object(c.useState)(!1),ze=Object(i.a)(Le,2),Be=ze[0],qe=ze[1],De=Object(c.useState)(0),He=Object(i.a)(De,2),Je=He[0],Pe=He[1],Qe=Object(c.useState)(0),Ke=Object(i.a)(Qe,2),Ue=Ke[0],Ve=Ke[1],Ze=Object(c.useState)(!0),$e=Object(i.a)(Ze,2),et=$e[0],tt=$e[1],nt=Object(c.useState)([]),it=Object(i.a)(nt,2),ot=it[0],ct=it[1],at=Object(c.useState)([]),rt=Object(i.a)(at,2),st=rt[0],lt=rt[1],ut=Object(c.useState)("Select nodes"),dt=Object(i.a)(ut,2),ht=dt[0],ft=dt[1],bt=Object(c.useState)(!1),jt=Object(i.a)(bt,2),gt=jt[0],mt=jt[1],pt=Object(c.useState)(!1),xt=Object(i.a)(pt,2),Ot=xt[0],vt=xt[1],St=Object(c.useState)(!1),Nt=Object(i.a)(St,2),Mt=Nt[0],kt=Nt[1],wt=Object(c.useState)(!1),Et=Object(i.a)(wt,2),It=Et[0],At=Et[1],yt=Object(c.useState)("Nothing selected"),Ct=Object(i.a)(yt,2),Yt=Ct[0],Ft=Ct[1],_t=Object(c.useState)(50),Wt=Object(i.a)(_t,2),Xt=Wt[0],Rt=Wt[1],Tt=Object(c.useState)([]),Gt=Object(i.a)(Tt,2),Lt=Gt[0],zt=Gt[1],Bt=Object(c.useState)(""),qt=Object(i.a)(Bt,2),Dt=qt[0],Ht=qt[1],Jt=Object(c.useState)(!1),Pt=Object(i.a)(Jt,2),Qt=Pt[0],Kt=Pt[1],Ut=Object(c.useState)([]),Vt=Object(i.a)(Ut,2),Zt=Vt[0],$t=Vt[1],en=Object(c.useState)([0,0]),tn=Object(i.a)(en,2),nn=tn[0],on=tn[1],cn=Object(c.useState)([]),an=Object(i.a)(cn,2),rn=an[0],sn=an[1],ln=Object(c.useState)(!1),un=Object(i.a)(ln,2),dn=un[0],hn=un[1],fn=Object(c.useState)(!1),bn=Object(i.a)(fn,2),jn=bn[0],gn=bn[1],mn=Object(c.useState)([]),pn=Object(i.a)(mn,2),xn=pn[0],On=pn[1],vn=Object(c.useState)([]),Sn=Object(i.a)(vn,2),Nn=Sn[0],Mn=Sn[1],kn=Object(c.useState)(0),wn=Object(i.a)(kn,2),En=wn[0],In=wn[1],An=Object(c.useState)(!1),yn=Object(i.a)(An,2),Cn=yn[0],Yn=yn[1];function Fn(){onmousedown=function(){},onmouseup=function(){},onmousemove=function(){}}if(u&&Dt.includes("search")&&!dn&&(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmousemove=function(e){e.clientY>=80&&e.clientY<=60+Xt/Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20)*20||e.clientY<=80+Xt/Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20)*20&&e.clientX<=Xt%Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20)*20?($([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]),onmousedown=function(t){if(t.clientY>=80)return sn([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),In(Math.floor(e.clientX/20)+(Math.floor(e.clientY/20)-4)*Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20)),hn(!0),void Fn()}):onmousedown=function(){}}),"Add walls"===ht&&(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmousemove=function(e){e.clientY>=80&&($([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]),onmousedown=function(t){if(t.clientY>=80){var n,i=!0,o=!1,c=[];for(n=0;n<ot.length;n++)ot[n].toString()!==[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()?c.push(ot[n]):(i=!1,o=!0);if(i){var a=[];for(n=0;n<st.length;n++)[st[n][0],st[n][1]].toString()!==[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()&&a.push(st[n]);lt(a)}i&&(c.push([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),ct(c)),o&&ct(c)}})}),"Add weights"===ht&&(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmousemove=function(e){e.clientY>=80&&($([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]),onmousedown=function(t){if(t.clientY>=80){var n,i=!0,o=st;for(n=0;n<o.length;n++)if([st[n][0],st[n][1]].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){i=!1,o[n][2]=1===o[n][2]?.2:Math.round(10*(o[n][2]+.2))/10;break}if(i)for(n=0;n<ot.length;n++)if(ot[n].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){i=!1;break}i&&(o.push([Math.floor(e.clientX/20),Math.floor(e.clientY/20),.2]),lt(o))}})}),a&&"Select nodes"===ht&&(D&&Q||(onmousedown=function(){},onmouseup=function(){},onmousemove=function(){},onmouseup=function(e){if("Select nodes"===ht){var t,n=!0;if(D||0!==ne.length){if(!Q&&0===ae.length&&e.clientY>=80){for(t=0;t<ot.length;t++)if(ot[t].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){n=!1;break}if(n)if(2!==Je)Ve(Je),re([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),K(!0)}}else if(e.clientY>=80){for(t=0;t<ot.length;t++)if(ot[t].toString()===[Math.floor(e.clientX/20),Math.floor(e.clientY/20)].toString()){n=!1;break}n&&(ie([Math.floor(e.clientX/20),Math.floor(e.clientY/20)]),H(!0))}}})),!Q&&a&&"Select nodes"===ht&&(onmousemove=function(e){var t=Math.abs(Math.floor(e.clientX/20)-ne[0])+Math.abs(Math.floor(e.clientY/20)-ne[1]);e.clientY>=80&&("BFS algorithm selected"===Yt?(t<20&&Pe(0),t>=20&&t<40&&Pe(1),t>=40&&Pe(2)):("DFS algorithm selected"===Yt||"GBFS algorithm selected"===Yt||"A* algorithm selected"===Yt)&&Pe(0),$([20*Math.floor(e.clientY/20),20*Math.floor(e.clientX/20)]))}),Q&&!Te&&(onmousedown=function(e){},onmouseup=function(e){},onmousemove=function(e){},0===ue.length||0===_e.length)){var _n,Wn,Xn=Math.floor((Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)-19.99)/20)+1,Rn=Math.floor(4)-1,Tn=Math.floor((Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)-19.99)/20)+1;"BFS algorithm selected"===Yt?(_n=h([],[[ne[0],ne[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],ae,[],[],!1,ot,st,[-1,Xn,Rn,Tn]),de(_n),Wn=(Wn=d(_n,ae)).reverse(),We(Wn),Ge(!0)):"DFS algorithm selected"===Yt?(_n=f([],[[ne[0],ne[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],ae,[],[],!1,ot,st,[-1,Xn,Rn,Tn],[]),de(_n),Wn=(Wn=d(_n,ae)).reverse(),We(Wn),Ge(!0)):"GBFS algorithm selected"===Yt?(_n=b([],[[ne[0],ne[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],ae,[],[],!1,ot,st,[-1,Xn,Rn,Tn]),de(_n),Wn=(Wn=d(_n,ae)).reverse(),We(Wn),Ge(!0)):"A* algorithm selected"===Yt&&(_n=j([],[[ne[0],ne[1],Number.MIN_SAFE_INTEGER,Number.MIN_SAFE_INTEGER]],ae,[],[],!1,ot,st,[-1,Xn,Rn,Tn]),de(_n),Wn=(Wn=d(_n,ae)).reverse(),We(Wn),Ge(!0))}function Gn(){for(var e=0;e<Xt;e++)Zt.push(e);$t(Zt)}function Ln(){H(!1),K(!1),ie([]),re([]),de([]),xe([]),Ne([]),Ee([]),Ce([]),We([]),Ge(!1),Pe(0),Fn()}function zn(){$t([]),on([0,0]),sn([]),hn(!1),gn(!1),On([]),Mn([]),In(0),Yn(!1),Ht(""),$([]),Fn(),re([]),ie([]),ct([]),lt([]),H(!1),K(!1)}function Bn(){qe(!1),je([]),Kt(!1),Ht(""),Fn(),re([]),ie([]),ct([]),lt([]),H(!1),K(!1)}return Object(c.useEffect)((function(){var e=0,t=0;if(Te){tt(!1);var n=setInterval((function(){if(e===ue.length){if(t===_e.length)return tt(!0),void clearInterval(n);if(t>0){for(var i=[],o=0;o<t;o++)i[o]=_e[o];Ce(i)}var c=[];c[t]=_e[t],Ne(c),t++}else{if(e>0){for(var a=[],r=0;r<e;r++)a[r]=ue[r];Ee(a)}var s=[];s[e]=ue[e],xe(s),e++}}),2e3/ue.length)}}),[Te,ue,_e]),Object(c.useEffect)((function(){if(Be)var e=0,t=setInterval((function(){if(e>=be.length)return Kt(!0),void clearInterval(t);zt(be[e]),e++}),5e3/be.length)}),[Be,be]),Object(c.useEffect)((function(){if(dn){var e=[];"Linear search selected"===Dt&&(e=g(Zt,En,1,[]),On(e),gn(!0)),"Binary search selected"===Dt&&(e=m(Zt,En,0,Zt.length-1,[]),On(e),gn(!0)),"Jump search selected"===Dt&&(On([]),gn(!0))}}),[dn,En,Dt,Zt]),Object(c.useEffect)((function(){if(jn)var e=0,t=setInterval((function(){if(e>=xn.length)return Yn(!0),void clearInterval(t);Mn(xn[e]),e++}),2e3/xn.length)}),[jn,xn]),Object(c.useEffect)((function(){if(Yt.includes("sort")){for(var e=Math.floor((Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)-19.99)/20)-3,t=[],n=0;n<Xt;n++){var i=Math.floor(Math.random()*(e-1+1)+1);t.push([n,i])}zt(t)}if(Yt.includes("search")){for(var o=[],c=0;c<Xt;c++)o.push(c);$t(o)}}),[Xt,Yt]),Object(c.useEffect)((function(){var e,t=[];if("Quick sort selected"===Dt){for(e=0;e<Lt.length;e++)t.push(Lt[e][1]);for(var n=x([],t,0,t.length-1),i=[],o=0;o<n.length;o++){for(var c=[],a=0;a<n[o].length;a++)c.push([a,n[o][a]]);i.push(c)}je(i),qe(!0)}var r=[];if("Merge sort selected"===Dt){for(e=0;e<Lt.length;e++)r.push([Lt[e][1]]);var s=p(r,[]);je(s),qe(!0)}if("Bubble sort selected"===Dt){for(e=0;e<Lt.length;e++)t.push(Lt[e][1]);var l=O(t,[],t.length-1);je(l),qe(!0)}}),[Dt,Lt]),Object(S.jsxs)("div",{className:"body",children:[Object(S.jsxs)("nav",{className:"navbar",children:[Object(S.jsxs)("div",{className:"navbar-logo",children:["DSA visuals ",Object(S.jsx)("i",{className:"fas fa-project-diagram"})]}),Object(S.jsx)("div",{className:"navbar-selected",children:Yt}),Object(S.jsx)("div",{className:"menu-icon",onClick:function(){return mt(!gt)},children:Object(S.jsx)("i",{className:gt?"fas fa-times":"fas fa-bars"})}),Object(S.jsxs)("ul",{className:gt?"nav-menu active":"nav-menu",children:[Yt.includes("algorithm")&&Object(S.jsxs)("li",{className:"nav-item",children:[Object(S.jsx)("div",{className:et?"Select nodes"!==ht?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:et?function(){mt(!1),ft("Select nodes")}:function(){},children:"Select nodes"}),Object(S.jsx)("div",{className:et?"Add walls"!==ht?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:et?function(){mt(!1),ft("Add walls")}:function(){},children:"Add walls"}),Object(S.jsx)("div",{className:et?"Add weights"!==ht?"nav-links":"nav-li-unclickable":"nav-li-unclick-2",onClick:et?function(){mt(!1),ft("Add weights")}:function(){},children:"Add weights"})]}),Object(S.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?vt(!1):vt(!0)},onMouseLeave:function(){window.innerWidth,vt(!1)},children:[Object(S.jsxs)("div",{className:"nav-links",onClick:function(){return mt(!1)},children:["Pathfinder Algorithms ",Object(S.jsx)("i",{className:"fas fa-caret-down"})]}),Ot&&Object(S.jsxs)("ul",{className:"dropdown-menu",children:[Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Ft("BFS algorithm selected"),R(!1),v(!1),r(!0),ft("Select nodes"),Ln()},children:"Breadth-First Search"})}),Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Ft("DFS algorithm selected"),R(!1),v(!1),r(!0),ft("Select nodes"),Ln()},children:"Depth-First Search"})}),Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Ft("GBFS algorithm selected"),R(!1),v(!1),r(!0),ft("Select nodes"),Ln()},children:"Greedy Best-First Search"})}),Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Ft("A* algorithm selected"),R(!1),v(!1),r(!0),ft("Select nodes"),Ln()},children:"A* Search"})})]})]}),Object(S.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?At(!1):At(!0)},onMouseLeave:function(){window.innerWidth,At(!1)},children:[Object(S.jsxs)("div",{className:"nav-links",onClick:function(){return mt(!1)},children:["Search & Sort Algorithms ",Object(S.jsx)("i",{className:"fas fa-caret-down"})]}),It&&Object(S.jsxs)("ul",{className:"dropdown-menu",children:[Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Gn(),zn(),Ft("Linear search selected"),R(!1),r(!1),v(!0)},children:"Linear search"})}),Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Gn(),zn(),Ft("Binary search selected"),R(!1),r(!1),v(!0)},children:"Binary search"})}),Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Gn(),zn(),Ft("Jump search selected"),R(!1),r(!1),v(!0)},children:"Jump search"})}),Object(S.jsx)("div",{className:"divider"}),Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Bn(),Ft("Quick sort selected"),r(!1),v(!1),R(!0)},children:"Quick sort"})}),Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Bn(),Ft("Merge sort selected"),r(!1),v(!1),R(!0)},children:"Merge sort"})}),Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){Bn(),Ft("Bubble sort selected"),r(!1),v(!1),R(!0)},children:"Bubble sort"})})]})]}),Object(S.jsxs)("li",{className:"nav-item",onMouseEnter:function(){window.innerWidth<960?kt(!1):kt(!0)},onMouseLeave:function(){window.innerWidth,kt(!1)},children:[Object(S.jsxs)("div",{className:"nav-links",onClick:function(){return mt(!1)},children:["Data Structures ",Object(S.jsx)("i",{className:"fas fa-caret-down"})]}),Mt&&Object(S.jsx)("ul",{className:"dropdown-menu",children:Object(S.jsx)("li",{children:Object(S.jsx)("div",{className:"dropdown-link",onClick:function(){z(!L)},children:"Nothing implemented yet"})})})]}),Object(S.jsx)("li",{className:"nav-item",children:Object(S.jsx)("div",{className:"nav-links-mobile",onClick:function(){return mt(!1)},children:"Dropdowns and buttons not yet implemented"})})]}),Object(S.jsx)("div",{children:Object(S.jsx)("button",{className:et?"btn":"bt-done",onClick:et?function(){mt(!1),r(!1),R(!1),v(!1),Ft("Nothing selected"),H(!1),K(!1),ie([]),re([]),de([]),xe([]),Ne([]),Ee([]),Ce([]),We([]),Ge(!1),Pe(0),ft("Select nodes"),ct([]),lt([]),zn(),Ln(),Bn(),Fn()}:function(){},children:"Reset"})})]}),M(a,D,Q),N(a,D,Q,Je,Ue,ht,ot,st),A(ot,!0),y(st,!0),(X||u)&&function(e){var t=Math.floor(Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)/20),n=Math.floor(Math.max(document.documentElement.clientHeight||0,window.innerHeight||0)/20)-4;return nn[0]!==t&&nn[1]!==n&&on([t,n]),Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)("div",{className:"slider-text",style:{zIndex:-1},children:"Amount of entries"}),Object(S.jsxs)(F,{opacity:.8,color:"rgb(".concat(1.5*Xt,",").concat(201-1.5*Xt,",0)"),children:[Object(S.jsx)("div",{className:"value",style:{zIndex:-1},children:Xt}),Object(S.jsx)("input",{type:"range",min:2,max:e?1*(Math.floor((Math.max(document.documentElement.clientWidth||0,window.innerWidth||0)-19.99)/20)+1)*10/10:t*n,value:Xt,className:"slider",onChange:function(e){return Rt(e.target.value)},onInput:function(){return e?Bn():zn()}})]}),Object(S.jsx)("button",{className:"btn-sort",onClick:function(){return Ht(Yt)},children:e?"Run sort":"Pick target"})]})}(X),X&&C(Lt,Qt),u&&(e=Zt,t=nn[0],e.map((function(e){return Object(S.jsx)("div",{style:{position:"absolute",height:"15px",width:"15px",fontSize:e>=1e3?"8px":e>=100?"10px":"12px",marginLeft:"".concat(e%t*20-(e>=100||e>=100?1:e>=10?0:-4),"px"),marginTop:"".concat(20*Math.floor(e/t)+80-(e>=1e3?-2:e>=100?-1:0),"px"),top:"3px",left:"3px",borderRadius:"35%",display:"inline-block",animation:"fadeMe .2s",zIndex:-1},children:e})}))),u&&!dn&&k(Z,!1,0,"Select nodes"),jn&&Y(Nn,nn[0]),dn&&w(rn,!1,Cn?-1:-2),!Q&&a&&k(Z,D,Je,ht),D&&w(ne,!1,0),Q&&w(ae,!0,Ue),Te&&E(pe,!0),Te&&E(we,!1),Te&&I(Se,!0),Te&&I(ye,!1)]})}s.a.render(Object(S.jsx)(a.a.StrictMode,{children:Object(S.jsx)(_,{})}),document.getElementById("root"))}},[[22,1,2]]]);
//# sourceMappingURL=main.15f3f5c5.chunk.js.map