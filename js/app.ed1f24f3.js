(function(e){function t(t){for(var r,s,i=t[0],l=t[1],c=t[2],p=0,d=[];p<i.length;p++)s=i[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r]);u&&u(t);while(d.length)d.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,i=1;i<n.length;i++){var l=n[i];0!==a[l]&&(r=!1)}r&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o=[];function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var u=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"1f7a":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("5f5b"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),e._v(" | "),n("router-link",{attrs:{to:"/cats"}},[e._v("Cats")]),e._v(" | "),n("router-link",{attrs:{to:"/dogs"}},[e._v("Dogs")]),e._v(" | ")],1),n("router-view")],1)},s=[],i=(n("5c0b"),n("2877")),l={},c=Object(i["a"])(l,o,s,!1,null,null,null),u=c.exports,p=n("8c4f"),d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home-view-container"},[n("h1",[e._v("Adopt new best friend")]),e._v(" "+e._s(e.getAllCats.length)+" "+e._s(e.animalsCount)+" "),n("button",{staticClass:"btn btn-primary",on:{click:e.togglePetForm}},[e._v(" Add new pet ")]),e.isShowPetForm?n("b-form",{on:{submit:function(t){return t.preventDefault(),e.handleSubmit(t)}}},[n("b-form-group",{attrs:{id:"input-group-2",label:"Pet's Name:","label-for":"input-2"}},[n("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Enter name"},model:{value:e.formData.name,callback:function(t){e.$set(e.formData,"name",t)},expression:"formData.name"}})],1),n("b-form-group",{attrs:{id:"input-group-3",label:"Species:","label-for":"input-3"}},[n("b-form-select",{attrs:{id:"input-3",options:["cats","dogs"],required:""},model:{value:e.formData.species,callback:function(t){e.$set(e.formData,"species",t)},expression:"formData.species"}})],1),n("b-form-group",{attrs:{id:"input-group-2",label:"Pet's Age:","label-for":"input-2"}},[n("b-form-input",{attrs:{type:"number",id:"input-2",required:"",placeholder:"Enter age"},model:{value:e.formData.age,callback:function(t){e.$set(e.formData,"age",t)},expression:"formData.age"}})],1),n("b-button",{attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),n("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)},f=[],m=(n("b0c0"),n("5530")),b=n("2f62"),g={name:"Home",data:function(){return{isShowPetForm:!1,formData:{name:"",age:0,species:null}}},computed:Object(m["a"])({},Object(b["c"])(["animalsCount","getAllCats"])),methods:Object(m["a"])({},Object(b["b"])(["addPet"]),{togglePetForm:function(){this.isShowPetForm=!this.isShowPetForm},handleSubmit:function(){var e=this.formData,t=e.species,n=e.name,r=e.age,a={species:t,pet:{name:n,age:r}};this.addPet(a),this.formData={name:"",age:0,species:null}}})},h=g,v=Object(i["a"])(h,d,f,!1,null,null,null),_=v.exports,y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PetTable",{attrs:{species:"cats",pets:e.cats}})],1)},w=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.species))]),n("b-table",{attrs:{striped:"",hover:"",items:e.pets},scopedSlots:e._u([{key:"cell(name)",fn:function(t){return[n("router-link",{attrs:{to:"/pets/"+e.species+"/"+t.index}},[e._v(" "+e._s(t.value)+" ")])]}}])})],1)},j=[],P={props:{species:String,pets:Array}},S=P,k=Object(i["a"])(S,O,j,!1,null,null,null),x=k.exports,D={components:{PetTable:x},data:function(){return{}},computed:Object(m["a"])({},Object(b["d"])(["cats"]))},$=D,C=Object(i["a"])($,y,w,!1,null,null,null),A=C.exports,E=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("PetTable",{attrs:{species:"dogs",pets:e.dogs}})],1)},T=[],F={components:{PetTable:x},data:function(){return{}},computed:Object(m["a"])({},Object(b["d"])(["dogs"]))},H=F,M=Object(i["a"])(H,E,T,!1,null,null,null),q=M.exports,J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",[e._v(e._s(e.animal.name)+" ("+e._s(e.$route.params.species)+")")]),n("p",[e._v("Age: "+e._s(e.animal.age)+" years old")]),n("p",[e._v("Breed: "+e._s(e.animal.breed))]),e._v(" 11111 ")])},K=[],R={data:function(){return{animal:{}}},computed:Object(m["a"])({},Object(b["d"])(["cats","dogs"])),mounted:function(){var e=this[this.$route.params.species];this.animal=e[this.$route.params.id]}},B=R,N=Object(i["a"])(B,J,K,!1,null,null,null),Z=N.exports;r["default"].use(p["a"]);var z=[{path:"/",name:"Home",component:_},{path:"/cats",name:"cats",component:A},{path:"/dogs",name:"dogs",component:q},{path:"/pets/:species/:id",name:"pets",component:Z}],G=new p["a"]({mode:"history",base:"/",routes:z}),I=G,L=(n("99af"),n("2909")),Q=[{name:"Fish",breed:"tuxedo",species:"cat",gender:"male",age:20,color:"black/white",weight:13,location:"fourside",notes:"Sweet kitty. He loves getting his belly rubbed."},{name:"Henry",breed:"tabby",species:"cat",gender:"male",age:20,color:"orange/white",weight:17,location:"threed",notes:"Super friendly"},{name:"Roger",breed:"tabby",species:"cat",gender:"male",age:20,color:"gray",weight:15,location:"threed",notes:"Super friendly"},{name:"Kitkat",breed:"bombay",species:"cat",gender:"female",age:.9,color:"black",weight:9,location:"threed",notes:"Super friendly"}],U=[{name:"Sheeba",breed:"collie",gender:"female",age:7,color:"black/white",weight:34,location:"fourside",notes:"Pure breed. Trained for competitions."},{name:"Hillary",breed:"mut",gender:"female",age:17,color:"orange/white",weight:37,location:"threed",notes:"Super friendly"},{name:"Zeus",breed:"afghan hound",gender:"male",age:9,color:"gray",weight:68,location:"threed",notes:"Super friendly"},{name:"Katie",breed:"golden retriever",gender:"female",age:2,color:"black",weight:44,location:"threed",notes:"Super friendly"}],V={cats:Q,dogs:U,pets:[].concat(Object(L["a"])(Q),Object(L["a"])(U))},W={appendPet:function(e,t){var n=t.species,r=t.pet;e[n].push(r)}},X={addPet:function(e,t){var n=e.commit;n("appendPet",t)}},Y=(n("4de4"),{animalsCount:function(e){return e.cats.length+e.dogs.length},getAllCats:function(e){return e.pets.filter((function(e){return"cat"===e.species}))}});r["default"].use(b["a"]);var ee=new b["a"].Store({state:V,mutations:W,actions:X,getters:Y});n("f9e3"),n("2dd8"),n("1f7a");r["default"].use(a["a"]),r["default"].config.productionTip=!1,new r["default"]({router:I,store:ee,render:function(e){return e(u)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";var r=n("9c0c"),a=n.n(r);a.a},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.ed1f24f3.js.map