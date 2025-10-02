import Link from 'next/link';
import { ArrowRight, Cpu, Zap, Shield, Award, Star, Truck, Headphones, Clock } from 'lucide-react';

export default function Home() {
  const featuredProducts = [
    {
      id: 1,
      name: 'Arduino Uno R3',
      price: '$24.99',
      image: '/api/placeholder/300/200',
      rating: 4.8,
      reviews: 1247,
      category: 'Development Boards'
    },
    {
      id: 2,
      name: 'Raspberry Pi 4 Model B',
      price: '$75.00',
      image: '/api/placeholder/300/200',
      rating: 4.9,
      reviews: 892,
      category: 'Single Board Computers'
    },
    {
      id: 3,
      name: 'ESP32 Development Board',
      price: '$12.99',
      image: '/api/placeholder/300/200',
      rating: 4.7,
      reviews: 2156,
      category: 'Microcontrollers'
    },
    {
      id: 4,
      name: 'Breadboard 830 Points',
      price: '$8.50',
      image: '/api/placeholder/300/200',
      rating: 4.6,
      reviews: 3421,
      category: 'Prototyping'
    }
  ];

  const categories = [
    { name: 'Semiconductors', icon: Cpu, count: '2,500+', color: 'bg-blue-500' },
    { name: 'Passive Components', icon: Zap, count: '5,000+', color: 'bg-green-500' },
    { name: 'Connectors', icon: Shield, count: '1,200+', color: 'bg-purple-500' },
    { name: 'Tools & Equipment', icon: Award, count: '800+', color: 'bg-orange-500' }
  ];

  const features = [
    {
      icon: Truck,
      title: 'Global Shipping',
      description: 'Worldwide delivery to 120+ countries. Free shipping on orders over $50 with express options.'
    },
    {
      icon: Shield,
      title: 'Quality Guaranteed',
      description: 'All products tested and verified for quality and authenticity. ISO certified processes.'
    },
    {
      icon: Headphones,
      title: '24/7 Global Support',
      description: 'Round-the-clock technical support from our international engineering team.'
    },
    {
      icon: Clock,
      title: 'Real-time Global Inventory',
      description: 'Live stock updates across all international warehouses and distribution centers.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Global Leader in
                <span className="text-blue-600"> Electronic Components</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Your trusted international partner for premium electronic components, semiconductors, 
                and cutting-edge development tools. Empowering innovation across 120+ countries 
                with unmatched quality and expertise.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/products"
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center"
                >
                  Browse Products
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/about"
                  className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200 text-center"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-lg p-4 h-24 flex items-center justify-center">
                      <Cpu className="h-8 w-8 text-blue-600" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">Over 50,000+ components in global stock</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Shop by Category</h2>
            <p className="text-lg text-gray-600">Find exactly what you need from our comprehensive selection</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((category, index) => (
              <Link
                key={index}
                href={`/categories/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="group bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200"
              >
                <div className={`w-16 h-16 ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600">{category.count} products</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Products</h2>
            <p className="text-lg text-gray-600">Popular components loved by our customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
                <div className="aspect-w-16 aspect-h-12 bg-gray-200 p-8 flex items-center justify-center">
                  <Cpu className="h-16 w-16 text-gray-400 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <div className="p-6">
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
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="/products"
              className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
            >
              View All Products
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Flux?</h2>
            <p className="text-lg text-gray-600">We're committed to providing the best experience for our customers</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Go Global?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join over 500,000 engineers, manufacturers, and innovators worldwide who trust Flux 
            for their electronic component needs across 120+ countries.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Shopping
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}