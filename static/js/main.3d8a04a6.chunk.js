(this.webpackJsonpsustainability=this.webpackJsonpsustainability||[]).push([[0],{19:function(e,t,a){},20:function(e,t,a){},22:function(e,t,a){"use strict";a.r(t);var s=a(0),n=a(1),c=a.n(n),i=a(9),o=a.n(i),l=(a(19),a(20),a(5)),r=a(6),d=a(8),u=a(7),m=a.p+"static/media/logo.1ae1fdaf.png",h=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(r.a)(a,[{key:"render",value:function(){return Object(s.jsxs)("div",{className:"nav-bar-container",children:[Object(s.jsx)("img",{src:m,className:"logo",alt:""}),Object(s.jsx)("div",{className:"nav-bar-title",children:"walk this way"})]})}}]),a}(c.a.Component),b=(c.a.Component,a(10)),j=a(3),g=a(4),O="AIzaSyBP0bWd33VGTseJsiMoTxTXTcw8vyRx04k",v=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).autocomplete=null,s.onLoad=s.onLoad.bind(Object(j.a)(s)),s}return Object(r.a)(a,[{key:"onLoad",value:function(e){console.log("autocomplete: ",e),this.autocomplete=e}},{key:"render",value:function(){var e=this.props,t=e.origin,a=e.destination,n=e.directions,c=0===Object.keys(this.props.origin).length?{lat:40.7309,lng:-73.9973}:this.props.origin;return Object(s.jsx)(g.d,{googleMapsApiKey:O,libraries:["places"],children:Object(s.jsxs)(g.c,{mapContainerStyle:{width:"45vw",height:"81vh",borderRadius:"40px"},center:c,zoom:15,onLoad:this.onLoad,children:[Object(s.jsx)(g.e,{position:t}),Object(s.jsx)(g.e,{position:a}),Object(s.jsx)(g.b,{directions:n})]})})}}]),a}(c.a.Component),N=c.a.memo(v),p=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).handleClickforCancel=s.handleClickforCancel.bind(Object(j.a)(s)),s.funFacts=s.funFacts.bind(Object(j.a)(s)),s}return Object(r.a)(a,[{key:"handleClickforCancel",value:function(){for(var e=document.getElementsByClassName("modal-outer-container"),t=0;t<e.length;t++)e[t].style.display="none"}},{key:"daysIntoYear",value:function(e){return(Date.UTC(e.getFullYear(),e.getMonth(),e.getDate())-Date.UTC(e.getFullYear(),0,0))/24/60/60/1e3}},{key:"funFacts",value:function(){var e,t=this.props,a=t.carNum,n=t.transitNum,c=new Date,i=this.daysIntoYear(c),o=a*i/1e6,l=n*i/1e6;return o&&l<5?e=Object(s.jsx)("p",{children:"great job staying local!"}):o&&l<10?e=Object(s.jsx)("p",{children:"wow! better than I expected from you!"}):o&&l<15?e=Object(s.jsx)("p",{children:"you can do better"}):o&&l<20?e=Object(s.jsx)("p",{children:"yo stop"}):o&&l<25?e=Object(s.jsx)("p",{children:"bro please"}):o&&l>25&&(e=Object(s.jsx)("p",{children:"what would Al Gore say?"})),Object(s.jsxs)("div",{className:"fun-facts",children:["The average person emits 27 tons of carbon dioxide a year.",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),"If you followed this path every day, you would emit ",o," tons just by driving this route,",Object(s.jsx)("br",{}),"or",Object(s.jsx)("br",{}),l," tons just by taking public transit!",Object(s.jsx)("br",{}),e]})}},{key:"render",value:function(){var e=this.props,t=e.carNum,a=e.transitNum,n=new Date,c=this.daysIntoYear(n),i=t*c,o=a*c;return Object(s.jsx)("div",{className:"modal-outer-container",children:Object(s.jsxs)("div",{className:"modal-container",children:[Object(s.jsx)("div",{className:"x-icon",children:Object(s.jsx)("button",{className:"x-icon-style",onClick:this.handleClickforCancel,children:"X"})}),Object(s.jsxs)("div",{className:"results-container",children:[Object(s.jsx)("div",{className:"results-subheader",children:"results"}),Object(s.jsxs)("div",{className:"outer-results",children:["Driving:",Object(s.jsx)("div",{className:"car-results",children:this.props.carNum}),Object(s.jsx)("div",{className:"carbon-dioxide",children:"grams of CO"})]}),Object(s.jsxs)("div",{className:"outer-results",children:["Transit:",Object(s.jsx)("div",{className:"transit-results",children:this.props.transitNum}),Object(s.jsx)("div",{className:"carbon-dioxide",children:"grams of CO\u2082"})]}),Object(s.jsxs)("div",{className:"outer-results",children:["Walking:",Object(s.jsx)("div",{className:"walk-results",children:this.props.walkNum}),Object(s.jsx)("div",{className:"carbon-dioxide",children:"grams of CO\u2082"})]}),Object(s.jsxs)("div",{className:"outer-results",children:["Biking:",Object(s.jsx)("div",{className:"bike-results",children:this.props.bikeNum}),Object(s.jsx)("div",{className:"carbon-dioxide",children:"grams of CO\u2082"})]}),Object(s.jsxs)("div",{className:"your-sins",children:["If you made this trip every day, you would have emitted",Object(s.jsx)("br",{}),Object(s.jsx)("br",{}),i," grams of CO\u2082 since January 1st by driving!",Object(s.jsx)("br",{}),"-or-",Object(s.jsx)("br",{}),o," grams of CO\u2082 since January 1st by taking public transit!"]}),Object(s.jsx)("br",{}),Object(s.jsx)("hr",{}),this.funFacts()]})]})})}}]),a}(c.a.Component),y=a.p+"static/media/bicycle.ee8e5962.png",k=a.p+"static/media/car.319bfebf.png",x=a.p+"static/media/transit.05ff19a8.png",f=a(11),C=a.n(f);C.a.setApiKey(O);var F=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var s;return Object(l.a)(this,a),(s=t.call(this,e)).state={response:null,travelMode:"WALKING",buttonMode:"WALK",origin:{},destination:{},searched:!1,directions:null,carNum:"",transitNum:"",bikeNum:0,walkNum:0,test:!1},s.getOrigin=s.getOrigin.bind(Object(j.a)(s)),s.getDestination=s.getDestination.bind(Object(j.a)(s)),s.onClick=s.onClick.bind(Object(j.a)(s)),s.handleCarModeClick=s.handleCarModeClick.bind(Object(j.a)(s)),s.handleWalkModeClick=s.handleWalkModeClick.bind(Object(j.a)(s)),s.handleBikeModeClick=s.handleBikeModeClick.bind(Object(j.a)(s)),s.handleTransitModeClick=s.handleTransitModeClick.bind(Object(j.a)(s)),s.toggleModal=s.toggleModal.bind(Object(j.a)(s)),s}return Object(r.a)(a,[{key:"toggleModal",value:function(){for(var e=document.getElementsByClassName("modal-outer-container"),t=0;t<e.length;t++)e[t].style.display="block"}},{key:"handleCarModeClick",value:function(){for(var e=document.getElementsByClassName("car-image"),t=0;t<e.length;t++)e[t].style.backgroundColor="#FFF201";for(var a=document.getElementsByClassName("bicycle-image"),s=0;s<a.length;s++)a[s].style.backgroundColor="#FFFFFF";for(var n=document.getElementsByClassName("transit-image"),c=0;c<n.length;c++)n[c].style.backgroundColor="#FFFFFF";for(var i=document.getElementsByClassName("walk-image"),o=0;o<i.length;o++)i[o].style.backgroundColor="#FFFFFF";this.setState((function(){return{buttonMode:"DRIVE"}}))}},{key:"handleWalkModeClick",value:function(){for(var e=document.getElementsByClassName("walk-image"),t=0;t<e.length;t++)e[t].style.backgroundColor="#FFF201";for(var a=document.getElementsByClassName("car-image"),s=0;s<a.length;s++)a[s].style.backgroundColor="#FFFFFF";for(var n=document.getElementsByClassName("bicycle-image"),c=0;c<n.length;c++)n[c].style.backgroundColor="#FFFFFF";for(var i=document.getElementsByClassName("transit-image"),o=0;o<i.length;o++)i[o].style.backgroundColor="#FFFFFF";this.setState((function(){return{buttonMode:"WALK"}}))}},{key:"handleBikeModeClick",value:function(){for(var e=document.getElementsByClassName("bicycle-image"),t=0;t<e.length;t++)e[t].style.backgroundColor="#FFF201";for(var a=document.getElementsByClassName("transit-image"),s=0;s<a.length;s++)a[s].style.backgroundColor="#FFFFFF";for(var n=document.getElementsByClassName("walk-image"),c=0;c<n.length;c++)n[c].style.backgroundColor="#FFFFFF";for(var i=document.getElementsByClassName("car-image"),o=0;o<i.length;o++)i[o].style.backgroundColor="#FFFFFF";this.setState((function(){return{buttonMode:"BIKE"}}))}},{key:"handleTransitModeClick",value:function(){for(var e=document.getElementsByClassName("transit-image"),t=0;t<e.length;t++)e[t].style.background="#FFF201";for(var a=document.getElementsByClassName("walk-image"),s=0;s<a.length;s++)a[s].style.background="#FFFFFF";for(var n=document.getElementsByClassName("car-image"),c=0;c<n.length;c++)n[c].style.background="#FFFFFF";for(var i=document.getElementsByClassName("bicycle-image"),o=0;o<i.length;o++)i[o].style.background="#FFFFFF";this.setState((function(){return{buttonMode:"TRANSIT"}}))}},{key:"getOrigin",value:function(e){this.origin=e}},{key:"getDestination",value:function(e){this.destination=e}},{key:"onClick",value:function(){var e=this,t=window.google,a=new t.maps.DirectionsService;""!==this.origin.value&&""!==this.destination.value&&(C.a.fromAddress(this.origin.value).then((function(t){var a=t.results[0].geometry.location,s=a.lat,n=a.lng;e.setState({origin:{lat:s,lng:n}})}),(function(e){console.error(e)})),C.a.fromAddress(this.destination.value).then((function(t){var a=t.results[0].geometry.location,s=a.lat,n=a.lng;e.setState({destination:{lat:s,lng:n}})}),(function(e){console.error(e)})).then((function(){var s=e.state,n=s.travelMode,c=s.origin,i=s.destination;a.route({origin:new t.maps.LatLng([c.lat],[c.lng]),destination:new t.maps.LatLng([i.lat],[i.lng]),travelMode:t.maps.TravelMode[n]},(function(a,s){s===t.maps.DirectionsStatus.OK?e.setState({directions:a}):console.error("error fetching directions ".concat(a))}))})).then((function(){null!==e.state.directions&&e.calculateCarbon(e.state.directions.routes[0].legs[0].distance.text),e.setState({searched:!0}),e.toggleModal()})))}},{key:"sendModal",value:function(){var e=this.state,t=e.carNum,a=e.transitNum,n=e.bikeNum,c=e.walkNum;return Object(s.jsx)(p,{travelMode:this.state.travelMode,toggleModal:this.toggleModal,show:this.state.isOpen,distance:this.state.directions,carNum:t,transitNum:a,bikeNum:n,walkNum:c})}},{key:"calculateCarbon",value:function(e){var t=parseFloat(e),a=Math.ceil(808*t),s=Math.ceil(408*t);this.setState({carNum:a,transitNum:s,bikeNum:0,walkNum:0,test:!0})}},{key:"render",value:function(){var e,t,a=this.state,n=a.origin,c=a.destination,i=a.directions,o=a.searched,l=a.travelMode;return Object(s.jsxs)("div",{className:"sidebar-container",children:[Object(s.jsxs)("div",{className:"left-sidebar",children:[Object(s.jsx)(h,{}),Object(s.jsx)("div",{className:"call-to-action",children:"Check your Carbon Footprint"}),Object(s.jsx)("div",{className:"subheader",children:"directions"}),Object(s.jsxs)("div",{className:"map-settings",children:[Object(s.jsxs)("div",{className:"col-md-6 col-lg-4",children:[Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)("div",{className:"row",children:Object(s.jsx)(g.d,{googleMapsApiKey:O,libraries:["places"],children:Object(s.jsx)(g.a,{onLoad:this.onLoad,onPlaceChanged:this.onPlaceChanged,children:Object(s.jsx)("input",(e={id:"ORIGIN",placeholder:"ORIGIN",className:"form-control",type:"text"},Object(b.a)(e,"placeholder","enter an origin"),Object(b.a)(e,"ref",this.getOrigin),Object(b.a)(e,"className","form-control"),e))})})})}),Object(s.jsx)("div",{className:"col-md-6 col-lg-4",children:Object(s.jsx)("div",{className:"form-group",children:Object(s.jsx)(g.d,{googleMapsApiKey:O,libraries:["places"],children:Object(s.jsx)(g.a,{onLoad:this.onLoad,onPlaceChanged:this.onPlaceChanged,children:Object(s.jsx)("input",(t={id:"DESTINATION",placeholder:"DESTINATION",className:"form-control",type:"text"},Object(b.a)(t,"placeholder","enter a destination"),Object(b.a)(t,"ref",this.getDestination),t))})})})})]}),Object(s.jsx)("div",{className:"subheader",children:"mode of transport"}),Object(s.jsxs)("div",{className:"transit-options",children:[Object(s.jsxs)("div",{className:"form-group custom-control custom-radio mr-4",children:[Object(s.jsx)("input",{id:"DRIVING",className:"custom-control-input",name:"travelMode",type:"hidden",checked:"DRIVE"===this.state.travelMode,onChange:this.checkDriving}),Object(s.jsx)("label",{className:"custom-control-label",htmlFor:"DRIVING",children:Object(s.jsx)("img",{className:"car-image",onClick:this.handleCarModeClick,src:k,alt:""})})]}),Object(s.jsxs)("div",{className:"form-group custom-control custom-radio mr-4",children:[Object(s.jsx)("input",{id:"BICYCLING",className:"custom-control-input",name:"travelMode",type:"hidden",checked:"BIKE"===this.state.travelMode,onChange:this.checkBicycling}),Object(s.jsx)("label",{className:"custom-control-label",htmlFor:"BICYCLING",children:Object(s.jsx)("img",{className:"bicycle-image",onClick:this.handleBikeModeClick,src:y,alt:""})})]}),Object(s.jsxs)("div",{className:"form-group custom-control custom-radio mr-4",children:[Object(s.jsx)("input",{id:"TRANSIT",className:"custom-control-input",name:"travelMode",type:"hidden",checked:"TRANSIT"===this.state.travelMode,onChange:this.checkTransit}),Object(s.jsx)("label",{className:"custom-control-label",htmlFor:"TRANSIT",children:Object(s.jsx)("img",{className:"transit-image",onClick:this.handleTransitModeClick,src:x,alt:""})})]}),Object(s.jsxs)("div",{className:"form-group custom-control custom-radio mr-4",children:[Object(s.jsx)("input",{id:"WALKING",className:"custom-control-input",name:"travelMode",type:"hidden",checked:"WALK"===this.state.travelMode,onChange:this.checkWalking}),Object(s.jsx)("label",{className:"custom-control-label",htmlFor:"WALKING",children:Object(s.jsx)("img",{className:"walk-image",onClick:this.handleWalkModeClick,src:m,alt:""})})]})]}),Object(s.jsxs)("div",{className:"results-modal-container",children:[Object(s.jsx)("button",{type:"button",onClick:this.onClick,className:"Button",children:this.state.buttonMode}),this.state.test?this.sendModal():null]}),Object(s.jsxs)("div",{className:"bio-container",children:[Object(s.jsx)("div",{className:"subheader",children:Object(s.jsx)("a",{href:"https://drewshroyer.github.io/",target:"_blank",children:"Drew Shroyer"})}),Object(s.jsx)("div",{className:"subheader",children:Object(s.jsx)("a",{href:"https://www.johnrobertmcc.com/",target:"_blank",children:"JR McCann"})})]})]})]}),Object(s.jsx)("div",{className:"map-container",children:Object(s.jsx)(N,{origin:n,directions:i,destination:c,travelMode:l,searched:o})})]})}}]),a}(c.a.Component);var M=function(){return Object(s.jsx)("div",{className:"App",children:Object(s.jsx)("header",{className:"App-header",children:Object(s.jsx)(F,{})})})},w=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,23)).then((function(t){var a=t.getCLS,s=t.getFID,n=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),s(e),n(e),c(e),i(e)}))};o.a.render(Object(s.jsx)(c.a.StrictMode,{children:Object(s.jsx)(M,{})}),document.getElementById("root")),w()}},[[22,1,2]]]);
//# sourceMappingURL=main.3d8a04a6.chunk.js.map