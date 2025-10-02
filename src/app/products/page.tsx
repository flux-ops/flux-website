'use client';

import { useState } from 'react';
import { Search, Filter, Grid, List, Star, ShoppingCart, Heart } from 'lucide-react';
import Link from 'next/link';

interface Product {
  id: number;
  name: string;
  price: string;
  originalPrice?: string;
  rating: number;
  reviews: number;
  category: string;
  inStock: boolean;
  image: string;
  description: string;
  specifications: string[];
}

const products: Product[] = [
  {
    id: 1,
    name: 'Arduino Uno R3',
    price: '$24.99',
    originalPrice: '$29.99',
    rating: 4.8,
    reviews: 1247,
    category: 'Development Boards',
    inStock: true,
    image: '/api/placeholder/300/200',
    description: 'The Arduino Uno R3 is a microcontroller board based on the ATmega328P.',
    specifications: ['ATmega328P microcontroller', '14 digital I/O pins', '6 analog inputs', '16 MHz crystal oscillator']
  },
  {
    id: 2,
    name: 'Raspberry Pi 4 Model B',
    price: '$75.00',
    rating: 4.9,
    reviews: 892,
    category: 'Single Board Computers',
    inStock: true,
    image: '/api/placeholder/300/200',
    description: 'The Raspberry Pi 4 Model B is the latest computer board from Raspberry Pi.',
    specifications: ['Quad-core 64-bit ARM Cortex-A72', '4GB LPDDR4-3200 SDRAM', 'Dual-band 802.11ac wireless', 'Bluetooth 5.0']
  },
  {
    id: 3,
    name: 'ESP32 Development Board',
    price: '$12.99',
    rating: 4.7,
    reviews: 2156,
    category: 'Microcontrollers',
    inStock: true,
    image: '/api/placeholder/300/200',
    description: 'ESP32 is a series of low-cost, low-power system on a chip microcontrollers.',
    specifications: ['Dual-core 32-bit processor', 'WiFi and Bluetooth', '34 GPIO pins', '520KB SRAM']
  },
  {
    id: 4,
    name: 'Breadboard 830 Points',
    price: '$8.50',
    rating: 4.6,
    reviews: 3421,
    category: 'Prototyping',
    inStock: true,
    image: '/api/placeholder/300/200',
    description: 'High-quality breadboard perfect for prototyping and testing circuits.',
    specifications: ['830 tie points', 'Self-adhesive backing', 'Reusable', 'Compatible with jumper wires']
  },
  {
    id: 5,
    name: 'LED Strip WS2812B',
    price: '$15.99',
    rating: 4.5,
    reviews: 1876,
    category: 'LEDs & Lighting',
    inStock: false,
    image: '/api/placeholder/300/200',
    description: 'Addressable RGB LED strip with individual pixel control.',
    specifications: ['60 LEDs per meter', '5V operation', 'Addressable', 'Waterproof IP65']
  },
  {
    id: 6,
    name: 'Servo Motor SG90',
    price: '$6.99',
    rating: 4.4,
    reviews: 2341,
    category: 'Motors & Actuators',
    inStock: true,
    image: '/api/placeholder/300/200',
    description: 'Micro servo motor perfect for robotics and automation projects.',
    specifications: ['180° rotation', '4.8V-6V operation', '1.8kg-cm torque', '0.1s/60° speed']
  },
  {
    id: 7,
    name: 'Air Vent ETAV-01',
    price: '$24.99',
    rating: 4.8,
    reviews: 1247,
    category: 'Air Vents',
    inStock: true,
    image: '/api/placeholder/300/200',
    description: 'High-quality air vent with horizontal slats for optimal ventilation.',
    specifications: ['130mm x 130mm', 'ABS Material', 'RAL 7035/7032', 'CE, RoHS Certified']
  },
  {
    id: 8,
    name: 'Air Vent ETAV-04',
    price: '$34.99',
    rating: 4.7,
    reviews: 892,
    category: 'Air Vents',
    inStock: true,
    image: '/api/placeholder/300/200',
    description: 'Larger air vent with snap fit design for easy installation.',
    specifications: ['204mm x 204mm', 'Snap Fit', 'Multi-fan compatible', 'Dust filter included']
  },
  {
    id: 9,
    name: 'Air Vent ETAV-05',
    price: '$44.99',
    rating: 4.9,
    reviews: 3421,
    category: 'Air Vents',
    inStock: true,
    image: '/api/placeholder/300/200',
    description: 'Large air vent with screw fit design for heavy-duty applications.',
    specifications: ['238mm x 238mm', 'Screw Fit', 'Industrial grade', 'Multiple fan sizes']
  }
];

const categories = [
  'All Categories',
  'Development Boards',
  'Single Board Computers',
  'Microcontrollers',
  'Prototyping',
  'LEDs & Lighting',
  'Motors & Actuators',
  'Sensors',
  'Connectors',
  'Passive Components',
  'Air Vents'
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('name');

  const filteredProducts = products
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'All Categories' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-low':
          return parseFloat(a.price.replace('$', '')) - parseFloat(b.price.replace('$', ''));
        case 'price-high':
          return parseFloat(b.price.replace('$', '')) - parseFloat(a.price.replace('$', ''));
        case 'rating':
          return b.rating - a.rating;
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Global Electronic Components</h1>
          <p className="text-lg text-gray-600">Find the perfect components for your next international project from our 50,000+ product catalog</p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* Search Bar */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            </div>

            {/* Category Filter */}
            <div className="lg:w-64">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>

            {/* Sort By */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="name">Sort by Name</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex border border-gray-300 rounded-lg overflow-hidden">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-3 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                <Grid className="h-5 w-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-3 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'}`}
              >
                <List className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {/* Products Grid/List */}
        <div className={viewMode === 'grid' 
          ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'
          : 'space-y-6'
        }>
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className={`bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden ${
                viewMode === 'list' ? 'flex' : ''
              }`}
            >
              {/* Product Image */}
              <div className={`${viewMode === 'list' ? 'w-48 h-48' : 'aspect-w-16 aspect-h-12'} bg-gray-200 flex items-center justify-center relative`}>
                <div className="w-16 h-16 bg-gray-300 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📦</span>
                </div>
                {!product.inStock && (
                  <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      Out of Stock
                    </span>
                  </div>
                )}
                <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 transition-colors duration-200">
                  <Heart className="h-4 w-4 text-gray-600" />
                </button>
              </div>

              {/* Product Info */}
              <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                <div className="flex items-center mb-2">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                    ))}
                  </div>
                  <span className="ml-2 text-sm text-gray-600">({product.reviews})</span>
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-3">{product.category}</p>
                
                {viewMode === 'list' && (
                  <p className="text-gray-600 mb-4">{product.description}</p>
                )}

                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-lg text-gray-500 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                <div className="flex space-x-2">
                  <button 
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 inline mr-2" />
                    Add to Cart
                  </button>
                  {product.category === 'Air Vents' ? (
                    <Link 
                      href={`/categories/air-vents/${product.name.split(' ').pop()}`}
                      className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      View Details
                    </Link>
                  ) : (
                    <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                      View Details
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">Try adjusting your search or filter criteria</p>
            <button
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('All Categories');
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
