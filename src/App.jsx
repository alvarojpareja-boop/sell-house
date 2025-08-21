import React, { useState } from 'react'
import { Button } from '@/components/ui/button.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Card, CardContent } from '@/components/ui/card.jsx'
import { Badge } from '@/components/ui/badge.jsx'
import { Phone, Mail, MapPin, Clock, Shield, DollarSign, Home, CheckCircle, Star } from 'lucide-react'
import './App.css'
import heroBackground from './assets/hero-bg.jpg'
import logo from './assets/logo.png'

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: ''
  })

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you! We will contact you soon with your cash offer.')
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src={logo} alt="Sell House Cash Out" className="h-12 w-auto" />
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-700 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#why-cash" className="text-gray-700 hover:text-blue-600 transition-colors">Why Sell for Cash</a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden sm:flex items-center text-blue-600">
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-semibold">(754) 272-5078</span>
              </div>
              <Button className="bg-green-600 hover:bg-green-700">Get Cash Offer</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 lg:py-32"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${heroBackground})` }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <Badge className="bg-green-600 text-white mb-4">
                <DollarSign className="h-4 w-4 mr-1" />
                Cash Offers in 24 Hours
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Sell Your South Florida Home for Cash, Fast.
              </h1>
              <p className="text-xl lg:text-2xl mb-8 text-gray-200">
                We buy homes, estates, and inherited properties in any condition. Get a fair, no-obligation offer today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-4">
                  Get My Cash Offer Now
                </Button>
                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-gray-900 text-lg px-8 py-4">
                  <Phone className="h-5 w-5 mr-2" />
                  Call (754) 272-5078
                </Button>
              </div>
            </div>
            
            {/* Contact Form */}
            <Card className="bg-white/95 backdrop-blur-sm shadow-2xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Get Your Cash Offer</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="address"
                      placeholder="Property Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg font-semibold">
                    Get My Cash Offer Now
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    No obligation. We respect your privacy.
                  </p>
                  <p className="text-[0.6rem] text-gray-400 text-center leading-tight mt-2">
                    By clicking “Get My Cash Offer”, you agree to receive calls and texts, including by autodialer, prerecorded messages, and artificial voice, and email from Sell My House Fast or one of its partners but not as a condition of any purchase, and you agree to the <a href="#" className="underline">Terms of Use</a> and <a href="#" className="underline">Privacy Policy</a>. Message frequency varies, also message and data rates may apply. Reply \'STOP\' to opt out and \'HELP\' for help.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our simple, stress-free process gets you cash for your home in just three easy steps.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                1
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Tell Us About Your Property</h3>
              <p className="text-gray-600 text-lg">
                Fill out our simple form or give us a call. We'll ask a few questions about your home and situation.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                2
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">We Provide a No-Obligation Cash Offer</h3>
              <p className="text-gray-600 text-lg">
                Within 24 hours, we'll present you with a fair, competitive cash offer for your home.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-blue-600 text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                3
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">You Choose Your Closing Date and Get Paid</h3>
              <p className="text-gray-600 text-lg">
                Accept our offer and pick your closing date. We handle everything else and you get cash fast.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Sell for Cash Section */}
      <section id="why-cash" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Sell for Cash?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skip the hassles of traditional home sales and enjoy these benefits.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Home className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Repairs Needed</h3>
              <p className="text-gray-600">
                Sell your home as-is, no cleaning or renovations required.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <DollarSign className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Commissions or Fees</h3>
              <p className="text-gray-600">
                Avoid realtor commissions and closing costs.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Close on Your Timeline</h3>
              <p className="text-gray-600">
                We work around your schedule, whether you need to close in a week or a month.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">No Showings or Open Houses</h3>
              <p className="text-gray-600">
                Maintain your privacy and skip the hassle.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
            <p className="text-xl text-gray-600">
              Real stories from real homeowners who chose to sell for cash.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "Working with this team was a lifesaver. They gave me a fair cash offer and closed so quickly, exactly when I needed them to. I didn't have to worry about a thing."
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Maria Rodriguez</p>
                    <p className="text-gray-500">Miami, FL</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "I inherited my grandmother's house and didn't know what to do. These guys made it so easy - no repairs, no stress, just a fair offer and quick closing."
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">James Smith</p>
                    <p className="text-gray-500">Fort Lauderdale, FL</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-white shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">
                  "After our divorce, we needed to sell quickly. They handled everything professionally and we closed in just two weeks. Highly recommend!"
                </p>
                <div className="flex items-center">
                  <div className="bg-gray-300 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <span className="text-gray-600 font-semibold">LT</span>
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Lisa Thompson</p>
                    <p className="text-gray-500">West Palm Beach, FL</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Us/Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">About Sell House Cash Out</h2>
              <p className="text-lg text-gray-600 mb-8">
                We are a trusted local home buying company serving South Florida homeowners for over 10 years. 
                Our team of real estate professionals specializes in providing fast, fair cash offers for homes in any condition. 
                Whether you're facing foreclosure, dealing with an inherited property, going through a divorce, or simply need to sell quickly, 
                we're here to help with a hassle-free solution that puts cash in your pocket fast.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Licensed and insured real estate professionals</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Over 500 successful cash home purchases</span>
                </div>

                <div className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                  <span className="text-gray-700">Serving all of South Florida</span>
                </div>
              </div>
            </div>
            
            <Card className="shadow-xl">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Get Your Free Cash Offer</h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="tel"
                      name="phone"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <div>
                    <Input
                      type="text"
                      name="address"
                      placeholder="Property Address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      className="h-12"
                    />
                  </div>
                  <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg font-semibold">
                    Get My Cash Offer Now
                  </Button>
                  <p className="text-xs text-gray-500 text-center">
                    No obligation. We respect your privacy and will never spam you.
                  </p>
                </form>
                
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Contact Information</h4>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Phone className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">(754) 272-5078</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">info@sellhousecashout.com</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                      <span className="text-gray-700">Serving all of South Florida</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <img src={logo} alt="Sell House Cash Out" className="h-12 w-auto mb-4 brightness-0 invert" />
              <p className="text-gray-400">
                Your trusted partner for fast, fair cash home sales in South Florida.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#how-it-works" className="hover:text-white transition-colors">How It Works</a></li>
                <li><a href="#why-cash" className="hover:text-white transition-colors">Why Sell for Cash</a></li>
                <li><a href="#testimonials" className="hover:text-white transition-colors">Testimonials</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Cash Home Purchases</li>
                <li>Inherited Property Sales</li>
                <li>Foreclosure Prevention</li>
                <li>Divorce Property Sales</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-400">
                <div className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  <span>(754) 272-5078</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  <span>info@sellhousecashout.com</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  <span>South Florida</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Sell House Cash Out. All rights reserved. | Privacy Policy | Terms of Service</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

