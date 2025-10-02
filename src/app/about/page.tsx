import { Award, Users, Globe, Target, CheckCircle, Lightbulb, Shield, Zap } from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '50,000+', label: 'Products in Stock', icon: Award },
    { number: '500,000+', label: 'Global Customers', icon: Users },
    { number: '120+', label: 'Countries Served', icon: Globe },
    { number: '15+', label: 'Years of Excellence', icon: Target }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: 'Quality First',
      description: 'Every component is tested and verified to meet the highest standards before reaching our customers.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We stay ahead of the curve by constantly updating our inventory with the latest technologies.'
    },
    {
      icon: Shield,
      title: 'Reliability',
      description: 'Our customers trust us to deliver the right components, on time, every time.'
    },
    {
      icon: Zap,
      title: 'Speed',
      description: 'Fast processing, same-day shipping, and real-time inventory updates for maximum efficiency.'
    }
  ];

  const team = [
    {
      name: 'Bhavesh Vidyarthi',
      role: 'CEO & Founder',
      image: '/api/placeholder/200/200',
      bio: 'Visionary leader with 20+ years in global electronics industry. Former senior executive at leading tech corporations, driving innovation in electronic components distribution worldwide.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO',
      image: '/api/placeholder/200/200',
      bio: 'Expert in embedded systems and IoT. PhD in Electrical Engineering from MIT with 15+ years in cutting-edge technology development.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Global Operations',
      image: '/api/placeholder/200/200',
      bio: 'International supply chain specialist with 15+ years experience managing global logistics across 50+ countries.'
    },
    {
      name: 'David Kim',
      role: 'Lead Engineer',
      image: '/api/placeholder/200/200',
      bio: 'Hardware design expert and technical support lead for our global engineering team, specializing in next-generation electronic solutions.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              About <span className="text-blue-600">Flux Electronics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We're passionate about empowering engineers, hobbyists, and manufacturers 
              with the highest quality electronic components and exceptional service.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009 by Bhavesh Vidyarthi, Flux Electronics began with a visionary mission: 
                  to revolutionize global access to high-quality electronic components. What started as 
                  an innovative startup has grown into one of the world's most trusted international 
                  electronics distribution companies.
                </p>
                <p>
                  Under Bhavesh's leadership, our team of global engineers and electronics experts 
                  recognized the critical challenges faced by developers, manufacturers, and innovators 
                  worldwide in sourcing reliable, authentic components. We set out to create a comprehensive 
                  solution that not only provides access to premium parts but also delivers the technical 
                  expertise and support needed for global success.
                </p>
                <p>
                  Today, we serve customers in over 120 countries, from individual makers and startups 
                  to Fortune 500 companies and government agencies. Our commitment to quality, innovation, 
                  and exceptional customer service has made us the preferred partner for electronic 
                  components worldwide, driving technological advancement across all industries.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="bg-gray-100 rounded-lg p-4 h-24 flex items-center justify-center">
                      <Award className="h-8 w-8 text-blue-600" />
                    </div>
                  ))}
                </div>
                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-500">Award-winning service since 2009</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600">The principles that guide everything we do</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To empower innovation by providing engineers, hobbyists, and manufacturers 
                with access to the highest quality electronic components, backed by 
                exceptional service and technical expertise.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6">
                <Lightbulb className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be the world's most trusted partner for electronic components, 
                enabling breakthrough innovations and accelerating technological 
                progress across all industries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-600">The passionate people behind Flux Electronics</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of satisfied customers who trust Flux for their electronic component needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/products"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Browse Products
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              Contact Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
