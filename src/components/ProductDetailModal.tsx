'use client';

import { useState } from 'react';
import { X, ShoppingCart, Heart, Star, CheckCircle, Wind, Shield, Award } from 'lucide-react';
import { AirVentProduct } from '@/lib/airVentProducts';

interface ProductDetailModalProps {
  product: AirVentProduct;
  isOpen: boolean;
  onClose: () => void;
}

export default function ProductDetailModal({ product, isOpen, onClose }: ProductDetailModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-lg shadow-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{product.name} - {product.model}</h2>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Product Image */}
              <div className="space-y-4">
                <div className="aspect-square bg-gray-100 rounded-lg p-8 flex items-center justify-center">
                  <div className="w-24 h-24 bg-gray-200 rounded-lg flex items-center justify-center">
                    <Wind className="h-12 w-12 text-gray-400" />
                  </div>
                </div>
              </div>

              {/* Product Info */}
              <div className="space-y-6">
                {/* Rating and Price */}
                <div>
                  <div className="flex items-center mb-2">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`h-4 w-4 ${i < Math.floor(product.rating) ? 'fill-current' : ''}`} />
                      ))}
                    </div>
                    <span className="ml-2 text-sm text-gray-600">({product.reviews} reviews)</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      product.inStock 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-red-100 text-red-800'
                    }`}>
                      {product.inStock ? 'In Stock' : 'Out of Stock'}
                    </span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-600">{product.description}</p>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <button 
                    className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center ${
                      product.inStock
                        ? 'bg-blue-600 text-white hover:bg-blue-700'
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                    }`}
                    disabled={!product.inStock}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </button>
                  <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors duration-200">
                    <Heart className="h-4 w-4" />
                  </button>
                </div>

                {/* Features */}
                <div className="grid grid-cols-3 gap-4 py-4 border-t border-gray-200">
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Shield className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs font-medium text-gray-900">Certified</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Wind className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs font-medium text-gray-900">Airflow</p>
                  </div>
                  <div className="text-center">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                      <Award className="h-5 w-5 text-blue-600" />
                    </div>
                    <p className="text-xs font-medium text-gray-900">Quality</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Specifications */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Specifications</h3>
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-gray-900">Size:</span>
                    <span className="ml-2 text-gray-600">{product.specifications.size}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Material:</span>
                    <span className="ml-2 text-gray-600">{product.specifications.material}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Color Shade:</span>
                    <span className="ml-2 text-gray-600">{product.specifications.colorShade}</span>
                  </div>
                  <div>
                    <span className="font-medium text-gray-900">Density:</span>
                    <span className="ml-2 text-gray-600">{product.specifications.density}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium text-gray-900">Suitable Fans:</span>
                    <span className="ml-2 text-gray-600">{product.specifications.suitableFans}</span>
                  </div>
                  <div className="md:col-span-2">
                    <span className="font-medium text-gray-900">Approvals:</span>
                    <span className="ml-2 text-gray-600 flex items-center">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-1" />
                      {product.specifications.approvals}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
