export default {
  global: {
    componenteFormativo: 'Propuesta y concepto gráfico del proyecto multimedia',
    descripcionCurso:
      'Este componente desarrolla el esquema para la construcción de una propuesta de proyecto, donde se comprenden elementos claves como la comunicación, investigación y la representación conceptual y gráfica del proyecto multimedia. Para la elaboración del proyecto se debe partir de la planificación, estableciendo parámetros iniciales, a quién va dirigido, las necesidades y objetivos, la metodología de trabajo, los costos y presupuestos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Planificación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Análisis previo',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Público objetivo',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Necesidades',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Objetivos',
            hash: 't_1_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.5',
            titulo: 'Metodología de trabajo',
            hash: 't_1_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.6',
            titulo: 'Cronograma de actividades',
            hash: 't_1_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.7',
            titulo: 'Presupuestos / Recursos',
            hash: 't_1_7',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Ejecución',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Estructura temática',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Eje o enfoque creativo',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Conceptualización o concepto gráfico',
            hash: 't_2_3',
          },
        ],
      },
    ],
    subMenu: [
      /*
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },*/
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Ejemplo.de. (2017). Ejemplo de cronograma de actividades. Ejemplo.de.',
      link: 'http://www.ejemplo.de/cronograma-de-actividades/',
    },
    {
      referencia:
        'Esan. (2015). Marketing: ¿Cómo definir nuestro público objetivo? Conexionesa.',
      link:
        'https://www.esan.edu.pe/apuntes-empresariales/2015/10/marketing-como-definir-publico-objetivo/',
    },
    {
      referencia:
        'García, Y. (2020). Fundamentos básicos del diseño bidimensional. Calameo.',
      link: 'https://es.calameo.com/books/00664988015f6c26d78e6',
    },
    {
      referencia: 'Gonzales, R. (2020). Mapa mental. Academia.edu.',
      link:
        'https://www.academia.edu/43118741/Un_mapa_mental_es_un_diagrama_usado_para_representar_palabras20200520_82054_vfja71',
    },
    {
      referencia: 'Raffino, M. (2020). Objetivo General. Concepto.',
      link: 'https://concepto.de/objetivo-general',
    },
    {
      referencia: 'Romero, D. (2018). Propuesta de Proyecto Multimedia.',
      link:
        'https://www.scribd.com/doc/17155592/Propuesta-de-Proyecto-Multimedia-Final',
    },
    {
      referencia: 'Soler, R. (2020). Fundamentos de Marketing. Studocu.',
      link:
        'https://www.studocu.com/ca-es/document/universitat-oberta-de-catalunya/fundamentos-de-marketing/practic/pec1-enunciado-pec/12285780/view',
    },
  ],
  glosario: [
    {
      termino: 'BrainStorming',
      significado:
        'Es una estrategia de trabajo en equipo que hace referencia a la lluvia de ideas, buscando un momento creativo para que surjan nuevas ideas.',
    },
    {
      termino: 'Cronograma',
      significado:
        'El cronograma de actividades es una tabla o gráfico en la que se indica el momento en el que se va a realizar una tarea o una labor y el tiempo que se va a dedicar a su desarrollo. (Ejemplo, 2017).',
    },
    {
      termino: 'Composición',
      significado:
        'La composición es un elemento muy importante, esto es, la disposición de los distintos elementos dentro del espacio visual o formato de manera equilibrada y ordenada, con el fin de transmitir o comunicar un mensaje al público objetivo. (García, 2020).',
    },
    {
      termino: 'Mapa mental',
      significado:
        'Un mapa mental es un diagrama usado para representar palabras, ideas, tareas, lecturas, dibujos, u otros conceptos ligados y dispuestos radicalmente a través de una palabra clave o de una idea central. (Gonzales, 2020).',
    },
    {
      termino: 'Marketing o mercadeo',
      significado:
        'Marketing es la ciencia y el arte de explorar, crear y entregar valor para satisfacer necesidades de un mercado objetivo con lucro. El Marketing identifica necesidades y deseos no realizados. (Mendoza Quispe y Roncoroni, 2020).',
    },
    {
      termino: 'Necesidad',
      significado:
        'Es toda aquella aspiración por parte de los consumidores en términos de bienes o servicios. Es decir, son aquellos puntos para satisfacer por parte de las empresas mediante el ofrecimiento de sus productos en el mercado. (Soler, 2020).',
    },
    {
      termino: 'Público objetivo',
      significado:
        'El público objetivo, también conocido como target, es el grupo de personas al cual está dirigida una marca, producto o campaña. (Esan. 2015).',
    },
  ],
  complementario: [
    {
      texto:
        'Perú Designer. (2016). Ejemplos Proyectos Multimedia. [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=LBQlRtLr8Iw',
    },
    {
      texto:
        'Arce, V. (2015). Pasos para realizar un Proyecto multimedia.  [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DCZJ6YLXyQk',
    },
    {
      texto: 'Profesor TX. (2012). Manejo de Proyectos. [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=fNNzkVpJYyU',
    },
    {
      texto:
        'Centro de enseñanza y aprendizaje. (2017). Planificación de proyectos. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=r4IUTGV2sB0',
    },
    {
      texto:
        'Formación Multimodal. (s.f.). ¿Qué es un mapa conceptual y cómo se elabora? [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=q8fvXaUX5f4',
    },
    {
      texto:
        'Espacio Business Media. (2020). Presupuesto de marketing Digital. [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=H-DcBAK-QqI',
    },
    {
      texto: 'Galdanez, C. (2018). Estructura temática. [video]. YouTube.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=oWbr0pkj9iQ',
    },
    {
      texto: 'Estoque Films. (2017). Enfoque creativo. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=yftcMkk0FsE',
    },
    {
      texto:
        'Trino. (2019). ¿Cual es el SIGNIFICADO de CONCEPTUALIZAR en DISEÑO GRÁFICO ? - Explicación Parte 1. [video]. YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=VJSxa7YOJxc',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Eduardo José Velasco Acevedo',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Juan Manuel Reyes Ramírez',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Carlos Andrés Suescun Lesmes',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Olga Lucía Mogollón Carvajal',
        cargo: 'Experto temático',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
      {
        nombre: 'Giovanna Escobar',
        cargo: 'Diseñadora Instruccional',
        centro: 'Centro de Servicios de Salud - Regional Antioquia',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Jhon Jairo Rodríguez Pérez',
        cargo: 'Diseñador y evaluador instruccional',
        centro:
          'Centro para la Industria de la Comunicación Gráfica - Regional Distrito Capital',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Marcela González',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Walter Roa Serrano',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodríguez Rodríguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Wilson Andrés Arenales Cáceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona ',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
