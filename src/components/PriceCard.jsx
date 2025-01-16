import React, { useState } from 'react';
import { Check, Link, Wallet, Building2, Heart } from 'lucide-react';
import HeartImg from "../assets/Heart.png"
import LinkImg from "../assets/Rocket.png"
import BagImg from '../assets/Bag.png'
import BuildingImg from "../assets/Building.png"

function PriceCard() {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <div className="min-h-screen bg-white py-16 px-4">


      {/* Billing Toggle */}
      <div className="flex justify-center items-center gap-3 mb-12">
        <button 
          className={`font-geist px-4 py-2 rounded-full transition-colors ${
            !isYearly ? 'bg-blue-50 text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setIsYearly(false)}
        >
          Monthly
        </button>
        <div 
          className="w-16 h-8 rounded-full bg-gray-200 relative cursor-pointer"
          onClick={() => setIsYearly(!isYearly)}
        >
          <div className={`absolute top-1 h-6 w-6 rounded-full bg-white shadow-md transition-transform duration-300 ${
            isYearly ? 'translate-x-9' : 'translate-x-1'
          }`} />
        </div>
        <button 
          className={`font-geist px-4 py-2 rounded-full transition-colors flex items-center gap-2 ${
            isYearly ? 'bg-blue-50 text-blue-600' : 'text-gray-500'
          }`}
          onClick={() => setIsYearly(true)}
        >
          Yearly
          <span className="text-red-500 text-sm font-medium">Save 20%</span>
        </button>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-8 px-4 mt-28">
        {/* Free Plan */}
        <div className="border rounded-2xl p-6 relative hover:border-gray-400 transition-colors">
          <img src={HeartImg.src} alt="" />
          <h3 className="font-geist text-2xl font-bold mb-2">Free</h3>
          <p className="font-geist font-medium text-gray-500 text-sm mb-4">
            To grow referrals and leads of business looking
          </p>
          <div className="mb-6">
            <span className="font-geist text-3xl font-bold">$0</span>
            <span className="font-geist text-gray-500">/month</span>
          </div>
          <button className="font-geist text-lg font-semibold w-full py-2.5 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
            Get Started for Free
          </button>
          <div className="font-geist text-md font-medium mt-6">
            <p className="mb-4">Features</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-gray-400" />
                Data Sources: Up to 3 Accounts
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-gray-400" />
                1 Workspace
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-gray-400" />
                1 User
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-gray-400" />
                Analytics Dashboard
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-gray-400" />
                Google Add-on
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-gray-400" />
                Reporting
              </li>
            </ul>
          </div>
        </div>

        {/* Starter Plan */}
        <div className="border rounded-2xl p-6 relative bg-blue-50 border-blue-100 hover:bg-blue-100 transition-colors group">
          <div className="absolute -top-3 right-6 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-geist font-medium group-hover:scale-110 transition-transform">
            Most Popular
          </div>
          <img src={LinkImg.src} alt="" />
          <h3 className="font-geist text-2xl font-bold mb-2">Starter</h3>
          <p className="font-geist font-medium text-gray-500 text-sm mb-4">
            To grow referrals and leads of business looking
          </p>
          <div className="mb-6">
            <span className="font-geist text-3xl font-bold">${isYearly ? '15' : '19'}</span>
            <span className="font-geist text-gray-500">/month</span>
          </div>
          <button className="font-geist text-lg font-semibold w-full py-2.5 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
            Get Starter
          </button>
          <div className="font-geist text-md font-medium mt-6">
            <p className="mb-4">Features</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-blue-500" />
                Data Sources: Up to 10 Accounts
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-blue-500" />
                1 Workspace
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-blue-500" />
                1 User
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-blue-500" />
                Analytics Dashboard
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-blue-500" />
                Google Add-on
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-blue-500" />
                Reporting
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Plan */}
        <div className="border rounded-2xl p-6 relative hover:border-gray-300 transition-colors">
          <img src={BagImg.src} alt="" />
          <h3 className="font-geist text-2xl font-bold mb-2">Professional</h3>
          <p className="font-geist font-medium text-gray-500 text-sm mb-4">
            To grow referrals and leads of business looking
          </p>
          <div className="mb-6">
            <span className="font-geist text-3xl font-bold">${isYearly ? '31' : '39'}</span>
            <span className="font-geist text-gray-500">/month</span>
          </div>
          <button className="font-geist text-lg font-semibold w-full py-2.5 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
            Get Professional
          </button>
          <div className="font-geist text-md font-medium mt-6">
            <p className="mb-4">Features</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-yellow-500" />
                Data Sources: Up to 3 Accounts
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-yellow-500" />
                1 Workspace
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-yellow-500" />
                1 User
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-yellow-500" />
                Analytics Dashboard
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-yellow-500" />
                Google Add-on
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-yellow-500" />
                Reporting
              </li>
            </ul>
          </div>
        </div>

        {/* Team Plan */}
        <div className="border rounded-2xl p-6 relative hover:border-gray-300 transition-colors">
          <img src={BuildingImg.src} alt="" />
          <h3 className="font-geist text-2xl font-bold mb-2">Team</h3>
          <p className="font-geist font-medium text-gray-500 text-sm mb-4">
            To grow referrals and leads of business looking
          </p>
          <div className="mb-6">
            <span className="font-geist text-3xl font-bold">${isYearly ? '79' : '99'}</span>
            <span className="font-geist text-gray-500">/month</span>
          </div>
          <button className="font-geist text-lg font-semibold w-full py-2.5 px-4 border border-blue-500 text-blue-500 rounded-lg hover:bg-blue-50 transition-colors">
            Get Team
          </button>
          <div className="font-geist text-md font-medium mt-6">
            <p className="mb-4">Features</p>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-purple-500" />
                Data Sources: Up to 3 Accounts
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-purple-500" />
                1 Workspace
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-purple-500" />
                1 User
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-purple-500" />
                Analytics Dashboard
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-purple-500" />
                Google Add-on
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-600">
                <Check size={16} className="text-purple-500" />
                Reporting
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PriceCard;