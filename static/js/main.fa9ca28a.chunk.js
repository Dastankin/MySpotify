(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/tumblr.4e401db1.gif"},function(e,t,a){e.exports=a.p+"static/media/cover-small.17eb45df.jpeg"},,,function(e,t,a){e.exports=a(37)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/test.4a8ede3e.jpg"},function(e,t,a){},,function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),s=a(15),l=a.n(s),r=(a(26),a(2)),o=a(3),i=a(6),m=a(4),u=a(5),h=a(8),d=(a(27),a(39)),p=a(40),f=(a(28),a(38)),b=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={albums:[]},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getLibraryData",value:function(){var e=this;fetch("https://hailduong.github.io/lyduong/react-assignment/spotify-2/apis/yourLibrary.json").then(function(e){return e.json()}).then(function(t){e.setState({albums:t})}).catch(function(e){return console.log(e)})}},{key:"componentDidMount",value:function(){this.getLibraryData()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"category-content"},c.a.createElement("div",{className:"title"},"Album"),c.a.createElement("div",{className:"row"},this.state.albums.map(function(t,a){return c.a.createElement("div",{className:"col-xl-2 col-md-2 col-lg-2",key:a},c.a.createElement(f.a,{to:"/album/"+(a+1)},c.a.createElement("div",{onClick:function(){return e.props.action(t)},className:"list-album "},c.a.createElement("div",{className:"img-hover-container"},c.a.createElement("img",{src:t.cover,alt:"",className:"image"}),c.a.createElement("div",{className:"middle"},c.a.createElement("div",{className:"text"},c.a.createElement("i",{className:"far fa-play-circle"})))),c.a.createElement("div",{className:"album-name"},t.album),c.a.createElement("div",{className:"album-artist"},c.a.createElement("span",null,"Huong Thanh")))))})))}}]),t}(n.Component),v=a(16),g=a.n(v),y=(a(31),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"home-content"},c.a.createElement("div",{className:"home-title"}," Welcome to Spotify"),c.a.createElement("div",{className:"gif"},c.a.createElement("img",{src:g.a})))}}]),t}(n.Component)),E=(a(32),function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={value:"",tracks:"",albums:"",artists:"",activeTrack:"",token:"",isloaded:!1},a.handleChange=a.handleChange.bind(Object(h.a)(Object(h.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(h.a)(Object(h.a)(a))),a.handleClick=a.handleClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"handleClick",value:function(e){this.props.action(e)}},{key:"handleSubmit",value:function(e){var t=this,a=this.props.access_token,n="https://api.spotify.com/v1/search?q=".concat(this.state.value,"&type=track,artist&limit=10");fetch(n,{headers:{Accept:"application/json","Content-Type":"application/json",Authorization:"Bearer ".concat(a)}}).then(function(e){return e.json()}).then(function(e){e.tracks.items.map(function(e){e.duration_ms=t.changeTime(e.duration_ms)}),console.log(e),t.setState({artists:e.artists.items,isloaded:!0,tracks:e.tracks.items,playlists:e.playlists.items})}).catch(function(e){window.location.replace("https://accounts.spotify.com/authorize?client_id=e2a42674970c41b6b7b24c6144da9d1d&response_type=token&Foauth_callback%2F&scope=streaming user-read-playback-state user-read-currently-playing user-modify-playback-state&redirect_uri=https:%2F%2Fdastankin.github.io%2FMySpotify"),console.log("error",e)}),e.preventDefault()}},{key:"handleChange",value:function(e){this.setState({value:e.target.value})}},{key:"changeTime",value:function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a}},{key:"render",value:function(){return console.log(this.state.artists),console.log(this.state.album),console.log(this.state.tracks),console.log(this.state.playlists),c.a.createElement("div",{className:"page-content"},c.a.createElement("form",{className:"search",onSubmit:this.handleSubmit},c.a.createElement("input",{className:"form-control search-content",type:"text",placeholder:"Start Typing.....","aria-label":"Search",value:this.state.value,onChange:this.handleChange,autoFocus:!0})))}}]),t}(n.Component)),k=(a(33),function(e){return c.a.createElement("div",{className:"leftmenu-content2"},e.recentPlay.recentlyPlayed.map(function(e,t){return c.a.createElement("div",{className:"recent-list",key:t},c.a.createElement("div",{className:"list-name"},e.name),c.a.createElement("div",null,e.type))}))}),N=(a(14),a(34),function(e){return c.a.createElement("div",{className:e.className},c.a.createElement("div",{className:"icon "},c.a.createElement("i",{className:"fas fa-music"})),c.a.createElement("div",{className:"song-name "},e.newTrack.title),c.a.createElement("div",{className:"song-time col-xl-2 col-lg-2 col-md-2"},e.newTrack.legnth))}),j=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).componentDidMount=function(){if(""===a.props.chooseTrack){fetch("https://raw.githubusercontent.com/hailduong/lyduong/master/react-assignment/spotify-2/apis/yourLibrary.json").then(function(e){return e.json()}).then(function(e){a.setState({album:e[a.props.id-1]})}).catch(function(e){return console.log("error",e)})}var e="https://hailduong.github.io/lyduong/react-assignment/spotify-2/apis/album/".concat(a.props.id,".json");fetch(e).then(function(e){return e.json()}).then(function(e){console.log(e),e.tracks.map(function(e){e.length=a.changeTime(e.length)}),a.setState({tracks:e.tracks,listrack:e,isLoad:!0})}).catch(function(e){return console.log("error",e)})},a.state={tracks:[],playing:0,albumID:a.props.id,album:"",listTracks:"",isLoad:!1},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log(e),""!==e.chooseTrack&&this.setState({playing:e.chooseTrack.album.playing}),!0===e.inputVal?this.setState({playing:0}):!0===e.inputVal&&this.setState({playing:""})}},{key:"checkSong",value:function(e){var t=this;this.setState({playing:e},function(){var e={album:t.props.chooseTrack.album.album,playing:t.state.playing,tracks:t.props.chooseTrack.album.tracks};console.log(e),t.props.update(e)})}},{key:"changeTime",value:function(e){var t=Math.floor(e/6e4),a=(e%6e4/1e3).toFixed(0);return t+":"+(a<10?"0":"")+a}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"list-content"},this.state.tracks.map(function(t,a){var n=e.state.playing===a?"active":"";return c.a.createElement("div",{className:"list-music",onClick:function(){return e.checkSong(t,a)}},c.a.createElement(N,{newTrack:t,className:n}))}))}}]),t}(n.Component),O=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this))).componentWillMount=function(){var e="https://hailduong.github.io/lyduong/react-assignment/spotify-2/apis/album/".concat(a.props.id,".json");fetch(e).then(function(e){return e.json()}).then(function(e){a.setState({name:e.name,artis:e.artis,cover:e.covers.large,year:e.year,track:e.tracks.length})},function(){return console.log(a.state)}).catch(function(e){return console.log("error",e)})},a.toogleShow=function(){!0===a.state.show?(a.setState(function(e){return{show:!1}}),a.props.action(!0)):!1===a.state.show&&(a.setState(function(e){return{show:!0}}),a.props.action(!1))},a.state={name:"",artis:"",cover:"",year:"",track:[],show:!0},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",null,c.a.createElement("div",{className:"img-header"},c.a.createElement("img",{src:this.state.cover,className:"img-header"})),c.a.createElement("div",{className:"song-content"},c.a.createElement("div",{className:"song-content-header"},c.a.createElement("div",{className:"title"},c.a.createElement("span",null,this.state.name)),c.a.createElement("div",{className:"singer"},this.state.artist)),c.a.createElement("div",{className:"song-content-body"},this.state.show?c.a.createElement("button",{type:"button",className:"playBtn",onClick:this.toogleShow},"Play"):"",this.state.show?"":c.a.createElement("button",{type:"button",className:"playBtn",onClick:this.toogleShow},"Pause"),c.a.createElement("br",null),c.a.createElement("span",null,this.state.year," . ",this.state.track)),c.a.createElement("br",null),c.a.createElement("div",{className:"more"},c.a.createElement("button",{type:"button",className:"btn btn-link"},"Remove from library"),c.a.createElement("i",{className:"fas fa-ellipsis-h"}))))}}]),t}(n.Component),w=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={isPlay:"",choosenTrack:""},a.playStop=a.playStop.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"componentWillReceiveProps",value:function(e){this.setState({choosenTrack:e.inputVal,isPlay:""})}},{key:"playStop",value:function(e){var t=this;!0===e?this.setState({isPlay:e},function(){return console.log(t.state)}):!1===e&&this.setState({isPlay:e},function(){return console.log(t.state)})}},{key:"render",value:function(){return c.a.createElement("div",{className:"content"},c.a.createElement("div",{className:"right-side"},c.a.createElement("div",{className:" left-list col-md-4 col-lg-4 col-xl-4"},c.a.createElement(O,{id:this.props.match.params.id,action:this.playStop})),c.a.createElement("div",{className:"right-content col-md-7 col-lg-7 col-xl-7"},c.a.createElement(j,{id:this.props.match.params.id,chooseTrack:this.state.choosenTrack,inputVal:this.state.isPlay,update:this.props.update}))))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={green:!0,user:{playing:[],recentlyPlayed:[],recentlyPlayedType:[]}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getUserData",value:function(){var e=this;fetch("https://hailduong.github.io/lyduong/react-assignment/spotify/apis/userInfo.json").then(function(e){return e.json()}).then(function(t){t.recentlyPlayed.map(function(e,t){"1"===e.type?e.type="Album":"2"===e.type&&(e.type="PlayList")}),e.setState({user:t})}).catch(function(e){return console.log(e)})}},{key:"componentWillMount",value:function(){this.getUserData()}},{key:"render",value:function(){return c.a.createElement("div",{className:"left-content"},c.a.createElement("div",null,c.a.createElement("div",{className:"left-title"},c.a.createElement("span",null,c.a.createElement("i",{className:"fab fa-spotify"},"Spotify"))),c.a.createElement("div",{className:"col-lg-12 col-md-12"},c.a.createElement("ul",{className:"leftmenu"},c.a.createElement("li",null,c.a.createElement(f.a,{to:"/"}," ",c.a.createElement("i",{className:"fas fa-home"},"Home"))),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/search"}," ",c.a.createElement("i",{className:"fa fa-search","aria-hidden":"true"},"Search"))),c.a.createElement("li",null,c.a.createElement(f.a,{to:"/library"},c.a.createElement("i",{className:"fa fa-book","aria-hidden":"true"},"Your Library")))),c.a.createElement("span",null,"Recent Played"),c.a.createElement(k,{recentPlay:this.state.user}),c.a.createElement("footer",null,c.a.createElement("div",{className:"left-content-footer"},c.a.createElement("i",{className:"far fa-arrow-alt-circle-down"}," Install App"),c.a.createElement("hr",null),c.a.createElement("img",{src:this.state.user.avatar,className:"avatar"}),c.a.createElement("span",null,this.state.user.name))))))}}]),t}(n.Component),T=(a(35),a(17)),C=a.n(T),P=function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return c.a.createElement("div",{className:"footer-content"},c.a.createElement("div",{className:"left-footer col-lg-4 col-md-4"},c.a.createElement("div",{className:"logo-img"},c.a.createElement("img",{src:C.a,className:"small-logo"})),c.a.createElement("div",{className:"title-music"},c.a.createElement("div",null,"Moon And Wind"),c.a.createElement("span",null,"Huong Thanh")),c.a.createElement("div",{className:"status"},c.a.createElement("i",{className:"fas fa-check"}))),c.a.createElement("div",{className:"middle-content col-lg-4 col-md-4"},c.a.createElement("div",{className:"button-play"},c.a.createElement("div",{className:"button-random"},c.a.createElement("i",{className:"fas fa-random"})),c.a.createElement("div",{className:"button-step-backward"},c.a.createElement("i",{className:"fas fa-step-backward"})),c.a.createElement("div",{className:"button-play-circle"},c.a.createElement("i",{className:"far fa-play-circle"})),c.a.createElement("div",{className:"button-forward"},c.a.createElement("i",{className:"fas fa-step-forward"})),c.a.createElement("div",{className:"button-redo"},c.a.createElement("i",{className:"fas fa-redo"}))),c.a.createElement("div",{className:"progress"},c.a.createElement("div",{className:"progress-bar w-75",role:"progressbar","aria-valuenow":"75","aria-valuemin":"0","aria-valuemax":"100"}))),c.a.createElement("div",{className:"right-footer col-lg-4 col-md-4"},c.a.createElement("div",{className:"button-play"},c.a.createElement("div",{className:"button-layer"},c.a.createElement("i",{className:"fas fa-layer-group"})),c.a.createElement("div",{className:"button-server"},c.a.createElement("i",{className:"fas fa-server"})),c.a.createElement("div",{className:"button-volume"},c.a.createElement("i",{className:"fas fa-volume-up"})))))}}]),t}(n.Component),x=a(18),A=new(a.n(x).a),_=function(e){function t(e){var a;Object(r.a)(this,t);var n=(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).getHashParams().access_token;return n?(A.setAccessToken(n),a.state={album:"",token:n,isPlay:""}):a.state={album:"",token:"",isPlay:""},a.getAlbum=a.getAlbum.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"getHashParams",value:function(){var e,t={},a=/([^&;=]+)=?([^&;]*)/g,n=window.location.hash.substring(1);for(e=a.exec(n);e;)t[e[1]]=decodeURIComponent(e[2]),e=a.exec(n);return t}},{key:"getAlbum",value:function(e){this.setState({album:e})}},{key:"render",value:function(){var e=this;return c.a.createElement(d.a,null,c.a.createElement("div",{className:"row"},c.a.createElement(S,null),c.a.createElement("div",{className:"right-content"},c.a.createElement(p.a,{exact:!0,path:"/",component:y}),c.a.createElement(p.a,{path:"/search",render:function(){return c.a.createElement(E,{access_token:e.state.token})}}),c.a.createElement(p.a,{path:"/library",component:b,access_token:this.state.token,action:this.getAlbum}),c.a.createElement(p.a,{path:"/album/:id",render:function(t){return c.a.createElement(w,Object.assign({},t,{update:e.getAlbum,access_token:e.state.token}))}})),c.a.createElement(P,{inputVal:this.state.isPlay})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(c.a.createElement(_,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[20,1,2]]]);
//# sourceMappingURL=main.fa9ca28a.chunk.js.map