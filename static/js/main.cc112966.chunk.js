(this["webpackJsonpe-commerce"]=this["webpackJsonpe-commerce"]||[]).push([[0],{36:function(e,t,a){e.exports=a(67)},41:function(e,t,a){},42:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},43:function(e,t,a){},67:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),r=a(31),i=a.n(r),l=(a(41),a(33)),s=a(2),o=(a(42),a(43),a(35)),m=a(12),u=a(13),d=a(15),p=a(14),E=a(8),f=a(9),h=a(32),v=a.n(h),b=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(m.a)(this,a),(e=t.call(this)).routeCart=function(){e.props.history.push({pathname:"/cart",state:{cart:e.state.cart,total:e.state.total,discTot:e.state.discTot,disPrice:e.state.disPrice}})},e.ascSort=function(){var t=e.state.data;e.state.sortData=t.sort((function(e,t){return Number(e.price.actual)-Number(t.price.actual)})),e.setState({data:e.state.sortData})},e.descSort=function(){var t=e.state.data;e.state.sortData=t.sort((function(e,t){return Number(t.price.actual)-Number(e.price.actual)})),e.setState({data:e.state.sortData})},e.state={data:[],sortData:[],cart:[],total:0,discTot:0,disPrice:0},e}return Object(u.a)(a,[{key:"addToCart",value:function(e){var t=this,a=this.state.data.find((function(t){return t.id===e}));this.state.cart.find((function(t){return t.id===e}))?(a.quantity+=1,a.disPrice+=a.price.actual+a.price.display,this.setState({total:this.state.total+a.price.actual,discTot:this.state.discTot+a.price.display,disPrice:a.disPrice},console.log(this.state.disPrice,"homeexist"))):(a.quantity=1,a.disPrice=a.price.actual+a.price.display,this.setState({cart:[].concat(Object(o.a)(this.state.cart),[a]),total:this.state.total+a.price.actual,discTot:this.state.discTot+a.price.display,disPrice:a.disPrice},(function(){return console.log(t.state.disPrice,"homenew")})))}},{key:"componentDidMount",value:function(){var e=this;v.a.get("https://my-json-server.typicode.com/prograk/demo/items").then((function(t){e.setState({data:t.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{class:"navbar navbar-dark"},n.a.createElement("a",{class:"navbar-brand",href:"#"},n.a.createElement(E.a,{icon:f.c,color:"gold"})),n.a.createElement("div",{className:"icons"},n.a.createElement(E.a,{icon:f.a,color:"white",size:"2x"}),n.a.createElement(E.a,{icon:f.b,color:"white",size:"2x",cursor:"pointer",onClick:this.routeCart}))),n.a.createElement("div",{className:"content-wrapper"},n.a.createElement("div",{className:"conatiner"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-4 col-md-2"},n.a.createElement("aside",{id:"page_sidebar"},n.a.createElement("section",{class:"menu-section"},n.a.createElement("div",{className:"ml-2 mt-2 d-flex justify-content-start"},n.a.createElement("span",null,"Filters")),n.a.createElement("ul",{className:"ml-2 pl-0 d-flex justify-content-between mt-3"},n.a.createElement("li",null,n.a.createElement("span",{className:"bubble m-2"})),n.a.createElement("li",null,n.a.createElement("span",{className:"bubble m-2"}))),n.a.createElement("p",null,"price"),n.a.createElement("button",{className:"btn btn-primary"},"Apply")))),n.a.createElement("div",{className:"col-8 col-md-10 px-0"},n.a.createElement("ul",{className:"item-filters"},n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Sort By")),n.a.createElement("li",null,n.a.createElement("a",{href:"#",onClick:this.ascSort},"Price --High Low")),n.a.createElement("li",null,n.a.createElement("a",{href:"#",onClick:this.descSort},"Price --Low High")),n.a.createElement("li",null,n.a.createElement("a",{href:"#"},"Discount"))),n.a.createElement("div",{className:"items-list"},this.state.data.map((function(t){return n.a.createElement("div",{key:t.id,className:"item"},n.a.createElement("img",{src:t.image}),n.a.createElement("p",null,t.name),n.a.createElement("div",{className:"d-flex justify-content-between"},n.a.createElement("p",null,t.price.actual,n.a.createElement("span",null,n.a.createElement("strike",null,t.price.display))),n.a.createElement("p",null,t.discount,"% off")),n.a.createElement("button",{className:"btn",onClick:function(){return e.addToCart(t.id)}},"Add to Cart"))}))))))))}}]),a}(c.Component),y=function(e){Object(d.a)(a,e);var t=Object(p.a)(a);function a(e){var c;return Object(m.a)(this,a),(c=t.call(this,e)).removeItem=function(e){var t=c.state.cart.find((function(t){return e===t.id})),a=c.state.cart.filter((function(t){return e!==t.id})),n=c.state.total-t.price.actual*t.quantity,r=c.state.discTot-t.price.display*t.quantity,i=t.price.actual+t.price.display,l=c.state.disPrice-i*t.quantity;console.log(t),c.setState({cart:a,total:n,discTot:r,disPrice:l})},c.plusItem=function(e){var t=c.state.cart.find((function(t){return t.id===e}));t.quantity+=1,t.disPrice+=t.price.actual+t.price.display,c.setState({total:c.state.total+t.price.actual,discTot:c.state.discTot+t.price.display,disPrice:t.disPrice},console.log(c.state.disPrice,"cartplus"))},c.minusItem=function(e){var t=c.state.cart.find((function(t){return t.id===e}));if(1===t.quantity){var a=c.state.cart.filter((function(t){return t.id!==e})),n=c.state.total-t.price.actual,r=c.state.discTot-t.price.display;t.disPrice-=t.price.actual+t.price.display,c.setState({cart:a,total:n,discTot:r,disPrice:t.disPrice},console.log(c.state.disPrice,"cartminus=1"))}else{t.quantity-=1;var i=c.state.total-t.price.actual,l=c.state.discTot-t.price.display;t.disPrice-=t.price.actual+t.price.display,c.setState({total:i,discTot:l,disPrice:t.disPrice},console.log(c.state.disPrice,"cartminus>1"))}},c.state={cart:c.props.location.state.cart,total:c.props.location.state.total,discTot:c.props.location.state.discTot,disPrice:c.props.location.state.disPrice},c}return Object(u.a)(a,[{key:"render",value:function(){var e=this,t=this.state,a=t.cart,c=t.total,r=t.discTot,i=t.disPrice;return n.a.createElement(n.a.Fragment,null,n.a.createElement("nav",{class:"navbar navbar-dark"},n.a.createElement("a",{class:"navbar-brand",href:"#"},n.a.createElement(E.a,{icon:f.c,color:"gold"})),n.a.createElement("div",{className:"icons"},n.a.createElement(E.a,{icon:f.a,color:"white",size:"2x"}),n.a.createElement(E.a,{icon:f.b,color:"white",size:"2x"}))),n.a.createElement("div",{className:"container-fluid"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-9 p-0"},a.map((function(t){return n.a.createElement("div",{className:"item-block d-flex justify-content-between",key:t.id},n.a.createElement("div",{className:"product-details"},n.a.createElement("img",{src:t.image}),n.a.createElement("div",{className:"mt-4"},n.a.createElement("p",{className:"brand"},t.name),n.a.createElement("div",{className:"prices d-flex"},n.a.createElement("p",null,t.price.actual),n.a.createElement("p",null,n.a.createElement("strike",null,t.price.display),n.a.createElement("span",null,t.discount,"% off"))))),n.a.createElement("div",{className:"prod-quan mt-4"},n.a.createElement("ul",null,n.a.createElement("li",null,n.a.createElement("a",{href:"#",onClick:function(){e.minusItem(t.id)}},"\xa0-\xa0")),n.a.createElement("li",null,t.quantity),n.a.createElement("li",null,n.a.createElement("a",{href:"#",onClick:function(){e.plusItem(t.id)}},"\xa0+\xa0")," "))),n.a.createElement("div",{className:"remove-btn mt-5 font-weight-bold"},n.a.createElement("a",{href:"#",onClick:function(){return e.removeItem(t.id)}},"Remove")))}))),n.a.createElement("div",{className:"col-3 tot-checq mt-3 p-0"},n.a.createElement("p",null,"Price details"),n.a.createElement("p",null,"price(",a.length," item):$",n.a.createElement("span",null,i)),n.a.createElement("p",null,"Discount :$",n.a.createElement("span",null,r)),n.a.createElement("p",null,"Total Payable:$",n.a.createElement("span",null,c))))))}}]),a}(c.Component);var N=function(){return n.a.createElement("div",{className:"App"},n.a.createElement(l.a,null,n.a.createElement(s.c,null,n.a.createElement(s.a,{exact:!0,path:"/",component:b}),n.a.createElement(s.a,{exact:!0,path:"/cart",component:y}))))};a(66),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(N,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.cc112966.chunk.js.map