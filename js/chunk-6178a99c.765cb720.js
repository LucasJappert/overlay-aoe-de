(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6178a99c"],{"1ef8":function(e,t,s){},"24db":function(e,t,s){"use strict";s.r(t);var n=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.BaseFirebaseOk?s("div",{staticClass:"ContenedorMarcadorResultados Visible"},[e._v(" "+e._s(e.NombreJugador())+" "),s("b",[e._v(e._s(e.Ganadas()))]),e._v(" - "),s("b",[e._v(e._s(e.Perdidas()))]),e._v(" Others "),s("div",{staticClass:"ContenedorPanel"},[s("div",{staticClass:"ContenedorTitulo"},[e._v("Edit Score")]),s("div",{staticClass:"ContenedorBotones"},[s("div",{staticClass:"BotonesLeft"},[s("div",{staticClass:"Boton BotonRojo noselect",on:{click:function(t){return e.RestarWin()}}},[e._v("↓")]),e._v(" "),s("div",{staticClass:"Boton BotonVerde noselect",on:{click:function(t){return e.SumarWin()}}},[e._v("↑")])]),s("div",{staticClass:"BotonReset noselect",attrs:{title:"It save the current score"},on:{click:function(t){return e.ResetearMarcador()}}},[e._v("Reset")]),s("div",{staticClass:"BotonesRight"},[s("div",{staticClass:"Boton BotonRojo noselect",on:{click:function(t){return e.RestarLose()}}},[e._v("↓")]),e._v(" "),s("div",{staticClass:"Boton BotonVerde noselect",on:{click:function(t){return e.SumarLose()}}},[e._v("↑")])])])])]):e._e()},a=[],r=s("bee2"),o=s("d4ec"),i=s("c7eb"),c=s("1da1"),u=(s("d3b7"),s("159b"),s("fb6a"),s("ac1f"),s("1276"),s("260b")),l=(s("66ce"),s("000b"),{apiKey:"AIzaSyCGlSx7Kv8kdglNrv-4V7P5R-gKp8cysdU",authDomain:"aoe2de-4d410.firebaseapp.com",databaseURL:"https://aoe2de-4d410-default-rtdb.firebaseio.com",projectId:"aoe2de-4d410",storageBucket:"aoe2de-4d410.appspot.com",messagingSenderId:"661198727406",appId:"1:661198727406:web:6ecf558118a4d828882bff",measurementId:"G-XR8V7V8BDM"}),d=(s("7491"),u["a"].initializeApp(l));u["a"].analytics();var h=d.database(),f=h.ref("MarcadorResultados"),_={name:"MarcadorResultadosFB",firebase:{MarcadorResultados:f},props:{},data:function(){return{MiNombre:"TM Marty",DatosMarcador:{Ganadas:0,Perdidas:0},ProfileId:"",InfoFB:null,BaseFirebaseOk:!1,InfoInicialSeteada:!1}},mounted:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:setTimeout((function(){e.IntentoSeterInfoInicial()}),200);case 1:case"end":return t.stop()}}),t)})))()},methods:{IntentoSeterInfoInicial:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var s;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log("IntentoSeterInfoInicial"),""!=e.NombreJugador()){t.next=6;break}return setTimeout((function(){e.IntentoSeterInfoInicial()}),200),t.abrupt("return");case 6:e.ProfileId=e.$parent.ProfileId;case 7:return t.next=9,e.ObtenerInfoDeUnProfile(e.ProfileId);case 9:if(e.InfoFB=t.sent,null!=e.InfoFB){t.next=16;break}return t.next=13,f.push(new b(e.ProfileId,e.NombreJugador()));case 13:return t.next=15,e.ObtenerInfoDeUnProfile(e.ProfileId);case 15:e.InfoFB=t.sent;case 16:if(null!=e.InfoFB){t.next=19;break}return console.log("VER"),t.abrupt("return");case 19:s=h.ref("MarcadorResultados/"+e.InfoFB.key),s.on("value",(function(t){var s=t.val();e.InfoFB._Name=e.NombreJugador(),e.InfoFB._Registros=s._Registros})),e.BaseFirebaseOk=!0;case 22:case"end":return t.stop()}}),t)})))()},ActualizarRegistrosEnFirebase:function(){var e=this;return Object(c["a"])(Object(i["a"])().mark((function t(){var s;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,s=e,t.next=4,h.ref("MarcadorResultados/"+s.InfoFB.key).update({_Registros:s.InfoFB._Registros,_Name:s.NombreJugador()}).then((function(e){}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))()},ObtenerInfoDeUnProfile:function(e){return Object(c["a"])(Object(i["a"])().mark((function t(){var s;return Object(i["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return s=null,t.prev=1,t.next=4,f.once("value",(function(t){t.forEach((function(t){t.val()._ProfileId==e&&(s=t.val(),s.key=t.key)}))}));case 4:t.next=9;break;case 6:t.prev=6,t.t0=t["catch"](1),console.log(t.t0);case 9:return t.abrupt("return",s);case 10:case"end":return t.stop()}}),t,null,[[1,6]])})))()},SumarWin:function(){var e=this.InfoFB._Registros[this.InfoFB._Registros.length-1];e._Ganadas+=1,this.ActualizarRegistrosEnFirebase()},RestarWin:function(){var e=this.InfoFB._Registros[this.InfoFB._Registros.length-1];e._Ganadas>0&&(e._Ganadas-=1,this.ActualizarRegistrosEnFirebase())},SumarLose:function(){var e=this.InfoFB._Registros[this.InfoFB._Registros.length-1];e._Perdidas+=1,this.ActualizarRegistrosEnFirebase()},RestarLose:function(){var e=this.InfoFB._Registros[this.InfoFB._Registros.length-1];e._Perdidas>0&&(e._Perdidas-=1,this.ActualizarRegistrosEnFirebase())},ResetearMarcador:function(){this.InfoFB._Registros.push(new g),this.ActualizarRegistrosEnFirebase()},Ganadas:function(){return this.InfoFB._Registros[this.InfoFB._Registros.length-1]._Ganadas},Perdidas:function(){return this.InfoFB._Registros[this.InfoFB._Registros.length-1]._Perdidas},NombreJugador:function(){return this.$parent.NombreJugador&&this.$parent.NombreJugador.length>0?this.$parent.NombreJugador:""}}},b=Object(r["a"])((function e(t,s){Object(o["a"])(this,e),this._ProfileId=t,this._Name=s,this._Registros=[],this._Registros.push(new g)})),g=Object(r["a"])((function e(){Object(o["a"])(this,e),this._Ganadas=0,this._Perdidas=0,this._Fecha=new v})),v=function(){function e(t){Object(o["a"])(this,e),t||(t=new Date),this._Año=t.getFullYear(),this._Mes=t.getMonth()+1,this._Dia=t.getDate(),this._Horas=t.getHours(),this._Minutos=t.getMinutes(),this._Segundos=t.getSeconds(),this._FechaYHora=this.ObtenerTexto(),this._Fecha=this.ObtenerTexto1()}return Object(r["a"])(e,[{key:"ObtenerTexto",value:function(){var e="";try{e+=("0"+this._Dia).slice(-2),e+="/"+("0"+this._Mes).slice(-2),e+="/"+this._Año,e+=" "+("0"+this._Horas).slice(-2),e+=":"+("0"+this._Minutos).slice(-2),e+=":"+("0"+this._Segundos).slice(-2)}catch(t){console.log(t)}return e}},{key:"ObtenerTexto1",value:function(){var e="";try{e+=("0"+this._Dia).slice(-2),e+="/"+("0"+this._Mes).slice(-2),e+="/"+this._Año}catch(t){console.log(t)}return e}},{key:"Paquete",value:function(){return this._Año+"/"+this._Mes+"/"+this._Dia+"/"+this._Horas+"/"+this._Minutos+"/"+this._Segundos}},{key:"SetearDesdePaquete",value:function(e){var t=e.split("/");6==t.length&&(this._Año=t[0],this._Mes=t[1],this._Dia=t[2],this._Horas=t[3],this._Minutos=t[4],this._Segundos=t[5],this._FechaYHora=this.ObtenerTexto(),this._Fecha=this.ObtenerTexto1())}},{key:"ObtenerFecha",value:function(){var e=new Date(Date.UTC(this._Año,this._Mes-1,this._Dia,this._Horas,this._Minutos,this._Segundos));return e}}]),e}(),I=_,p=(s("58d4"),s("2877")),R=Object(p["a"])(I,n,a,!1,null,"38c2607e",null);t["default"]=R.exports},"58d4":function(e,t,s){"use strict";s("1ef8")}}]);
//# sourceMappingURL=chunk-6178a99c.765cb720.js.map