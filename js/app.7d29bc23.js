(function(e){function a(a){for(var n,t,c=a[0],u=a[1],l=a[2],s=0,d=[];s<c.length;s++)t=c[s],Object.prototype.hasOwnProperty.call(i,t)&&i[t]&&d.push(i[t][0]),i[t]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);m&&m(a);while(d.length)d.shift()();return r.push.apply(r,l||[]),o()}function o(){for(var e,a=0;a<r.length;a++){for(var o=r[a],n=!0,t=1;t<o.length;t++){var c=o[t];0!==i[c]&&(n=!1)}n&&(r.splice(a--,1),e=u(u.s=o[0]))}return e}var n={},t={app:0},i={app:0},r=[];function c(e){return u.p+"js/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"b3c38a0e","chunk-0206bfa0":"ddd1e7fa","chunk-04b93936":"b4db237a","chunk-13a6037e":"7bf899d0","chunk-16015154":"ba9696fe","chunk-17977988":"4f3efa73","chunk-2c06842c":"924e7248","chunk-2d208d90":"7abf34b7","chunk-2d21d0e2":"061f51d1","chunk-2d22c123":"fa1cefcb","chunk-2e80bb9a":"0502187c","chunk-3145fe0f":"9366f016","chunk-328f70dd":"ed4eea27","chunk-3807499c":"78c23e29","chunk-3c94cd2f":"b6023d43","chunk-3dc647fd":"a9407d7f","chunk-4cdd78c0":"dc8e6fb4","chunk-515a8379":"80282c61","chunk-53ccb27e":"a66d83e9","chunk-59974754":"aa559d02","chunk-766a929b":"b1540445","chunk-839300a6":"69725811","chunk-c796899c":"c41b2b81",comple:"bf2fd7ed",creditos:"e4c269c7",glosario:"87729523",intro:"ff0e0996",referencias:"f4f40d93",tema1:"d23f6c74",tema2:"11149128",tema3:"954581e9"}[e]+".js"}function u(a){if(n[a])return n[a].exports;var o=n[a]={i:a,l:!1,exports:{}};return e[a].call(o.exports,o,o.exports,u),o.l=!0,o.exports}u.e=function(e){var a=[],o={"chunk-04b93936":1,"chunk-16015154":1,"chunk-17977988":1,"chunk-3145fe0f":1,"chunk-328f70dd":1,"chunk-3807499c":1,"chunk-3c94cd2f":1,"chunk-3dc647fd":1,"chunk-515a8379":1,"chunk-59974754":1,"chunk-766a929b":1,"chunk-839300a6":1,comple:1,creditos:1,glosario:1,intro:1,referencias:1};t[e]?a.push(t[e]):0!==t[e]&&o[e]&&a.push(t[e]=new Promise((function(a,o){for(var n="css/"+({actividad:"actividad",comple:"comple",creditos:"creditos",glosario:"glosario",intro:"intro",referencias:"referencias",tema1:"tema1",tema2:"tema2",tema3:"tema3"}[e]||e)+"."+{actividad:"31d6cfe0","chunk-0206bfa0":"31d6cfe0","chunk-04b93936":"2cd5135e","chunk-13a6037e":"31d6cfe0","chunk-16015154":"d035a47c","chunk-17977988":"d035a47c","chunk-2c06842c":"31d6cfe0","chunk-2d208d90":"31d6cfe0","chunk-2d21d0e2":"31d6cfe0","chunk-2d22c123":"31d6cfe0","chunk-2e80bb9a":"31d6cfe0","chunk-3145fe0f":"d035a47c","chunk-328f70dd":"d035a47c","chunk-3807499c":"d035a47c","chunk-3c94cd2f":"1dbe8d4a","chunk-3dc647fd":"d035a47c","chunk-4cdd78c0":"31d6cfe0","chunk-515a8379":"0459bc8c","chunk-53ccb27e":"31d6cfe0","chunk-59974754":"f48497e0","chunk-766a929b":"c167cefb","chunk-839300a6":"b67dc245","chunk-c796899c":"31d6cfe0",comple:"e2f65924",creditos:"28468235",glosario:"096bdd61",intro:"0e433876",referencias:"e7d3f467",tema1:"31d6cfe0",tema2:"31d6cfe0",tema3:"31d6cfe0"}[e]+".css",i=u.p+n,r=document.getElementsByTagName("link"),c=0;c<r.length;c++){var l=r[c],s=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(s===n||s===i))return a()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],s=l.getAttribute("data-href");if(s===n||s===i)return a()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=a,m.onerror=function(a){var n=a&&a.target&&a.target.src||i,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete t[e],m.parentNode.removeChild(m),o(r)},m.href=i;var p=document.getElementsByTagName("head")[0];p.appendChild(m)})).then((function(){t[e]=0})));var n=i[e];if(0!==n)if(n)a.push(n[2]);else{var r=new Promise((function(a,o){n=i[e]=[a,o]}));a.push(n[2]=r);var l,s=document.createElement("script");s.charset="utf-8",s.timeout=120,u.nc&&s.setAttribute("nonce",u.nc),s.src=c(e);var d=new Error;l=function(a){s.onerror=s.onload=null,clearTimeout(m);var o=i[e];if(0!==o){if(o){var n=a&&("load"===a.type?"missing":a.type),t=a&&a.target&&a.target.src;d.message="Loading chunk "+e+" failed.\n("+n+": "+t+")",d.name="ChunkLoadError",d.type=n,d.request=t,o[1](d)}i[e]=void 0}};var m=setTimeout((function(){l({type:"timeout",target:s})}),12e4);s.onerror=s.onload=l,document.head.appendChild(s)}return Promise.all(a)},u.m=e,u.c=n,u.d=function(e,a,o){u.o(e,a)||Object.defineProperty(e,a,{enumerable:!0,get:o})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,a){if(1&a&&(e=u(e)),8&a)return e;if(4&a&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(u.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&a&&"string"!=typeof e)for(var n in e)u.d(o,n,function(a){return e[a]}.bind(null,n));return o},u.n=function(e){var a=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(a,"a",a),a},u.o=function(e,a){return Object.prototype.hasOwnProperty.call(e,a)},u.p="",u.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=a,l=l.slice();for(var d=0;d<l.length;d++)a(l[d]);var m=s;r.push([0,"chunk-vendors"]),o()})({0:function(e,a,o){e.exports=o("56d7")},"14d5":function(e,a,o){e.exports=o.p+"img/banner-principal-img.10239f92.png"},"52e5":function(e,a,o){e.exports=o.p+"img/cc.58a75e32.svg"},"56d7":function(e,a,o){"use strict";o.r(a);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("68f3"),t=function(){var e=this,a=e.$createElement,o=e._self._c||a;return o("div",{staticClass:"app",attrs:{id:"app"}},[o("Header"),o("div",{staticClass:"contenedor-principal"},[o("AsideMenu"),o("section",{staticClass:"seccion-principal",class:{"seccion-principal--barra-avance-open":!e.menuState}},[o("router-view")],1)],1),o("BarraAvance"),o("Accesibilidad")],1)},i=[],r={name:"App",data:function(){return{menuOpen:!1}},computed:{menuState:function(){return this.$store.getters.isMenuOpen}},mounted:function(){this.$aos.init({offset:100})}},c=r,u=o("2877"),l=Object(u["a"])(c,t,i,!1,null,null,null),s=l.exports,d=(o("d3b7"),o("3ca3"),o("ddb0"),o("b0c0"),o("2b0e")),m=o("8c4f"),p=o("ae58"),f=o("7e58");d["a"].use(m["a"]);var b=new m["a"]({routes:[{path:"/",name:"inicio",component:p["a"]},{path:"/introduccion",name:"introduccion",component:function(){return o.e("intro").then(o.bind(null,"5167"))}},{path:"/curso",name:"curso",component:f["a"],redirect:{name:"tema1"},children:[{path:"tema1",name:"tema1",component:function(){return o.e("tema1").then(o.bind(null,"02c8"))}},{path:"tema2",name:"tema2",component:function(){return o.e("tema2").then(o.bind(null,"fd11"))}},{path:"tema3",name:"tema3",component:function(){return o.e("tema3").then(o.bind(null,"eb46"))}}]},{path:"/actividad",name:"actividad",component:function(){return o.e("actividad").then(o.bind(null,"4298"))}},{path:"/glosario",name:"glosario",component:function(){return o.e("glosario").then(o.bind(null,"69a7"))}},{path:"/complementario",name:"complementario",component:function(){return o.e("comple").then(o.bind(null,"dd8c"))}},{path:"/referencias",name:"referencias",component:function(){return o.e("referencias").then(o.bind(null,"64ef"))}},{path:"/creditos",name:"creditos",component:function(){return o.e("creditos").then(o.bind(null,"2e81"))}}],scrollBehavior:function(e,a){if(e.hash){var o={selector:e.hash,offset:{y:100},behavior:"smooth"};return e.name===a.name?o:new Promise((function(e){setTimeout((function(){e(o)}),500)}))}setTimeout((function(){window.scrollTo({left:0,top:0,behavior:"auto"})}),100)}}),h=b,g=o("1c2c"),v=(o("a3a0"),{global:{componenteFormativo:"Propuesta y concepto gráfico del proyecto multimedia",descripcionCurso:"Este componente desarrolla el esquema para la construcción de una propuesta de proyecto, donde se comprenden elementos claves como la comunicación, investigación y la representación conceptual y gráfica del proyecto multimedia. Para la elaboración del proyecto se debe partir de la planificación, estableciendo parámetros iniciales, a quién va dirigido, las necesidades y objetivos, la metodología de trabajo, los costos y presupuestos.",imagenBannerPrincipal:o("14d5"),fondoBannerPrincipal:o("e6b0")},menuPrincipal:{menu:[{nombreRuta:"inicio",icono:"fas fa-home",titulo:"Volver al inicio"},{nombreRuta:"introduccion",icono:"fas fa-info",titulo:"Introducción",desarrolloContenidos:!0},{nombreRuta:"tema1",icono:"far fa-file-alt",numero:"1",titulo:"Planificación",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"1.1",titulo:"Análisis previo",hash:"t_1_1"},{icono:"far fa-file-alt",numero:"1.2",titulo:"Público objetivo",hash:"t_1_2"},{icono:"far fa-file-alt",numero:"1.3",titulo:"Necesidades",hash:"t_1_3"},{icono:"far fa-file-alt",numero:"1.4",titulo:"Objetivos",hash:"t_1_4"},{icono:"far fa-file-alt",numero:"1.5",titulo:"Metodología de trabajo",hash:"t_1_5"},{icono:"far fa-file-alt",numero:"1.6",titulo:"Cronograma de actividades",hash:"t_1_6"},{icono:"far fa-file-alt",numero:"1.7",titulo:"Presupuestos / Recursos",hash:"t_1_7"}]},{nombreRuta:"tema2",icono:"far fa-file-alt",numero:"2",titulo:"Ejecución",desarrolloContenidos:!0,subMenu:[{icono:"far fa-file-alt",numero:"2.1",titulo:"Estructura temática",hash:"t_2_1"},{icono:"far fa-file-alt",numero:"2.2",titulo:"Eje o enfoque creativo",hash:"t_2_2"},{icono:"far fa-file-alt",numero:"2.3",titulo:"Conceptualización o concepto gráfico",hash:"t_2_3"}]}],subMenu:[{nombreRuta:"glosario",icono:"fas fa-sort-alpha-down",titulo:"Glosario"},{nombreRuta:"complementario",icono:"far fa-folder-open",titulo:"Material complementario"},{icono:"fas fa-book",titulo:"Referencias bibliográficas",nombreRuta:"referencias"},{icono:"fas fa-download",titulo:"Descargar material",download:"downloads/material.zip"},{icono:"far fa-registered",titulo:"Créditos",nombreRuta:"creditos"}]},referencias:[{referencia:"Ejemplo.de. (2017). Ejemplo de cronograma de actividades. Ejemplo.de.",link:"http://www.ejemplo.de/cronograma-de-actividades/"},{referencia:"Esan. (2015). Marketing: ¿Cómo definir nuestro público objetivo? Conexionesa.",link:"https://www.esan.edu.pe/apuntes-empresariales/2015/10/marketing-como-definir-publico-objetivo/"},{referencia:"García, Y. (2020). Fundamentos básicos del diseño bidimensional. Calameo.",link:"https://es.calameo.com/books/00664988015f6c26d78e6"},{referencia:"Gonzales, R. (2020). Mapa mental. Academia.edu.",link:"https://www.academia.edu/43118741/Un_mapa_mental_es_un_diagrama_usado_para_representar_palabras20200520_82054_vfja71"},{referencia:"Raffino, M. (2020). Objetivo General. Concepto.",link:"https://concepto.de/objetivo-general"},{referencia:"Romero, D. (2018). Propuesta de Proyecto Multimedia.",link:"https://www.scribd.com/doc/17155592/Propuesta-de-Proyecto-Multimedia-Final"},{referencia:"Soler, R. (2020). Fundamentos de Marketing. Studocu.",link:"https://www.studocu.com/ca-es/document/universitat-oberta-de-catalunya/fundamentos-de-marketing/practic/pec1-enunciado-pec/12285780/view"}],glosario:[{termino:"BrainStorming",significado:"Es una estrategia de trabajo en equipo que hace referencia a la lluvia de ideas, buscando un momento creativo para que surjan nuevas ideas."},{termino:"Cronograma",significado:"El cronograma de actividades es una tabla o gráfico en la que se indica el momento en el que se va a realizar una tarea o una labor y el tiempo que se va a dedicar a su desarrollo. (Ejemplo, 2017)."},{termino:"Composición",significado:"La composición es un elemento muy importante, esto es, la disposición de los distintos elementos dentro del espacio visual o formato de manera equilibrada y ordenada, con el fin de transmitir o comunicar un mensaje al público objetivo. (García, 2020)."},{termino:"Mapa mental",significado:"Un mapa mental es un diagrama usado para representar palabras, ideas, tareas, lecturas, dibujos, u otros conceptos ligados y dispuestos radicalmente a través de una palabra clave o de una idea central. (Gonzales, 2020)."},{termino:"Marketing o mercadeo",significado:"Marketing es la ciencia y el arte de explorar, crear y entregar valor para satisfacer necesidades de un mercado objetivo con lucro. El Marketing identifica necesidades y deseos no realizados. (Mendoza Quispe y Roncoroni, 2020)."},{termino:"Necesidad",significado:"Es toda aquella aspiración por parte de los consumidores en términos de bienes o servicios. Es decir, son aquellos puntos para satisfacer por parte de las empresas mediante el ofrecimiento de sus productos en el mercado. (Soler, 2020)."},{termino:"Público objetivo",significado:"El público objetivo, también conocido como target, es el grupo de personas al cual está dirigida una marca, producto o campaña. (Esan. 2015)."}],complementario:[{texto:"Perú Designer. (2016). Ejemplos Proyectos Multimedia. [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=LBQlRtLr8Iw"},{texto:"Arce, V. (2015). Pasos para realizar un Proyecto multimedia.  [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=DCZJ6YLXyQk"},{texto:"Profesor TX. (2012). Manejo de Proyectos. [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=fNNzkVpJYyU"},{texto:"Centro de enseñanza y aprendizaje. (2017). Planificación de proyectos. [video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=r4IUTGV2sB0"},{texto:"Formación Multimodal. (s.f.). ¿Qué es un mapa conceptual y cómo se elabora? [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=q8fvXaUX5f4"},{texto:"Espacio Business Media. (2020). Presupuesto de marketing Digital. [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=H-DcBAK-QqI"},{texto:"Galdanez, C. (2018). Estructura temática. [video]. YouTube.",tipo:"Video",link:"https://www.youtube.com/watch?v=oWbr0pkj9iQ"},{texto:"Estoque Films. (2017). Enfoque creativo. [video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=yftcMkk0FsE"},{texto:"Trino. (2019). ¿Cual es el SIGNIFICADO de CONCEPTUALIZAR en DISEÑO GRÁFICO ? - Explicación Parte 1. [video]. YouTube. ",tipo:"Video",link:"https://www.youtube.com/watch?v=VJSxa7YOJxc"}],creditos:{liderEquipo:[{nombre:"Maria Camila Garcia Santamaria",cargo:"Líder del equipo",centro:"Dirección General"}],contenidoInstruccional:[{nombre:"Rafael Neftalí Lizcano Reyes",cargo:"Asesor metodológico y pedagógico",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Eduardo José Velasco Acevedo",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Juan Manuel Reyes Ramírez",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Carlos Andrés Suescun Lesmes",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Olga Lucía Mogollón Carvajal",cargo:"Experto temático",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"},{nombre:"Giovanna Escobar",cargo:"Diseñadora Instruccional",centro:"Centro de Servicios de Salud - Regional Antioquia"},{nombre:"Andrés Felipe Velandia Espitia",cargo:"Revisor Metodológico y Pedagógico",centro:"Centro de Diseño y Metrología - Regional Distrito Capital"},{nombre:"Jhon Jairo Rodríguez Pérez",cargo:"Diseñador y evaluador instruccional",centro:"Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital"}],desarrolloProducto:[{nombre:"Francisco José Lizcano Reyes",cargo:"Responsable del equipo",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Leyson Fabian Castaño Perez",cargo:"Soporte organizacional",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Marcela González",cargo:"Diseño web",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Walter Roa Serrano",cargo:"Desarrollo front-end",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Daniela Muñoz Bedoya",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Gilberto Junior Rodríguez Rodríguez",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Wilson Andrés Arenales Cáceres",cargo:"Producción audiovisual",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"},{nombre:"Zuleidy Maria Ruiz Torres",cargo:"Producción audiovisual",centro:"Centro de Comercio y Servicios - Regional Tolima"},{nombre:"Yuli Marcela Gómez Tarazona ",cargo:"Validación de diseño y contenido",centro:"Centro Industrial del Diseño y la Manufactura - Regional Santander"}],gestoresRepositorio:[{nombre:"Milady Tatiana Villamil Castellanos",cargo:"Validación y vinculación en plataforma LMS",centro:"Centro de Comercio y Servicios - Regional Tolima"}]}});n["a"].prototype.$config=v;var k=o("9224");n["a"].prototype.$package=k,new n["a"]({router:h,store:g["a"],render:function(e){return e(s)}}).$mount("#app")},9224:function(e){e.exports=JSON.parse('{"name":"sena-base-2021","version":"4.0.0","private":true,"scripts":{"serve":"vue-cli-service serve","build":"vue-cli-service build","lint":"vue-cli-service lint"},"dependencies":{"ecored-base-pkg":"3.0.3","vue":"^2.6.11","vue-router":"^3.2.0","vuex":"^3.4.0"},"devDependencies":{"@vue/cli-plugin-babel":"^4.5.12","@vue/cli-plugin-eslint":"^4.5.12","@vue/cli-plugin-router":"^4.5.12","@vue/cli-plugin-vuex":"^4.5.12","@vue/cli-service":"^4.5.13","@vue/eslint-config-prettier":"^6.0.0","babel-eslint":"^10.1.0","eslint":"^6.7.2","eslint-plugin-prettier":"^3.1.3","eslint-plugin-vue":"^6.2.2","node-sass":"^4.12.0","prettier":"^1.19.1","sass-loader":"^8.0.2","vue-cli-plugin-pug":"^2.0.0","vue-template-compiler":"^2.6.11"}}')},"9eb5":function(e,a,o){e.exports=o.p+"img/logo-sena-naranja.43e61d0f.svg"},a3a0:function(e,a,o){},e6b0:function(e,a,o){e.exports=o.p+"img/fondo-banner-principal.ee6894ad.png"}});
//# sourceMappingURL=app.7d29bc23.js.map