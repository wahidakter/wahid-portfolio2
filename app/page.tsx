"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  GraduationCap,
  Briefcase,
  Target,
  TrendingUp,
  Users,
  BarChart3,
  Home,
  Menu,
  X,
} from "lucide-react"
import Image from "next/image"
import { useState, useEffect } from "react"

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMenuOpen(false)
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
    setIsMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-emerald-50">
      {/* Navigation Header */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-slate-800 hover:text-emerald-600 transition-colors duration-300"
            >
              <Home className="w-6 h-6" />
              <span className="font-bold text-lg">Wahid Akter</span>
            </button>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium"
              >
                About Me
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium"
              >
                Experience
              </button>
              <button
                onClick={() => scrollToSection("skills")}
                className="text-slate-700 hover:text-purple-600 transition-colors duration-300 font-medium"
              >
                Skills
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Contact Me
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-slate-700 hover:text-emerald-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 backdrop-blur-md rounded-lg mt-2 p-4 shadow-lg animate-in slide-in-from-top duration-300">
              <div className="space-y-3">
                <button
                  onClick={() => scrollToSection("about")}
                  className="block w-full text-left text-slate-700 hover:text-emerald-600 transition-colors duration-300 font-medium py-2"
                >
                  About Me
                </button>
                <button
                  onClick={() => scrollToSection("experience")}
                  className="block w-full text-left text-slate-700 hover:text-blue-600 transition-colors duration-300 font-medium py-2"
                >
                  Experience
                </button>
                <button
                  onClick={() => scrollToSection("skills")}
                  className="block w-full text-left text-slate-700 hover:text-purple-600 transition-colors duration-300 font-medium py-2"
                >
                  Skills
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="block w-full text-left bg-gradient-to-r from-emerald-500 to-blue-500 text-white px-4 py-2 rounded-full hover:from-emerald-600 hover:to-blue-600 transition-all duration-300 font-medium mt-2"
                >
                  Contact Me
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-blue-600 to-purple-700 text-white py-32 mt-16 overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-yellow-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 w-60 h-60 bg-gradient-to-br from-cyan-400/20 to-teal-500/20 rounded-full blur-3xl animate-bounce delay-500"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-7xl mx-auto">
            <div className="flex-shrink-0 animate-in zoom-in duration-1000">
              <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-2xl hover:scale-105 transition-transform duration-500">
                <Image src="/wahid-photo2.jpg" alt="Md. Wahid Akter" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400/20 to-blue-400/20 hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
            <div className="flex-1 text-center lg:text-left max-w-2xl animate-in slide-in-from-right duration-1000 delay-300">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-yellow-300 via-pink-300 to-cyan-300 bg-clip-text text-transparent animate-in fade-in duration-1000 delay-500">
                Md. Wahid Akter
              </h1>
              <p className="text-xl lg:text-2xl text-emerald-100 mb-6 animate-in slide-in-from-left duration-1000 delay-700">
                Digital Marketing Specialist & Strategic Marketing Professional
              </p>
              <p className="text-lg text-blue-100 mb-8 max-w-2xl animate-in fade-in duration-1000 delay-1000">
                Transforming 12+ years of traditional marketing expertise into cutting-edge digital marketing solutions.
                Specializing in data-driven strategies that deliver measurable results for businesses.
              </p>
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start animate-in slide-in-from-bottom duration-1000 delay-1200">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-slate-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:wahid016@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Get In Touch
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://wa.me/8801712107582" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent animate-in fade-in duration-1000">
              About Me
            </h2>
            <Card className="p-8 shadow-xl border-0 bg-gradient-to-br from-white to-emerald-50/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02]">
              <CardContent className="space-y-6">
                <p className="text-lg text-slate-700 leading-relaxed animate-in slide-in-from-left duration-1000 delay-300">
                  With over 12 years of proven marketing experience in pharmaceutical and real estate industries, I
                  bring a unique blend of traditional marketing wisdom and modern digital strategies. My journey from
                  Field Marketing Executive at ACI Limited to Digital Marketing Specialist represents a strategic
                  evolution in today's digital-first business landscape.
                </p>
                <p className="text-lg text-slate-700 leading-relaxed animate-in slide-in-from-right duration-1000 delay-500">
                  Armed with an MBA in Marketing and extensive hands-on experience, I specialize in creating
                  comprehensive digital marketing campaigns that bridge the gap between traditional marketing principles
                  and innovative digital tactics. My approach focuses on understanding customer behavior, market
                  dynamics, and leveraging data to drive sustainable business growth.
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
                  <div className="text-center group hover:scale-110 transition-transform duration-300 animate-in zoom-in duration-1000 delay-700">
                    <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl group-hover:rotate-12 transition-all duration-300">
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-slate-800">Strategic Planning</p>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300 animate-in zoom-in duration-1000 delay-900">
                    <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl group-hover:rotate-12 transition-all duration-300">
                      <TrendingUp className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-slate-800">Growth Marketing</p>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300 animate-in zoom-in duration-1000 delay-1100">
                    <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl group-hover:rotate-12 transition-all duration-300">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-slate-800">Customer Insights</p>
                  </div>
                  <div className="text-center group hover:scale-110 transition-transform duration-300 animate-in zoom-in duration-1000 delay-1300">
                    <div className="bg-gradient-to-br from-orange-400 to-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-2 shadow-lg group-hover:shadow-xl group-hover:rotate-12 transition-all duration-300">
                      <BarChart3 className="w-8 h-8 text-white" />
                    </div>
                    <p className="font-semibold text-slate-800">Data Analytics</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          <div className="max-w-4xl mx-auto space-y-8">
            <Card className="p-6 shadow-xl border-0 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:rotate-1">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Field Marketing Executive</h3>
                    <p className="text-emerald-600 font-semibold mb-2">ACI Limited (Pharma Division)</p>
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>May 2012 - January 2024 (11+ years)</span>
                    </div>
                    <p className="text-slate-700 mb-4">
                      Led comprehensive marketing strategies for pharmaceutical products, managing field operations,
                      customer relationships, and market penetration initiatives. Developed deep expertise in customer
                      behavior analysis, market research, and strategic campaign execution.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-gradient-to-r from-emerald-400 to-emerald-600 text-white hover:scale-105 transition-transform duration-200">
                        Market Research
                      </Badge>
                      <Badge className="bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:scale-105 transition-transform duration-200">
                        Customer Relationship Management
                      </Badge>
                      <Badge className="bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:scale-105 transition-transform duration-200">
                        Strategic Planning
                      </Badge>
                      <Badge className="bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:scale-105 transition-transform duration-200">
                        Sales Analytics
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-xl border-0 bg-gradient-to-br from-white to-purple-50/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] hover:-rotate-1">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-300">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 mb-2">Executive - Marketing & Sales</h3>
                    <p className="text-blue-600 font-semibold mb-2">Akankha Developers Ltd.</p>
                    <div className="flex items-center gap-2 text-slate-600 mb-4">
                      <Calendar className="w-4 h-4" />
                      <span>July 2010 - April 2012 (2 years)</span>
                    </div>
                    <p className="text-slate-700 mb-4">
                      Managed marketing and sales operations for real estate development projects. Gained valuable
                      experience in customer acquisition, market positioning, and integrated marketing communications
                      across multiple channels.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge className="bg-gradient-to-r from-pink-400 to-pink-600 text-white hover:scale-105 transition-transform duration-200">
                        Lead Generation
                      </Badge>
                      <Badge className="bg-gradient-to-r from-cyan-400 to-cyan-600 text-white hover:scale-105 transition-transform duration-200">
                        Brand Positioning
                      </Badge>
                      <Badge className="bg-gradient-to-r from-indigo-400 to-indigo-600 text-white hover:scale-105 transition-transform duration-200">
                        Customer Acquisition
                      </Badge>
                      <Badge className="bg-gradient-to-r from-teal-400 to-teal-600 text-white hover:scale-105 transition-transform duration-200">
                        Market Analysis
                      </Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 bg-gradient-to-br from-emerald-50 to-cyan-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">
            Education
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-white to-emerald-50/50 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 p-3 rounded-full shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">MBA - Major in Marketing</h3>
                    <p className="text-purple-600 font-semibold">
                      University of Liberal Arts Bangladesh, Dhanmondi, Dhaka
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-white to-cyan-50/50 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 p-3 rounded-full shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">M.S.S - Major in Economics</h3>
                    <p className="text-emerald-600 font-semibold">National University (Dhaka College), Dhaka</p>
                    <p className="text-slate-600">2nd Class, 2002</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="p-6 shadow-lg border-0 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
              <CardContent>
                <div className="flex items-start gap-4">
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 p-3 rounded-full shadow-lg">
                    <GraduationCap className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">B.S.S - Major in Economics</h3>
                    <p className="text-blue-600 font-semibold">National University (B.L. College), Daulatpur, Khulna</p>
                    <p className="text-slate-600">2nd Class, 2001</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 bg-gradient-to-br from-pink-50 to-orange-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
            Core Competencies
          </h2>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="p-6 shadow-xl border-0 bg-gradient-to-br from-white to-pink-50/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-2">
                <CardContent>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent">
                    Digital Marketing
                  </h3>
                  <div className="space-y-2">
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-pink-400 to-pink-600 text-white hover:scale-110 transition-transform duration-200">
                      SEO/SEM
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-red-400 to-red-600 text-white hover:scale-110 transition-transform duration-200">
                      Social Media Marketing
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-orange-400 to-orange-600 text-white hover:scale-110 transition-transform duration-200">
                      Content Marketing
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-yellow-400 to-yellow-600 text-slate-800 hover:scale-110 transition-transform duration-200">
                      Email Marketing
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-pink-500 to-rose-600 text-white hover:scale-110 transition-transform duration-200">
                      PPC Advertising
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-xl border-0 bg-gradient-to-br from-white to-blue-50/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:-rotate-2">
                <CardContent>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
                    Analytics & Strategy
                  </h3>
                  <div className="space-y-2">
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-blue-400 to-blue-600 text-white hover:scale-110 transition-transform duration-200">
                      Google Analytics
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-cyan-400 to-cyan-600 text-white hover:scale-110 transition-transform duration-200">
                      Market Research
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-indigo-400 to-indigo-600 text-white hover:scale-110 transition-transform duration-200">
                      Customer Segmentation
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-teal-400 to-teal-600 text-white hover:scale-110 transition-transform duration-200">
                      Campaign Optimization
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-sky-400 to-sky-600 text-white hover:scale-110 transition-transform duration-200">
                      ROI Analysis
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 shadow-xl border-0 bg-gradient-to-br from-white to-purple-50/50 hover:shadow-2xl transition-all duration-500 transform hover:scale-105 hover:rotate-2">
                <CardContent>
                  <h3 className="text-lg font-bold text-slate-800 mb-4 bg-gradient-to-r from-purple-600 to-emerald-600 bg-clip-text text-transparent">
                    Traditional Marketing
                  </h3>
                  <div className="space-y-2">
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-purple-400 to-purple-600 text-white hover:scale-110 transition-transform duration-200">
                      Brand Management
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-emerald-400 to-emerald-600 text-white hover:scale-110 transition-transform duration-200">
                      Field Marketing
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-green-400 to-green-600 text-white hover:scale-110 transition-transform duration-200">
                      Customer Relations
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-lime-400 to-lime-600 text-slate-800 hover:scale-110 transition-transform duration-200">
                      Sales Strategy
                    </Badge>
                    <Badge className="mr-2 mb-2 bg-gradient-to-r from-violet-400 to-violet-600 text-white hover:scale-110 transition-transform duration-200">
                      Market Penetration
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-16 bg-gradient-to-br from-slate-800 via-purple-900 to-slate-900 text-white relative overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-emerald-400/20 to-cyan-400/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full blur-xl animate-pulse delay-1000"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-emerald-300 to-cyan-300 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <Card className="bg-gradient-to-br from-slate-700/50 to-emerald-800/50 border-emerald-500/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <CardContent>
                  <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
                  <p className="text-emerald-200">01712 - 10 75 82</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-700/50 to-blue-800/50 border-blue-500/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <CardContent>
                  <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Email</h3>
                  <p className="text-blue-200">wahid016@gmail.com</p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-slate-700/50 to-purple-800/50 border-purple-500/20 p-6 backdrop-blur-sm hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl">
                <CardContent>
                  <div className="bg-gradient-to-br from-purple-400 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">Location</h3>
                  <p className="text-purple-200">Khulna, Bangladesh</p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-xl text-slate-200 mb-6">
                Ready to elevate your digital marketing strategy? Let's discuss how my expertise can drive your business
                growth.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-emerald-400 to-cyan-400 hover:from-emerald-500 hover:to-cyan-500 text-slate-800 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="mailto:wahid016@gmail.com">
                    <Mail className="w-5 h-5 mr-2" />
                    Send Email
                  </a>
                </Button>
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-pink-400 to-purple-400 hover:from-pink-500 hover:to-purple-500 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                  asChild
                >
                  <a href="https://wa.me/8801712107582" target="_blank" rel="noopener noreferrer">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-950 text-slate-400 py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 Md. Wahid Akter. All rights reserved.</p>
          <p className="mt-2 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
            Digital Marketing Specialist | Strategic Marketing Professional
          </p>
        </div>
      </footer>
    </div>
  )
}
