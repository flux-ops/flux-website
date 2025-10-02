import Link from 'next/link';
import { Cpu, Zap, Shield, Award, Wrench, Lightbulb, Gauge, Plug, Microchip, CircuitBoard, Wind } from 'lucide-react';

export default function CategoriesPage() {
  const categories = [
    {
      name: 'Semiconductors',
      description: 'Transistors, diodes, integrated circuits, and other semiconductor devices',
      icon: Cpu,
      count: '2,500+',
      color: 'bg-blue-500',
      href: '/categories/semiconductors',
      products: ['Microcontrollers', 'Memory Chips', 'Power Management', 'RF Components']
    },
    {
      name: 'Passive Components',
      description: 'Resistors, capacitors, inductors, and other passive electronic components',
      icon: Zap,
      count: '5,000+',
      color: 'bg-green-500',
      href: '/categories/passive-components',
      products: ['Resistors', 'Capacitors', 'Inductors', 'Transformers']
    },
    {
      name: 'Connectors',
      description: 'Electrical connectors, cables, and interconnect solutions',
      icon: Plug,
      count: '1,200+',
      color: 'bg-purple-500',
      href: '/categories/connectors',
      products: ['USB Connectors', 'Audio Jacks', 'Power Connectors', 'RF Connectors']
    },
    {
      name: 'Tools & Equipment',
      description: 'Testing equipment, soldering tools, and electronic workbench essentials',
      icon: Wrench,
      count: '800+',
      color: 'bg-orange-500',
      href: '/categories/tools',
      products: ['Multimeters', 'Oscilloscopes', 'Soldering Stations', 'Breadboards']
    },
    {
      name: 'Development Boards',
      description: 'Microcontroller and single-board computer development platforms',
      icon: CircuitBoard,
      count: '300+',
      color: 'bg-indigo-500',
      href: '/categories/development-boards',
      products: ['Arduino Boards', 'Raspberry Pi', 'ESP32', 'STM32']
    },
    {
      name: 'Sensors',
      description: 'Environmental, motion, and specialized sensing components',
      icon: Gauge,
      count: '1,800+',
      color: 'bg-red-500',
      href: '/categories/sensors',
      products: ['Temperature Sensors', 'Motion Sensors', 'Light Sensors', 'Pressure Sensors']
    },
    {
      name: 'LEDs & Lighting',
      description: 'LEDs, lighting solutions, and optoelectronic components',
      icon: Lightbulb,
      count: '1,500+',
      color: 'bg-yellow-500',
      href: '/categories/leds',
      products: ['LED Strips', 'LED Modules', 'Optocouplers', 'Displays']
    },
    {
      name: 'Motors & Actuators',
      description: 'Motors, servos, steppers, and mechanical actuation components',
      icon: Shield,
      count: '600+',
      color: 'bg-teal-500',
      href: '/categories/motors',
      products: ['Servo Motors', 'Stepper Motors', 'DC Motors', 'Linear Actuators']
    },
    {
      name: 'Power Supplies',
      description: 'Voltage regulators, power modules, and energy management solutions',
      icon: Zap,
      count: '400+',
      color: 'bg-pink-500',
      href: '/categories/power',
      products: ['Voltage Regulators', 'Power Modules', 'Batteries', 'Chargers']
    },
    {
      name: 'Prototyping',
      description: 'Breadboards, jumper wires, and prototyping accessories',
      icon: Award,
      count: '200+',
      color: 'bg-cyan-500',
      href: '/categories/prototyping',
      products: ['Breadboards', 'Jumper Wires', 'Prototyping Boards', 'Headers']
    },
    {
      name: 'Air Vents',
      description: 'High-quality air vents and ventilation solutions for electronic enclosures',
      icon: Wind,
      count: '50+',
      color: 'bg-slate-500',
      href: '/categories/air-vents',
      products: ['Economic Series', 'Doom Type', 'Snap Fit', 'Screw Fit']
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Global Product <span className="text-blue-600">Categories</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive international range of electronic components organized by category. 
              Find exactly what you need for your next global project from our 50,000+ product catalog.
            </p>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={category.href}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:-translate-y-1"
              >
                <div className="flex items-start mb-4">
                  <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200">
                      {category.name}
                    </h3>
                    <p className="text-sm text-blue-600 font-medium">{category.count} products</p>
                  </div>
                </div>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {category.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="text-sm font-semibold text-gray-900">Popular Products:</h4>
                  <div className="flex flex-wrap gap-2">
                    {category.products.map((product, productIndex) => (
                      <span
                        key={productIndex}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="mt-4 flex items-center text-blue-600 group-hover:text-blue-700 font-medium">
                  <span className="text-sm">Browse Category</span>
                  <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Most Popular Categories</h2>
            <p className="text-lg text-gray-600">These are our customers' favorite product categories</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {categories.slice(0, 3).map((category, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 ${category.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                  <category.icon className="h-10 w-10 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <Link
                  href={category.href}
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Shop Now
                  <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Can't Find What You're Looking For?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Our team of experts can help you find the right components for your project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Contact Our Experts
            </Link>
            <Link
              href="/products"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Browse All Products
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
