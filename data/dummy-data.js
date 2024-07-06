import Category from '../models/category';
import Product from '../models/product';

export const CATEGORIES = [
  new Category('c1', 'Comida para Perros', '#f5428d'),
  new Category('c2', 'Comida para Gatos', '#f54242'),
  new Category('c3', 'Medicina para Animales', '#f5a442'),
  new Category('c4', 'Correas para Mascotas', '#f5d142'),
  new Category('c5', 'Ropa para Animales', '#368dff')
];

export const PRODUCTS = [
  new Product(
    'p1',
    ['c1'],
    'Croquetas para Perro Adulto',
    'premium',
    'disponible',
    'https://www.pedigree.cl/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf1511/files/2022-10/7797453972536-product-image-1.png',
    50,
    [
      'Carne de pollo',
      'Arroz',
      'Vitaminas',
      'Minerales'
    ],
    [
      'Proveer 2 tazas al día para perros medianos.',
      'Asegurarse de que el perro tenga siempre agua fresca.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p2',
    ['c2'],
    'Alimento Húmedo para Gato',
    'económico',
    'disponible',
    'https://www.whiskas.com.mx/sites/g/files/fnmzdf4861/files/2023-11/70646024167-product-image-1.png',
    20,
    [
      'Pescado',
      'Gelatina',
      'Vitaminas'
    ],
    [
      'Servir una lata por cada 4kg de peso del gato al día.',
      'Refrigerar la porción no utilizada.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p3',
    ['c3'],
    'Antipulgas para Perros y Gatos',
    'premium',
    'disponible',
    'https://mx.virbac.com/files/live/sites/virbac-mx/files/mexico%20correctas/productos/600/comfortis_140mg.png',
    30,
    [
      'Fipronil',
      'Metopreno'
    ],
    [
      'Aplicar una pipeta en la base del cuello del animal una vez al mes.',
      'No bañar al animal 48 horas antes y después de la aplicación.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p4',
    ['c4'],
    'Correa Extensible para Perro',
    'lujoso',
    'disponible',
    'https://www.superpet.club/15347-large_default/correa-extensible-perro-negro-azul-flexi-cordon.jpg',
    25,
    [
      'Nylon',
      'Metal'
    ],
    [
      'Ajustar la longitud de la correa según sea necesario.',
      'Enganchar al collar del perro de manera segura.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p5',
    ['c5'],
    'Suéter de Invierno para Gato',
    'económico',
    'disponible',
    'https://png.pngtree.com/png-clipart/20231204/original/pngtree-a-cute-snow-cat-with-colorful-sweater-clipart-png-image_13770923.png',
    15,
    [
      'Lana',
      'Poliéster'
    ],
    [
      'Seleccionar la talla adecuada para el gato.',
      'Lavar a mano con agua fría.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p6',
    ['c1'],
    'Snacks de Pollo para Perros',
    'premium',
    'disponible',
    'https://florayfauna.vtexassets.com/arquivos/ids/159239/Snack-de-Pollo-para-Perros-Barker-100-g-SNACK-DE-POLLO-PARA-PERROS-100GR-BAKER-1-5606.jpg?v=637620959333070000',
    12,
    [
      'Carne de pollo',
      'Harina de trigo',
      'Aceite de girasol'
    ],
    [
      'Dar como premio o entre comidas principales.',
      'Conservar en un lugar fresco y seco.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p7',
    ['c1'],
    'Alimento Balanceado para Cachorros',
    'económico',
    'disponible',
    'https://tiendanestle.pe/cdn/shop/products/7613287613264.jpg?v=1654535719',
    40,
    [
      'Carne de pollo',
      'Arroz integral',
      'Aceite de pescado'
    ],
    [
      'Adecuado para cachorros de razas grandes.',
      'Garantiza un desarrollo saludable.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p8',
    ['c3'],
    'Shampoo Antiparasitario para Perros',
    'premium',
    'disponible',
    'https://cdnx.jumpseller.com/stylopets/image/29517706/resize/1200/1200?1668636976',
    28,
    ['Piretrinas naturales', 'Aloe vera', 'Vitaminas E y B5'],
    ['Elimina pulgas y garrapatas de manera efectiva.', 'Deja el pelaje suave y brillante.'],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p9',
    ['c4'],
    'Arnés Reflectante para Perro',
    'lujoso',
    'disponible',
    'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/4486/PMP20000235657/full_image-1.png',
    30,
    ['Nylon resistente', 'Reflectante', 'Acolchado cómodo'],
    ['Diseño ajustable para máximo confort.', 'Visibilidad mejorada en condiciones de poca luz.'],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p10',
    ['c5'],
    'Capa Impermeable para Perro',
    'económico',
    'disponible',
    'https://mariaceposada.com/cdn/shop/products/Screen_Shot_2019-07-21_at_11.32.03_AM.png?v=1622475834',
    18,
    ['Poliéster impermeable', 'Forro de algodón', 'Cierre ajustable'],
    ['Protege al perro de la lluvia y el viento.', 'Fácil de poner y quitar.'],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p11',
    ['c3'],
    'Suplemento Vitamínico para Perros y Gatos',
    'premium',
    'disponible',
    'https://mascotify.pe/wp-content/uploads/2021/12/Vetnil-Pelo-Derme-1500-DHA-EPA-Suplemento-para-perros-y-gatos.png',
    25,
    [
      'Vitaminas A, D, E',
      'Ácido fólico',
      'Biotina'
    ],
    [
      'Mejora el estado general de salud.',
      'Administrar según las indicaciones del veterinario.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p12',
    ['c3'],
    'Antidiarreico para Mascotas',
    'económico',
    'disponible',
    'https://lafarmascota.com/wp-content/uploads/2020/07/Producto_logo_5cf9a5fca7830.png',
    18,
    [
      'Pectina',
      'Diarrest',
      'Orégano'
    ],
    [
      'Controla y previene la diarrea en perros y gatos.',
      'Dosis según peso del animal.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p13',
    ['c4'],
    'Arnés Ajustable para Perros',
    'lujoso',
    'disponible',
    'https://rimage.ripley.com.pe/home.ripley/Attachment/MKP/1361/PMP00001921518/full_image-1.png',
    30,
    [
      'Nylon resistente',
      'Hebilla de metal',
      'Reflectante'
    ],
    [
      'Proporciona seguridad y control durante los paseos.',
      'Ajustable para un ajuste cómodo.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p14',
    ['c4'],
    'Correa Extensible para Gatos',
    'económico',
    'disponible',
    'https://www.animalia.com.ar/wp-content/uploads/2022/11/Diseno-sin-titulo-1.png',
    20,
    [
      'Nylon',
      'Metal'
    ],
    [
      'Permite libertad de movimiento para gatos en paseos.',
      'Cordón resistente y seguro.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p15',
    ['c5'],
    'Chaqueta Impermeable para Perros',
    'premium',
    'disponible',
    'https://hot-dogz.com/wp-content/uploads/2021/06/abrigo-impermeable-1.jpg',
    45,
    [
      'Poliéster',
      'Forro polar',
      'Material impermeable'
    ],
    [
      'Protege al perro del viento y la lluvia.',
      'Adecuada para actividades al aire libre.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p16',
    ['c1'],
    'Alimento Hipoalergénico para Perros',
    'premium',
    'disponible',
    'https://oechsle.vteximg.com.br/arquivos/ids/12018972-1000-1000/imageUrl_1.jpg?v=638020042717600000',
    60,
    [
      'Cordero',
      'Arroz integral',
      'Aceite de salmón'
    ],
    [
      'Ideal para perros con sensibilidades alimentarias.',
      'Promueve una digestión saludable.'
    ],
    true,
    true,
    true,
    true
  ),
  new Product(
    'p17',
    ['c1'],
    'Premios para Entrenamiento de Perros',
    'económico',
    'disponible',
    'https://repo.ordenaris.com/pawerful/producto/1040/1088/galeria/ynwkujgapdtdkvkopnyc.png',
    10,
    [
      'Pollo',
      'Harina de trigo',
      'Vegetales'
    ],
    [
      'Recompensa positiva durante el entrenamiento.',
      'Fáciles de llevar y romper.'
    ],
    true,
    true,
    true,
    false
  ),
  new Product(
    'p18',
    ['c2'],
    'Alimento Seco para Gatitos',
    'premium',
    'disponible',
    'https://www.whiskas.com.ar/cdn-cgi/image/format=auto,q=90/sites/g/files/fnmzdf4921/files/2022-12/7797453972260-product-image-1.png',
    30,
    [
      'Pollo',
      'Arroz',
      'Leche maternizada'
    ],
    [
      'Formulado para gatitos en crecimiento.',
      'Fórmula rica en nutrientes.'
    ],
    true,
    true,
    true,
    true
  )
];
