(self.webpackChunkreact_qq_music=self.webpackChunkreact_qq_music||[]).push([[172],{1732:(e,n,t)=>{"use strict";t.d(n,{$:()=>r});var i=t(9405),a=t(5907),l=t.n(a),r=function(e){return(0,i.Z)({method:"GET",url:"/getAlbumInfo?"+l().stringify(e)})}},8867:(e,n,t)=>{"use strict";t.d(n,{Z:()=>f});var i=t(863),a=t(5365),l=t(4403),r=t.n(l),c=t(5488);const o="_2VAyGHGt",u="cOMhUzdH",s="_3mX8oF9E",m="_14ilbZ2I",d="_17NYzeV9";const f=function(e){var n=e.data,t=e.showListenNum,l=void 0!==t&&t,f=e.onPlay,v=e.onView,g=(0,i.useState)([]),p=g[0],E=g[1],y=(0,i.useState)({show:!1,title:""}),b=y[0],h=y[1];(0,i.useEffect)((function(){E(n)}),[n]);var k=(0,i.useMemo)((function(){return null==p?void 0:p.map((function(e,n){var t=e.cover,o=e.title,u=e.listen_num,g=e.content_id;return i.createElement("div",{key:n,style:"no123"===o?{visibility:"hidden"}:{}},i.createElement("div",{className:s,onMouseEnter:function(){return _(1,o)},onMouseLeave:function(){return _(0,o)},onClick:function(){return v&&v(g)}},i.createElement(a.Z,{classNames:"toplayAnim",in:b.title===o&&b.show,timeout:300},i.createElement("i",{className:r()("iconfont","icon-toplay",d),onClick:function(e){e.stopPropagation(),f&&f(g)}})),l&&i.createElement(a.Z,{in:!(b.title===o&&b.show),timeout:0},i.createElement("div",{className:m},i.createElement("i",{className:r()("iconfont","icon-listen")}),(0,c.Y4)(u))),i.createElement("img",{src:t,alt:o})),i.createElement("div",{onClick:function(){return v&&v(g)}},o))}))}),[p,b]),_=function(e,n){h({show:!!e,title:e?n:""})};return i.createElement("div",{className:o},i.createElement("div",{className:u},k))}},5669:(e,n,t)=>{"use strict";t.d(n,{Z:()=>o});var i=t(863),a=t(4403),l=t.n(a),r=t(5488);const c={container:"fCfgtkMX",wrapper:"EDsB9ymv",item:"_2oZlNcj4",title0:"_2K66qg5e",title1:"_1NLv3Kkc",title2:"_2HZJPVQg",title3:"_3GibRtZn",title:"_1Xkd_p4k",content:"piAa33Fg",select:"_2IWDSLRT"};const o=function(e){var n=e.data,t=e.columns,a=e.onClickSong,o=e.onClickSinger,u=e.onClickAlbum,s=e.currentSongId,m=(0,i.useCallback)((function(e,n,t){var a,l;return[e[n],"singer"===n&&(null===(a=e[n])||void 0===a?void 0:a.map((function(t,a){var l=t.name,r=t.mid;return i.createElement("span",{key:a},i.createElement("span",{onClick:function(){return o&&o(r)}},l),1!==e[n].length&&a!==e[n].length-1?" / ":"")}))),"album"===n&&(null===(l=e[n])||void 0===l?void 0:l.name)||e.albumname,(0,r.ih)(e[n])][t]}),[]),d=(0,i.useMemo)((function(){return i.createElement("div",{className:l()(c.wrapper,c.title)},t.map((function(e,n){return i.createElement("div",{className:l()(c.item,c["title"+n]),key:e.key||e.dataIndex},e.title)})))}),[t]),f=(0,i.useMemo)((function(){return null==n?void 0:n.map((function(e){return i.createElement("div",{key:e.id,className:l()(c.wrapper,c.content)},t.map((function(n,t){var r,o=n.dataIndex,d=n.key;return i.createElement("div",{className:l()(c.item,c["title"+t]),key:d||o},i.createElement("span",{onClick:function(){var n;a&&0===t&&a(e.mid),u&&2===t&&u((null===(n=null==e?void 0:e[o])||void 0===n?void 0:n.mid)||e.albummid)},className:l()((r={},r[c.select]=s===e.mid,r))},m(e,o,t)))})))}))}),[n,t,s]);return i.createElement("div",{className:c.container},d,f)}},7774:(e,n,t)=>{"use strict";t.d(n,{Z:()=>u});var i=t(863),a=t(4403),l=t.n(a);const r="-mn5VKul",c="_1vDXk4To",o="_3uVpiZdS";const u=function(e){var n=e.data,t=e.defaultActiveKey,a=e.activeKey,u=e.onSelect,s=e.onChange,m=e.itemStyle,d=(0,i.useState)(t||n[0].key),f=d[0],v=d[1];(0,i.useEffect)((function(){a&&v(a)}),[a]),(0,i.useEffect)((function(){var e;s&&s(f,null===(e=n.find((function(e){return e.key===f})))||void 0===e?void 0:e.label)}),[f]);var g=(0,i.useMemo)((function(){return n.map((function(e){var n,t=e.label,a=e.key;return i.createElement("div",{key:a,className:l()(c,(n={},n[o]=f===a,n)),style:m},i.createElement("div",{onClick:function(){return function(e,n){u&&u(e,n),v(e)}(a,t)}},t))}))}),[n,f]);return i.createElement("div",{className:r},g)}},5868:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>C});var i=t(863),a=t(5092),l=t(9405),r=t(5907),c=t.n(r),o=t(1732),u=t(6588),s=t(7774),m=t(5669),d=t(3068),f=t(7695),v=t(4109),g=t(6514),p=t(8867);const E="_11MKBmxI",y="_1eRDYfsA";const b=function(e){var n=e.data,t=e.onClick,a=(0,i.useMemo)((function(){return n.map((function(e){var n=e.name,a=e.id,l=e.mid;return i.createElement("div",{className:y,key:a},i.createElement("div",null,i.createElement("img",{src:"http://imgcache.qq.com/music/photo/mid_singer_300/q/K/"+l+".jpg",onClick:function(){return t&&t(l)}})),i.createElement("div",{onClick:function(){return t&&t(l)}},n))}))}),[n]);return i.createElement("div",{className:E},a)};var h=t(5488);const k={container:"O5awP7p1",singerInfo:"_1oy8AUiX",img:"_3b8bdTgJ",right:"_1IQ9LES-",name:"_1C6JlyVA",simpledesc:"Xs1WiCtE",fans:"_1W9VtFjX",singer:"SaI3axGI",title:"_3HlUdQT",left:"_3_NHUQfq",desc:"_2u8MJwYw",content:"_2I6kIvyX"};var _=function(){return(_=Object.assign||function(e){for(var n,t=1,i=arguments.length;t<i;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e}).apply(this,arguments)},N=function(e,n,t,i){return new(t||(t=Promise))((function(a,l){function r(e){try{o(i.next(e))}catch(e){l(e)}}function c(e){try{o(i.throw(e))}catch(e){l(e)}}function o(e){var n;e.done?a(e.value):(n=e.value,n instanceof t?n:new t((function(e){e(n)}))).then(r,c)}o((i=i.apply(e,n||[])).next())}))},w=function(e,n){var t,i,a,l,r={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:c(0),throw:c(1),return:c(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function c(l){return function(c){return function(l){if(t)throw new TypeError("Generator is already executing.");for(;r;)try{if(t=1,i&&(a=2&l[0]?i.return:l[0]?i.throw||((a=i.return)&&a.call(i),0):i.next)&&!(a=a.call(i,l[1])).done)return a;switch(i=0,a&&(l=[2&l[0],a.value]),l[0]){case 0:case 1:a=l;break;case 4:return r.label++,{value:l[1],done:!1};case 5:r.label++,i=l[1],l=[0];continue;case 7:l=r.ops.pop(),r.trys.pop();continue;default:if(!(a=r.trys,(a=a.length>0&&a[a.length-1])||6!==l[0]&&2!==l[0])){r=0;continue}if(3===l[0]&&(!a||l[1]>a[0]&&l[1]<a[3])){r.label=l[1];break}if(6===l[0]&&r.label<a[1]){r.label=a[1],a=l;break}if(a&&r.label<a[2]){r.label=a[2],r.ops.push(l);break}a[2]&&r.ops.pop(),r.trys.pop();continue}l=n.call(e,r)}catch(e){l=[6,e],i=0}finally{t=a=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,c])}}},S=function(){for(var e=0,n=0,t=arguments.length;n<t;n++)e+=arguments[n].length;var i=Array(e),a=0;for(n=0;n<t;n++)for(var l=arguments[n],r=0,c=l.length;r<c;r++,a++)i[a]=l[r];return i};const C=function(e){var n,t=(0,a.k6)(),r=t.location.state,E=(0,i.useState)(null),y=E[0],C=E[1],Z=(0,i.useState)(1),I=Z[0],x=Z[1],M=(0,i.useState)(null),A=M[0],T=M[1],V=(0,i.useState)(null),q=V[0],G=V[1],P=(0,i.useState)(null),j=P[0],K=P[1],X=(0,i.useState)(null),L=X[0],R=X[1],H=(0,i.useState)(!1),D=H[0],F=H[1],O=(0,v.Z)(),Y=O.setPlaylist,B=O.curSong,J=O.setCurSong,Q=(0,g.Z)(),U=Q.bottom,W=Q.setBottom,z=Q.setSingerTab;(0,i.useEffect)((function(){U&&("song"===y&&x((function(e){return $(r,e+1),W(!1),e+1})),"album"===y&&x((function(e){return ne(r,1,10*(e+1)),W(!1),e+1})))}),[U,y]),(0,i.useEffect)((function(){(null===document||void 0===document?void 0:document.getElementById("page")).scrollTop=0,"album"===r.remoteplace&&$(r,I),te(r),C(r.remoteplace)}),[r]),(0,i.useEffect)((function(){if(y){switch(y){case"singer":$(r,1),ee(r),ne(r,1);break;case"song":$(r,1);break;case"album":ne(r,1)}x(1),z(y)}}),[y,r]);var $=function(e,n,t){return void 0===t&&(t=10),N(void 0,void 0,void 0,(function(){var i,a;return w(this,(function(r){switch(r.label){case 0:return i=e.mid,[4,(o={singermid:i,page:n,limit:t},(0,l.Z)({method:"GET",url:"/getSingerHotsong?"+c().stringify(o)}))];case 1:return a=r.sent().data.response.singer.data,T(1===n?a:function(e){return _(_({},e),{songlist:S(e.songlist,a.songlist)})}),[2]}var o}))}))},ee=function(e){return N(void 0,void 0,void 0,(function(){var n,t;return w(this,(function(i){switch(i.label){case 0:return n=e.mid,[4,(a={singermid:n},(0,l.Z)({method:"GET",url:"/getSimilarSinger?"+c().stringify(a)}))];case 1:return t=i.sent().data.response.singers.items,G(t),[2]}var a}))}))},ne=function(e,n,t){return void 0===t&&(t=8),N(void 0,void 0,void 0,(function(){var i,a;return w(this,(function(l){switch(l.label){case 0:return i=e.mid,[4,(0,u.F7)({singermid:i,page:n,limit:t})];case 1:return a=l.sent().data.response.singer.data,K(a),console.log(a),[2]}}))}))},te=function(e){return N(void 0,void 0,void 0,(function(){var n,t,i;return w(this,(function(a){switch(a.label){case 0:return n=e.mid,[4,(r={singermid:n},(0,l.Z)({method:"GET",url:"/getSingerDesc?"+c().stringify(r)}))];case 1:return t=a.sent().data.response,i=(0,h.w8)(t),R(i),[2]}var r}))}))},ie=function(){Y(null==A?void 0:A.songlist),J(null==A?void 0:A.songlist[0].mid)},ae=function(e){return N(void 0,void 0,void 0,(function(){var n,t,i;return w(this,(function(a){switch(a.label){case 0:return n=e.mid,[4,(0,o.$)({albummid:n})];case 1:return t=a.sent().data.response.data,i=_(_({},t),{list:t.list.map((function(e){return _(_({},e),{id:e.songid,name:e.songname,mid:e.songmid})}))}),Y(null==i?void 0:i.list),J(null==i?void 0:i.list[0].mid),[2]}}))}))},le=[{key:"singer",label:"精选"},{key:"song",label:"歌曲"+((null==A?void 0:A.total_song)||0)},{key:"album",label:"专辑"+((null==A?void 0:A.total_album)||0)},{key:"desc",label:"详情"}],re=[{title:"歌曲",dataIndex:"name",key:"name"},{title:"歌手",dataIndex:"singer",key:"singer"},{title:"专辑",dataIndex:"album",key:"album"},{title:"时长",dataIndex:"interval",key:"interval"}];return i.createElement("div",{className:k.container},i.createElement("div",{className:k.singerInfo},A&&!D?i.createElement("img",{className:k.img,src:"http://y.gtimg.cn/music/photo_new/T001R300x300M000"+(null==A?void 0:A.singer_info.mid)+".jpg",onError:function(){return F(!0)}}):i.createElement(d.Z,{className:k.img,type:"icon-headpic"}),i.createElement("div",{className:k.right},i.createElement("div",{className:k.name},(null==A?void 0:A.singer_info.name)||""),i.createElement("div",{className:k.simpledesc},(null==L?void 0:L.slice(1,4).map((function(e,n){return i.createElement("span",{key:n,style:{marginRight:40}},i.createElement("span",null,e[0],"："),i.createElement("span",null,e[1]))})))||""),i.createElement("div",{className:k.fans},"粉丝数："+(0,h.Y4)((null==A?void 0:A.singer_info.fans)||0)))),i.createElement(s.Z,{data:le,itemStyle:{width:100,margin:"10px"},activeKey:y,onChange:function(e){C(e)}}),"singer"===y&&i.createElement("div",{className:k.singer},i.createElement("div",{className:k.title},i.createElement("div",{className:k.left},i.createElement("span",null,"热门歌曲"),i.createElement(f.Z,{icon:"icon-play",type:"default",onClick:function(){return ie()}},"播放全部")),i.createElement(f.Z,{icon:"icon-arrow",type:"more",onClick:function(){return C("song")}},"更多")),i.createElement(m.Z,{data:null==A?void 0:A.songlist,columns:re,onClickSong:function(e){Y(null==A?void 0:A.songlist),J(e)},onClickSinger:function(e){t.push("/Singer",{remoteplace:"singer",mid:e})},onClickAlbum:function(e){t.push("/Album",{remoteplace:"album",mid:e})},currentSongId:B}),i.createElement("div",{className:k.title},i.createElement("span",null,"热门专辑"),i.createElement(f.Z,{icon:"icon-arrow",type:"more",onClick:function(){return C("album")}},"更多")),i.createElement(p.Z,{data:null==j?void 0:j.albumList.slice(0,4).map((function(e){return{cover:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+e.albumMid+".jpg",title:e.albumName,content_id:e.albumMid}})),onPlay:function(e){ae({mid:e})},onView:function(e){t.push("/Album",{remoteplace:"album",mid:e})}}),q&&i.createElement(i.Fragment,null,i.createElement("div",{className:k.title},i.createElement("span",null,"相似歌手")),i.createElement(b,{data:q,onClick:function(e){t.push("/Singer",{remoteplace:"singer",mid:e})}}))),"song"===y&&i.createElement("div",{className:k.song},i.createElement(f.Z,{icon:"icon-play",type:"default",style:{margin:"10px 0 20px 10px"},onClick:function(){return ie()}},"播放全部"),i.createElement(m.Z,{data:null==A?void 0:A.songlist,columns:re,onClickSong:function(e){Y(null==A?void 0:A.songlist),J(e)},onClickSinger:function(e){t.push("/Singer",{remoteplace:"singer",mid:e})},onClickAlbum:function(e){t.push("/Album",{remoteplace:"album",mid:e})},currentSongId:B})),"album"===y&&i.createElement("div",{className:k.album},i.createElement(p.Z,{data:null==j?void 0:j.albumList.map((function(e){return{cover:"https://y.gtimg.cn/music/photo_new/T002R300x300M000"+e.albumMid+".jpg",title:e.albumName,content_id:e.albumMid}})),onPlay:function(e){ae({mid:e})},onView:function(e){t.push("/Album",{remoteplace:"album",mid:e})}})),"desc"===y&&i.createElement("div",{className:k.desc},i.createElement("div",{className:k.content},null==L?void 0:L[0][1]),i.createElement("div",{className:k.title},"基本资料"),null===(n=null==L?void 0:L.slice(1,L.length))||void 0===n?void 0:n.map((function(e,n){return i.createElement("div",{className:k.content,key:n},e[0],"：",e[1])}))))}}}]);