(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,a,n){},16:function(e,a,n){},20:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),i=n(2),o=n.n(i),l=(n(14),n(3)),c=n(4),s=n(6),m=n(5),u=n(7),h=function(e){var a=e.name,n=e.id,t=e.email;return r.a.createElement("div",{className:" tc bg-light-green dib ma2 br3 pa3 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robots",src:"https://robohash.org/".concat(n,"?200*200")}),r.a.createElement("div",null,r.a.createElement("h2",null,a),r.a.createElement("p",null,t)))},d=function(e){var a=e.robot;return r.a.createElement("div",null,a.map(function(e,n){return r.a.createElement(h,{key:n,id:a[n].id,name:a[n].name,email:a[n].email})}))},b=function(e){e.searchfield;var a=e.searchChange;return r.a.createElement("div",{className:"pd2"},r.a.createElement("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"search robots",onChange:a}))},f=(n(16),function(e){return r.a.createElement("div",{style:{overflow:"scroll",border:"1px solid black",height:"600px"}},e.children)}),p=[{id:1,name:"Leanne Graham",username:"Bret",email:"Sincere@april.biz"},{id:2,name:"Ervin Howell",username:"Antonette",email:"Shanna@melissa.tv"},{id:3,name:"Clementine Bauch",username:"Samantha",email:"Nathan@yesenia.net"},{id:4,name:"Patricia Lebsack",username:"Karianne",email:"Julianne.OConner@kory.org"},{id:5,name:"Chelsey Dietrich",username:"Kamren",email:"Lucio_Hettinger@annie.ca"},{id:6,name:"Mrs. Dennis Schulist",username:"Leopoldo_Corkery",email:"Karley_Dach@jasper.info"},{id:7,name:"Kurtis Weissnat",username:"Elwyn.Skiles",email:"Telly.Hoeger@billy.biz"},{id:8,name:"Nicholas Runolfsdottir V",username:"Maxime_Nienow",email:"Sherwood@rosamond.me"},{id:9,name:"Glenna Reichert",username:"Delphine",email:"Chaim_McDermott@dana.io"},{id:10,name:"Clementina DuBuque",username:"Moriah.Stanton",email:"Rey.Padberg@karina.biz"}],g=function(e){function a(){var e;return Object(l.a)(this,a),(e=Object(s.a)(this,Object(m.a)(a).call(this))).onSearchChange=function(a){e.setState({searchfield:a.target.value})},e.state={robot:[],searchfield:""},e}return Object(u.a)(a,e),Object(c.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then(function(e){return e.json()}).then(function(a){return e.setState({robot:p})})}},{key:"render",value:function(){var e=this,a=this.state.robot.filter(function(a){return a.name.toLowerCase().includes(e.state.searchfield.toLowerCase())});return r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robo Friends "),r.a.createElement(b,{searchChange:this.onSearchChange}),r.a.createElement(f,null,r.a.createElement(d,{robot:a})))}}]),a}(t.Component);n(18),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e,a,n){e.exports=n(20)}},[[8,2,1]]]);
//# sourceMappingURL=main.28615ab4.chunk.js.map