export interface AirVentProduct {
  id: number;
  name: string;
  model: string;
  price: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
  image: string;
  description: string;
  specifications: {
    size: string;
    material: string;
    colorShade: string;
    dustFilter: string;
    nutScrew: string;
    suitableFans: string;
    density: string;
    approvals: string;
  };
}

export const airVentProducts: AirVentProduct[] = [
  {
    id: 1,
    name: 'Air Vent Economic Series',
    model: 'ETAV-01',
    price: '$24.99',
    rating: 4.8,
    reviews: 1247,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-01.png',
    description: 'High-quality air vent with horizontal slats for optimal ventilation. Features screw fit mounting for secure installation.',
    specifications: {
      size: '130mm x 130mm (screw fit)',
      material: 'ABS',
      colorShade: 'RAL 7035 / RAL-7032',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '4" Sq. 120mm x 120mm x 38mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 2,
    name: 'Air Vent Economic Series',
    model: 'ETAV-02',
    price: '$29.99',
    rating: 4.7,
    reviews: 892,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-02.png',
    description: 'Medium-sized air vent with snap fit design for easy installation. Perfect for various electronic enclosures.',
    specifications: {
      size: '147mm x 147mm (snap fit)',
      material: 'ABS',
      colorShade: 'RAL-7035 / RAL-7032',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '4" Sq. 120mm x 120mm x 38mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 3,
    name: 'Air Vent Economic Series',
    model: 'ETAV-03',
    price: '$39.99',
    rating: 4.6,
    reviews: 2156,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-03.png',
    description: 'Large air vent with screw fit design for heavy-duty applications. Compatible with multiple fan sizes.',
    specifications: {
      size: '184mm x 184mm (screw fit)',
      material: 'ABS',
      colorShade: 'RAL-7035 / RAL-7032',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '4" Sq. 120mm x 120mm x 38mm, 6" Sq. 172mm x 172mm x 55mm, 6" Oval. 172mm x 150mm x 51mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 4,
    name: 'Air Vent Economic Series',
    model: 'ETAV-04',
    price: '$34.99',
    rating: 4.9,
    reviews: 3421,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-04.png',
    description: 'Large air vent with snap fit design for easy installation. Compatible with multiple fan configurations.',
    specifications: {
      size: '204mm x 204mm (snap fit)',
      material: 'ABS',
      colorShade: 'RAL-7035 / RAL-7032',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '4" Sq. 120mm x 120mm x 38mm, 6" Sq. 172mm x 172mm x 55mm, 6" Oval. 172mm x 150mm x 51mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 5,
    name: 'Air Vent Economic Series',
    model: 'ETAV-05',
    price: '$44.99',
    rating: 4.8,
    reviews: 1876,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-05.png',
    description: 'Extra large air vent with screw fit design for industrial applications. Supports multiple fan sizes.',
    specifications: {
      size: '238mm x 238mm (screw fit)',
      material: 'ABS',
      colorShade: 'RAL-7035 / RAL-7032',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '6" Sq. 172mm x 172mm x 55mm, 6" Oval. 172mm x 150mm x 51mm, 8" Sq. 220mm x 220mm x 60mm, 8" Oval. Ø220mm x 60mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 6,
    name: 'Air Vent Economic Series',
    model: 'ETAV-06',
    price: '$49.99',
    rating: 4.7,
    reviews: 2341,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-06.png',
    description: 'Extra large air vent with snap fit design. Perfect for high-airflow applications.',
    specifications: {
      size: '255mm x 255mm (snap fit)',
      material: 'ABS',
      colorShade: 'RAL-7035 / RAL-7032',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '6" Sq. 172mm x 172mm x 55mm, 6" Oval. 172mm x 150mm x 51mm, 8" Sq. 220mm x 220mm x 60mm, 8" Oval. Ø220mm x 60mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 7,
    name: 'Air Vent Economic Series',
    model: 'ETAV-09',
    price: '$64.99',
    rating: 4.8,
    reviews: 1567,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-09.png',
    description: 'Extra large air vent with snap fit design for industrial applications. Maximum airflow capacity.',
    specifications: {
      size: '325mm x 325mm (snap fit)',
      material: 'ABS',
      colorShade: 'RAL 7035 / RAL-7032',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '8" Sq. 220mm x 220mm x 60mm, 8" Oval. Ø220mm x 60mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 8,
    name: 'Air Vent Doom Type',
    model: 'ETAV-204/DT',
    price: '$54.99',
    rating: 4.6,
    reviews: 987,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-204-DT.png',
    description: 'Doom type air vent with enhanced ventilation design. Features circular fan grill for optimal airflow.',
    specifications: {
      size: '204mm x 204mm (snap fit doom type)',
      material: 'ABS',
      colorShade: 'RAL-7035',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '4" Sq. 120mm x 120mm x 38mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 9,
    name: 'Air Vent Economic Series',
    model: 'ETAV-10',
    price: '$19.99',
    rating: 4.4,
    reviews: 3124,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-10.png',
    description: 'Compact air vent with snap fit design for small applications. Perfect for compact electronic enclosures.',
    specifications: {
      size: '117mm x 117mm (snap fit)',
      material: 'ABS',
      colorShade: 'RAL-7035',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '3" Sq. 80mm x 80mm x 25mm, 3.5" Sq. 92mm x 92mm x 25mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 10,
    name: 'Air Vent Doom Type',
    model: 'ETAV-255/DT',
    price: '$69.99',
    rating: 4.7,
    reviews: 1456,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-255-DT.png',
    description: 'Large doom type air vent with enhanced ventilation. Features circular fan grill for maximum airflow.',
    specifications: {
      size: '255mm x 255mm (snap fit doom type)',
      material: 'ABS',
      colorShade: 'RAL-7035',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '6" Sq. 172mm x 172mm x 55mm, 6" Oval. 172mm x 155mm x 51',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 11,
    name: 'Air Vent Economic Series',
    model: 'ETAV-11',
    price: '$16.99',
    rating: 4.3,
    reviews: 2789,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAV-11.png',
    description: 'Small air vent with screw fit design for compact applications. Ideal for small electronic devices.',
    specifications: {
      size: '90mm x 90mm (screw fit)',
      material: 'ABS',
      colorShade: 'RAL 7035',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '3" Sq. 80mm x 80mm x 25mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  },
  {
    id: 12,
    name: 'Air Vent Fan Guard',
    model: 'ETAD-285',
    price: '$74.99',
    rating: 4.9,
    reviews: 1234,
    category: 'Air Vents',
    inStock: true,
    image: '/images/air-vents/ETAD-285.png',
    description: 'Large fan guard with circular opening for maximum airflow. Features X-pattern support bars for structural integrity.',
    specifications: {
      size: '285mm x 285mm (screw fit)',
      material: 'ABS',
      colorShade: 'RAL-7035',
      dustFilter: '180 gsm, 10-15mm thick, 25-30 Micron',
      nutScrew: 'Mild steel (zinc plated)',
      suitableFans: '8" Sq. 220mm x 220mm x 60mm, 8" Round. Ø220mm x 60mm',
      density: 'Approximately 1.20 g/Cm³',
      approvals: 'CE, RoHS'
    }
  }
];

export function getAirVentProductByModel(model: string): AirVentProduct | undefined {
  return airVentProducts.find(product => product.model === model);
}

export function getAllAirVentProducts(): AirVentProduct[] {
  return airVentProducts;
}
