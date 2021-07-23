<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span 1
      h1 Planificación
    p En esta primera etapa del proceso se tiene el objetivo de identificar el problema que se va a abordar con el proyecto multimedia, con la finalidad de encontrar la mejor solución y de acuerdo con las necesidades del proyecto construir una estructura de trabajo que permita solucionar y alcanzar los objetivos propuestos.
    p.mb-5 Esta etapa de planificación estará dividida en diferentes secciones que ayudarán a construir productos encaminados a satisfacer las necesidades del mercado y ayudará a encontrar lineamientos que permitirán que el proyecto pueda considerarse un producto competitivo, identificar problemas, seleccionar la técnica más adecuada y clarificar conceptos y objetivos.
    #t_1_1.titulo-segundo
      h2 1.1 Análisis previo
    p.mb-5 En el siguiente recurso de aprendizaje se presenta el enfoque de contextualización requerido en esta etapa de la planificación de proyectos:
    SlyderB.mb-5(:datos="datosSlyderAnalisisPrevio")
    Separador
    #t_1_2.titulo-segundo
      h2 1.2 Público objetivo
    p.mb-5 En el siguiente recurso de aprendizaje se comprenderá como la identificación del público objetivo del proyecto es clave en la planificación de proyectos:
    SlyderB.mb-5(:datos="datosSlyderPublicoObjetivo")
    Separador
    #t_1_3.titulo-segundo
      h2 1.3 Necesidades
    p.mb-5 En el siguiente recurso de aprendizaje se comprenderá como la identificación del público objetivo del proyecto es clave en la planificación de proyectos:
    .container__m_4.bw1.p-4
      .col-lg-9.mx-auto.mb-5
        .bloque-texto-a.color-acento-botones.p-4.p-md-5(data-aos="flip-left") 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/t1/f7.svg' alt="Personas en varios dispositivos")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p Determinar las necesidades es fundamental para cuantificar los elementos y las características que deben tener los proyectos, los tiempos de entrega y los factores que serán causas y efectos del proyecto.
      p.mb-5 Algunas preguntas ayudarán a plantear estas necesidades, por lo que es necesario tener claro el problema, el público y los objetivos que vamos a solucionar. Tal como lo muestra el siguiente gráfico:
    ImagenInfografica.color-secundario.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/t1/i-infografica1.jpg', alt='Necesidades en la planeación de proyectos')
          //figcaption Leyenda de la imagen
      .tarjeta-avatar.infografica.mb-5(x="27.5%" y="84.5%")
        img(src='@/assets/curso/t1/c1.svg' alt='1')
        .tarjeta.color-primario
          .p-4
            p.text-center ¿Se ha delimitado el problema?
      .tarjeta-avatar.infografica.mb-5(x="19.7%" y="53.7%")
        img(src='@/assets/curso/t1/c2.svg' alt='2')
        .tarjeta.color-primario
          .p-4
            p.text-center ¿Se han definido costos y presupuestos?
      .tarjeta-avatar.infografica.mb-5(x="24%" y="25%")
        img(src='@/assets/curso/t1/c3.svg' alt='3')
        .tarjeta.color-primario
          .p-4
            p.text-center ¿Se han definido las actividades del proyecto?
      .tarjeta-avatar.infografica.mb-5(x="53%" y="6%")
        img(src='@/assets/curso/t1/c4.svg' alt='4')
        .tarjeta.color-primario
          .p-4
            p.text-center ¿Cuántas personas esperamos que accedan al producto?
      .tarjeta-avatar.infografica.mb-5(x="70.2%" y="25%")
        img(src='@/assets/curso/t1/c5.svg' alt='5')
        .tarjeta.color-primario
          .p-4
            p.text-center ¿Cuál es el nivel de demanda, sobre productos similares?
      .tarjeta-avatar.infografica.mb-5(x="76.5%" y="54%")
        img(src='@/assets/curso/t1/c6.svg' alt='6')
        .tarjeta.color-primario
          .p-4
            p.text-center ¿Se ha delimitado el problema?
      .tarjeta-avatar.infografica.mb-5(x="71.3%" y="84.4%")
        img(src='@/assets/curso/t1/c7.svg' alt='7')
        .tarjeta.color-primario
          .p-4
            p.text-center ¿Cuáles son las preferencias del público objetivo?
    .col-lg-6.mx-auto
      .cajon.color-primario.p-4.mb-5
        p.mb-0 Se debe tener en cuenta que mientras más soluciones se planteen a las necesidades, mejor podrá proyectar los beneficios e interpretar problemas, haciendo más objetivo y preciso el proyecto en cuestión. 
    Separador
    #t_1_4.titulo-segundo
      h2 1.4 Objetivos
    .col-lg-9.mx-auto.mb-5
        .bloque-texto-a.color-acento-botones.p-4(data-aos="flip-right") 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-3.mb-4.mb-lg-0.mx-auto
              img(src='@/assets/curso/t1/i2.png' alt="Personas en varios dispositivos")
            .col-lg-8
              .bloque-texto-a__texto.p-4
                p En cuanto se define el proyecto, se procede a plantear el por qué se va a desarrollar y así responder coherentemente al plan de acción ideado desde el paneo inicial.
    p Una vez las necesidades se determinen, se procede a establecer objetivos de acción del plan propuesto. Estos objetivos deben plantearse de manera clara y concreta, que sean fácilmente identificables, deben ser realistas para que sea factible que se puedan alcanzar en los plazos que se tomaron previamente. Finalmente, los objetivos deben ser medibles o evaluables y una vez terminadas las actividades propuestas en el proyecto, se debe evaluar si los objetivos se lograron o no.
    p.mb-5 En el siguiente recurso identificarán algunas prácticas que se deben tener en cuenta al momento de definir los objetivos:
    SlyderB.mb-5.cab(:datos="datosSlyderObjetivos1")
    p.mb-5 Ya conociendo las características que deben tener los objetivos cuando se van a formular, se pueden clasificar básicamente en dos grandes tipos en objetivos generales y los objetivos específicos, de la siguiente manera:
    TabsB.color-acento-botones.mb-5
      .py-4.py-md-5(titulo="Objetivos generales" :icono="require('@/assets/curso/t1/tab1.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-4 Objetivos generales
            ul.lista-ul
              li
                i.fas.fa-angle-right.cab
                p Están estrechamente relacionados con los factores de riesgo o las causas asociadas al problema o necesidad es directa. Se suele tener un solo objetivo general o un objetivo global, (aunque no siempre es la regla), siendo esta la meta principal, dándole sentido al conjunto, pero siempre apoyado de los objetivos específicos; se puede hablar de una meta central.
              li
                i.fas.fa-angle-right.cab
                p La redacción de este objetivo suele ser una oración concreta, partiendo de la visión global del proyecto, dando respuestas, lo posible, a preguntas como ¿Qué? y deberá redactarse siempre comenzando con verbos en infinitivo (terminados en -ar -er o -ir).
              li
                i.fas.fa-angle-right.cab
                p Si este engloba la meta fundamental del proyecto, los objetivos específicos estarán encaminados a alcanzar metas más cortas o actividades más concretas que permitirán sumar y poder lograr el gran objetivo general.
          .col-md-4.mx-auto
            figure
              img(src='@/assets/curso/t1/i5.png', alt='Tiro al blanco')
              //figcaption Leyenda de la imagen
      .py-4.py-md-5(titulo="Objetivos específicos" :icono="require('@/assets/curso/t1/tab2.svg')")
        .row
          .col-md-6.mb-4.mb-md-0
            h3.mb-4 Objetivos específicos
            ul.lista-ul
              li
                i.fas.fa-angle-right.cab
                p Comprenden metas más concretas que, una vez alcanzadas, permiten conseguir el objetivo general. Por medio de estos, se puede identificar de forma más específica la meta que se pretende alcanzar en la ejecución del proyecto.
              li
                i.fas.fa-angle-right.cab
                p Estos objetivos también se deben redactar con verbos de acción y deben responder de forma práctica, realista y definida. Deben también introducir datos cuantitativos que serán de gran utilidad para evaluar el proyecto por ser medibles y servirán para la toma posterior de decisiones.
          .col-md-4.mx-auto
            figure
              img(src='@/assets/curso/t1/i6.png', alt='Tablero')
    Separador
    #t_1_5.titulo-segundo
      h2 1.5 Metodología de trabajo
    .col-lg-10.mx-auto.mb-5
      .bloque-texto-a.color-acento-botones.p-4.p-md-5(data-aos="flip-left") 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-3.mb-4.mb-lg-0.mx-auto
            img(src='@/assets/curso/t1/f11.svg' alt="Personas en varios dispositivos")
          .col-lg-8
            .bloque-texto-a__texto.p-4
              p Aunque todas las fases de elaboración de un proyecto son importantes, se debe tener especial cuidado en la forma como se distribuyen las tareas, se recomienda que todos participen en la creación de objetivo, creando compromisos y responsabilidades, además se debe indicar quienes serán los encargados del diseño, estructuración, investigación, etc.; antes de empezar las etapas de desarrollo de ejecución es importante organizar y plantear etapas de trabajo.
    p.mb-5 En el siguiente recurso se presentan las herramientas que aportan a la planificación y las metodologías de trabajo:
    .col-lg-11.mx-auto
      LineaTiempoD.color-acento-botones.mb-5
        .row(numero="1" titulo="Mapas conceptuales")
          .col-md-6.mb-4.mb-md-0
            p Estos recogen los conceptos asociados al tema principal y desde allí se plantean ideas en el diagrama para empezar a construir una gran estructura.
            p Permitiendo crear vínculos, aumentar la relación de los conceptos expresados, ordenando todas las ideas y formando nuevas ramificaciones con los elementos que se relacionan.
          .col-md-4.mx-auto
            img(src='@/assets/curso/t1/f12.svg', alt='Imagen relacionada')
        .row(numero="2" titulo="Características de los mapas conceptuales")
          .col-md-6.mb-4.mb-md-0
            ul.lista-ul
              li
                i.fas.fa-angle-right.cab
                p El mapa está construido desde el centro donde está el concepto principal.
              li
                i.fas.fa-angle-right.cab
                p Los conceptos secundarios salen como ramificaciones del centro.
              li
                i.fas.fa-angle-right.cab
                p La estructura nodular se asemeja a un bloque neuronal.
          .col-md-4.mx-auto
            img(src='@/assets/curso/t1/f13.svg', alt='Mapa conceptual')
        .row(numero="3" titulo="Estructuras de División de Trabajo (WBS)")
          .col-md-6.mb-4.mb-md-0
            p Es una herramienta que aporta a la organización de las actividades necesarias para alcanzar las fases del proyecto y es conocida como WBS (Work Breakdown Structure) o estructura de división de trabajo; este instrumento ayuda a listar las actividades a realizar de manera ordenada y jerarquizada, numerando fases y tareas, que permiten generar y estructurar actividades frente a un cronograma.
            p Generalmente la organización de las actividades se estructurará por niveles, permitiendo una organización de todos sus componentes.
          .col-md-4.mx-auto
            img(src='@/assets/curso/t1/f14.svg', alt='Imagen relacionada')
        .row.align-items-center(numero="4" titulo="Características de la WBS")
          .col-lg-6.mb-4.mb-md-0
            ul.lista-ul
              li.mb-0
                i.fas.fa-angle-right.cab
                p En el momento de la asignación de las actividades en los niveles de trabajo, estas deben ser asignadas en uno solo sin repetirlas.
              li.mb-0
                i.fas.fa-angle-right.cab
                p La relación entre tareas debe estar claramente identificada.
              li.mb-0
                i.fas.fa-angle-right.cab
                p Los resultados en todos los niveles deben ser cuantificables.
              li.mb-0
                i.fas.fa-angle-right.cab
                p Se debe tener control sobre todas las tareas por más simples que estén planteadas.
              li.mb-0
                i.fas.fa-angle-right.cab
                p Cualquier proyecto se plantea desde tareas divididas para facilitar la planificación y el control de las mismas.
              li.mb-0
                i.fas.fa-angle-right.cab
                p La estructura WBS permite la jerarquización y organización de las tareas del proyecto y su progreso.
              li.mb-0
                i.fas.fa-angle-right.cab
                p Los hitos dividen el proyecto en segmentos lógicos y medibles.
          .col-lg-6.mb-4.mx-auto
            img(src='@/assets/curso/t1/f15.svg', alt='Características de la WBS', style="width:450px;").m-auto
        .row(numero="5" titulo="Diagrama de Gantt")
          .col-md-6.mb-4.mb-md-0
            p Es uno de los métodos más útiles para hacer seguimiento estructurado a cada actividad en una relación o escala de tiempo.
            p Permite de manera rápida y precisa saber cuándo inicia y finaliza cada tarea relacionada.
            p Es necesario conocer todas las tareas del proyecto, el tiempo estimado de cada una, las personas encargadas y la relación de las actividades; es decir, saber cuál empieza y saber cuál sigue, si existen actividades simultaneas, etc.
            .col-md-10.mb-4.mx-auto
              img(src='@/assets/curso/t1/f16.svg', alt='Diagrama de Gantt')
          .col-md-6.mb-4.mb-md-0
            h4 Características del diagrama de Gantt
            ul.lista-ul
              li
                i.fas.fa-angle-right.cab
                p Conocimiento total del proyecto y sus actividades para la construcción lógica.
              li
                i.fas.fa-angle-right.cab
                p Actividades operativas: tareas que se deben ejecutar, para continuar con otra actividad.
              li
                i.fas.fa-angle-right.cab
                p Actividades sombrilla: conocidas como actividades resumen y representan una fase, pero necesitan otras actividades para su conclusión.
              li
                i.fas.fa-angle-right.cab
                p Hitos: son tareas para establecer puntos de control, pueden ser actividad de entregas, o elementos que ayuden a controlar el proyecto.
              li
                i.fas.fa-angle-right.cab
                p Actividades repetitivas: acciones que se vuelven a hacer con alguna frecuencia y apoyan en el engranaje de las etapas para los seguimientos del proyecto.
    Separador
    #t_1_6.titulo-segundo
      h2 1.6 Cronograma de actividades
    .col-lg-10.mx-auto.mb-5
      .bloque-texto-a.color-acento-botones.p-4.p-md-5(data-aos="flip-left") 
        .row.m-0.align-items-center.justify-content-between
          .col-lg-5.mb-4.mb-lg-0.mx-auto
            img(src='@/assets/curso/t1/f17.svg' alt="Imagen cronograma")
          .col-lg-7
            .bloque-texto-a__texto.p-4
              p En este se lleva control de las actividades del proyecto, permite conocer el espacio cronológico y estimar tiempos, teniendo así una visión más clara del proyecto.
    p.mb-5 A continuación, se enumeran los pasos que deben estar incluidos en su elaboración:
    .container__m_4.bw2.p-4
      PasosA.color-acento-botones(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Recopilación de datos
            p Durante el proceso de recolección de información se almacenarán los datos y se proyectará un cronograma con fechas de entrega que podrá modificarse durante el desarrollo del proyecto según imprevistos que se puedan presentar.
          .col-md-4.mx-auto
            img(src='@/assets/curso/t1/f18.svg', alt='Imagen relacionada')
        .row
          .col-md-4.mx-auto
            img(src='@/assets/curso/t1/f19.svg', alt='Imagen relacionada')
          .col-md-6.mb-4.mb-md-0
            h3 Las tareas
            p Es importante jerarquizar la realización de las tareas o es posible que varias se puedan hacer al mismo tiempo. Esto se debe tener en cuenta en la realización del cronograma. Además se debe identificar los riesgos asociados para su respectiva gestión.
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Los tiempos
            p n cuanto se determine el orden de realización de las tareas es necesario clarificar cuanto tiempo se necesita para hacerlas y los recursos necesarios para esto.
            p El cronograma requiere de permanente revisión en tanto se va llevando a cabo cada fase del proyecto y con esto será posible ajustar los cambios que se vaya dando durante el proceso.
          .col-md-4.mx-auto
            img(src='@/assets/curso/t1/f20.svg', alt='Imagen relacionada')
    Separador
    #t_1_7.titulo-segundo
      h2 1.7 Presupuestos / Recursos
    p.mb-5 Uno de los grandes problemas a los que se ven enfrentados los proyectos es la gestión y definición de los recursos que se utilizarán a lo largo del proyecto, esta información es de vital importancia y se podría definir en 3 grandes grupos, que se presentan en el siguiente recurso de aprendizaje:
    .container__gbg2.p-4.tarjeta.mb-5
      h3.text-center Presupuestos / Recursos
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/t1/i-infografica2.svg', alt='Necesidades en la planeación de proyectos')
            //figcaption Leyenda de la imagen
        .tarjeta-avatar.infografica2.mb-5(x="15%" y="47%")
          img(src='@/assets/curso/t1/f21.svg' alt='Capital')
          .tarjeta.color-primario
            .p-4
              p.text-center Hace referencia al monto destinado para la adquisición de bienes que se necesitarán para la construcción del proyecto; estos elementos serán ejecutados una sola vez, al comienzo del ciclo del proyecto.
        .tarjeta-avatar.infografica2.mb-5(x="50%" y="97%")
          img(src='@/assets/curso/t1/f22.svg' alt='Producción')
          .tarjeta.color-primario
            .p-4
              p.text-center Para cada actividad establecida, se estiman medios de producción, maquinarias, herramientas, suministros, etc.
        .tarjeta-avatar.infografica2.mb-5(x="85%" y="47%")
          img(src='@/assets/curso/t1/f23.svg' alt='Personal')
          .tarjeta.color-primario
            .p-4.text-center
              p Son las personas que acompañarán todo el proceso, se definen funciones para cada uno y ser asignaran las actividades identificadas por cada perfil. 
              p Cada fase del proyecto requerirá  diferentes perfiles por eso la importancia de ubicar lo mejor posible a todo el personal y definir funciones y responsabilidades.
              
    p En la planeación de proyectos es importante tener presente las etapas y elementos que se presentaron, estas permitirán gestionar las actividades, estimar los recursos, minimizar costos, lograr los objetivos que responden a las necesidades reales.
</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyderAnalisisPrevio: [
      {
        titulo: '',
        texto:
          '<div><p>En esta primera parte de la planificación, donde el enfoque debe estar en el análisis de todas las partes que de alguna manera se verán involucradas, al igual que sus intereses, expectativas y posibilidades de éxito.</p><div class="cajon p-4 color-primario"><p>Es importante tener en cuenta la perspectiva de los diferentes actores que harán parte del proyecto.</p></div></div>',
        imagen: require('@/assets/curso/t1/f1.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'En esta instancia se hace referencia a la situación o el problema al cual vamos a dar solución, estas soluciones son concretas y no deben confundirse con falta de posibilidades o ausencia de capital, por el contrario, estos análisis ayudarán a mostrar relaciones entre causa y efecto, para comenzar a encontrar posibles soluciones o conceptualizar caminos a seguir.',
        imagen: require('@/assets/curso/t1/f2.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Uno de los principales propósitos del análisis previo es establecer de qué manera el proyecto podría buscar resolución a los problemas esbozados, al mismo tiempo hacer evidentes las relaciones de causa - efecto entre estos problemas, encontrando soluciones a las necesidades planteadas en este punto.',
        imagen: require('@/assets/curso/t1/f3.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyderPublicoObjetivo: [
      {
        titulo: '',
        texto:
          'El público objetivo o los beneficiarios son el grupo de personas a quien va dirigido el proyecto o producto, su identificación es clave para poder resolver asertivamente los problemas y necesidades, no perder tiempo y recursos valiosos en llegar a un nicho que se podría pasar por alto, ya que el número de personas impactadas pueden no ser las directamente beneficiadas.',
        imagen: require('@/assets/curso/t1/f4.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Existen diferentes herramientas y fórmulas que ayudarán a escoger al público correcto, además seleccionar muestras que serán indicadores de impacto basados en la población beneficiaria, obteniendo resultados y porcentajes de población, los que serán las personas directamente beneficiadas.',
        imagen: require('@/assets/curso/t1/f5.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          'Se puede identificar la población objetivo a través de diferentes elementos o preguntas, que ayudarán a identificar y aportarán criterios de focalización, todo vendrá de la mano y la naturaleza del problema que se identificó en fases anteriores.',
        imagen: require('@/assets/curso/t1/f6.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    datosSlyderObjetivos1: [
      {
        titulo: 'Algunas prácticas que se deben tener en cuenta son:',
        texto:
          '<div class="cab"><ul><li><p><i class="fas fa-angle-right"></i>  Proponer objetivos y metas realistas.</p></li><li><p><i class="fas fa-angle-right"></i>  Determinar el nivel de importancia de los objetivos para alcanzarlos en su totalidad.</p></li></ul></div>',
        imagen: require('@/assets/curso/t1/i3.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<div class="cab"><ul><li><p><i class="fas fa-angle-right"></i>  Clasificar los objetivos en los que sean similares y complementarios entre sí.</p></li><li><p><i class="fas fa-angle-right"></i>  Plantear un cronograma y fijar una cantidad de recursos para cada fase del proyecto.</p></li></ul></div>',
        imagen: require('@/assets/curso/t1/i4.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<div class="cab"><ul><li><p><i class="fas fa-angle-right"></i>  Usar en el lenguaje de planteamiento verbos en infinitivo y de acción, que permitan medidas y evaluaciones futuras.<br><br>Ejemplo: incrementar, reducir, identificar, listar, diseñar, reparar, etc.</p></li></ul></div>',
        imagen: require('@/assets/curso/t1/f8.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: '',
        texto:
          '<div class="cab"><ul><li><p><i class="fas fa-angle-right"></i>  Es de igual importancia usar cada objetivo de forma separada, ya que cada objetivo puede necesitar una estrategia diferente, con criterios de evaluación totalmente distintos.</p></li></ul></div>',
        imagen: require('@/assets/curso/t1/f9.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Ejemplos de formulación correcta de objetivos:',
        texto:
          '<!--div class="cab"><ul><li><p><i class="fas fa-angle-right"></i>  </p></li></ul></div-->',
        imagen: require('@/assets/curso/t1/f10.svg'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
    ],
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass" scoped></style>
