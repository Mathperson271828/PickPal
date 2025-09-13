import { useState } from 'react'
import { Search, Star, Check, X, ShoppingCart, Github } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import './App.css'

interface Product {
  id: number
  name: string
  score: number
  price: string
  image: string
  pros: string[]
  cons: string[]
  summary: string
  reviewCount: number
}

const mockProducts: Record<string, Product[]> = {
  'wireless earbuds': [
    {
      id: 1,
      name: 'Sony WF-1000XM4',
      score: 9.2,
      price: '$279.99',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&h=300&fit=crop',
      pros: ['Excellent noise cancellation', 'Great sound quality', 'Long battery life'],
      cons: ['Expensive', 'Large case size'],
      summary: 'Premium earbuds with industry-leading noise cancellation and exceptional audio quality.',
      reviewCount: 2847
    },
    {
      id: 2,
      name: 'Apple AirPods Pro 2',
      score: 8.9,
      price: '$249.99',
      image: 'https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=400&h=300&fit=crop',
      pros: ['Seamless iOS integration', 'Spatial audio', 'Comfortable fit'],
      cons: ['Limited Android compatibility', 'Premium pricing'],
      summary: 'Perfect for iPhone users with advanced features and excellent build quality.',
      reviewCount: 3521
    },
    {
      id: 3,
      name: 'Jabra Elite 85t',
      score: 8.7,
      price: '$199.99',
      image: 'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400&h=300&fit=crop',
      pros: ['Customizable sound', 'Good call quality', 'Comfortable for long wear'],
      cons: ['Average battery life', 'Bulky design'],
      summary: 'Versatile earbuds with excellent customization options and solid performance.',
      reviewCount: 1923
    }
  ],
  'standing desk': [
    {
      id: 4,
      name: 'UPLIFT V2 Standing Desk',
      score: 9.1,
      price: '$599.99',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      pros: ['Sturdy construction', 'Smooth height adjustment', 'Great warranty'],
      cons: ['Expensive', 'Assembly required'],
      summary: 'Premium standing desk with excellent build quality and smooth operation.',
      reviewCount: 1456
    },
    {
      id: 5,
      name: 'FlexiSpot E7',
      score: 8.8,
      price: '$399.99',
      image: 'https://images.unsplash.com/photo-1541558869434-2840d308329a?w=400&h=300&fit=crop',
      pros: ['Good value', 'Memory presets', 'Stable at all heights'],
      cons: ['Limited desktop options', 'Noisy motor'],
      summary: 'Solid mid-range option with good features and reasonable pricing.',
      reviewCount: 892
    },
    {
      id: 6,
      name: 'IKEA Bekant Sit/Stand',
      score: 7.9,
      price: '$249.99',
      image: 'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=300&fit=crop',
      pros: ['Affordable', 'Easy assembly', 'Compact design'],
      cons: ['Limited height range', 'Basic features'],
      summary: 'Budget-friendly option perfect for small spaces and basic needs.',
      reviewCount: 634
    }
  ],
  'coffee maker': [
    {
      id: 7,
      name: 'Breville Barista Express',
      score: 9.3,
      price: '$699.99',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=400&h=300&fit=crop',
      pros: ['Built-in grinder', 'Professional quality', 'Consistent results'],
      cons: ['Expensive', 'Learning curve'],
      summary: 'Professional-grade espresso machine with integrated grinder for cafe-quality coffee.',
      reviewCount: 2156
    },
    {
      id: 8,
      name: 'Cuisinart DCC-3200P1',
      score: 8.5,
      price: '$99.99',
      image: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=400&h=300&fit=crop',
      pros: ['Programmable', 'Large capacity', 'Good value'],
      cons: ['Plastic construction', 'Basic features'],
      summary: 'Reliable drip coffee maker with programmable features and large capacity.',
      reviewCount: 3847
    },
    {
      id: 9,
      name: 'Keurig K-Elite',
      score: 8.2,
      price: '$169.99',
      image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=400&h=300&fit=crop',
      pros: ['Convenient K-cups', 'Multiple brew sizes', 'Quick brewing'],
      cons: ['Expensive pods', 'Environmental impact'],
      summary: 'Convenient single-serve coffee maker with multiple brewing options.',
      reviewCount: 4521
    }
  ]
}

function App() {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [isSearching, setIsSearching] = useState(false)

  const handleSearch = async () => {
    if (!query.trim()) return
    
    setIsSearching(true)
    
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    const searchKey = Object.keys(mockProducts).find(key => 
      query.toLowerCase().includes(key) || key.includes(query.toLowerCase())
    )
    
    if (searchKey) {
      setResults(mockProducts[searchKey])
    } else {
      setResults(mockProducts['wireless earbuds'])
    }
    
    setIsSearching(false)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch()
    }
  }

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Header/Navbar */}
      <header className="bg-white shadow-sm border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2">
                <ShoppingCart className="h-8 w-8 text-indigo-600" />
                <h1 className="text-2xl font-bold text-slate-700">PickPal AI</h1>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#about" className="text-slate-600 hover:text-slate-900 transition-colors">About</a>
              <a href="#contact" className="text-slate-600 hover:text-slate-900 transition-colors">Contact</a>
              <a href="https://github.com/Mathperson271828/PickPal" className="flex items-center space-x-1 text-slate-600 hover:text-slate-900 transition-colors">
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </nav>
          </div>
          <div className="text-center mt-2">
            <p className="text-slate-600 text-sm">AI-powered shopping recommendations in minutes, not hours.</p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-slate-700 mb-6 leading-tight">
            Find the Perfect Product<br />
            <span className="text-indigo-600">in Minutes</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed">
            Stop wasting hours reading reviews. Our AI analyzes thousands of opinions 
            to recommend the top 3 products for your needs.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="e.g. Best wireless earbuds under $150"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-12 h-14 text-lg rounded-xl border-2 border-neutral-200 focus:border-indigo-500 shadow-sm transition-all duration-200"
                />
              </div>
              <Button 
                onClick={handleSearch}
                disabled={isSearching || !query.trim()}
                className="h-14 px-8 text-lg bg-indigo-600 hover:bg-indigo-700 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-50"
              >
                {isSearching ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                    <span>Searching...</span>
                  </div>
                ) : (
                  'Search'
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isSearching && (
          <div className="text-center py-16">
            <div className="inline-flex flex-col items-center space-y-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-600"></div>
              <div className="space-y-2">
                <p className="text-lg font-medium text-slate-700">Analyzing reviews and ratings...</p>
                <p className="text-sm text-slate-500">This usually takes a few seconds</p>
              </div>
            </div>
          </div>
        )}

        {/* Results Section */}
        {results.length > 0 && !isSearching && (
          <div className="space-y-12 animate-in fade-in duration-500">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-slate-700 mb-3">
                Top 3 Recommendations
              </h3>
              <p className="text-slate-600 text-lg">
                Based on analysis of {results.reduce((sum, product) => sum + product.reviewCount, 0).toLocaleString()} reviews
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-1 lg:grid-cols-3">
              {results.map((product, index) => (
                <Card key={product.id} className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0">
                  <div className="relative">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.currentTarget.src = 'https://placehold.co/400x300/png'
                      }}
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-indigo-600 text-white px-3 py-1 rounded-full font-medium">
                        #{index + 1} Pick
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white/95 backdrop-blur-sm rounded-full px-3 py-1 flex items-center space-x-1 shadow-sm">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`h-3 w-3 ${i < Math.floor(product.score) ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                            />
                          ))}
                        </div>
                        <span className="font-bold text-sm text-slate-700">{product.score}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl font-bold text-slate-700">{product.name}</CardTitle>
                    <CardDescription className="text-2xl font-bold text-emerald-600">
                      {product.price}
                    </CardDescription>
                    <p className="text-sm text-slate-600 mt-2 leading-relaxed">{product.summary}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-6">
                    {/* Pros */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="bg-emerald-100 p-1 rounded-full">
                          <Check className="h-3 w-3 text-emerald-600" />
                        </div>
                        <span className="font-semibold text-emerald-700">Pros</span>
                      </div>
                      <ul className="space-y-2">
                        {product.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start">
                            <Check className="h-4 w-4 text-emerald-500 mr-2 mt-0.5 flex-shrink-0" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Cons */}
                    <div>
                      <div className="flex items-center space-x-2 mb-3">
                        <div className="bg-rose-100 p-1 rounded-full">
                          <X className="h-3 w-3 text-rose-600" />
                        </div>
                        <span className="font-semibold text-rose-700">Cons</span>
                      </div>
                      <ul className="space-y-2">
                        {product.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-slate-600 flex items-start">
                            <X className="h-4 w-4 text-rose-500 mr-2 mt-0.5 flex-shrink-0" />
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-4 border-t border-neutral-200">
                      <div className="flex items-center justify-between">
                        <p className="text-xs text-slate-500">
                          Based on {product.reviewCount.toLocaleString()} reviews
                        </p>
                        <Button variant="outline" size="sm" className="rounded-full">
                          View More
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {results.length === 0 && !isSearching && (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-8">
                <div className="bg-indigo-100 rounded-full p-6 w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Search className="h-10 w-10 text-indigo-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-700 mb-3">
                  Type in what you're shopping for, and we'll find the best options for you.
                </h3>
                <p className="text-slate-500 mb-8">
                  Get AI-powered recommendations based on thousands of reviews and ratings.
                </p>
              </div>
              
              <div className="space-y-4">
                <p className="text-sm font-medium text-slate-600 mb-3">Popular searches:</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {['wireless earbuds', 'standing desk', 'coffee maker'].map((example) => (
                    <Button
                      key={example}
                      variant="outline"
                      onClick={() => {
                        setQuery(example)
                        setTimeout(() => handleSearch(), 100)
                      }}
                      className="capitalize rounded-full border-2 hover:border-indigo-500 hover:text-indigo-600 transition-colors"
                    >
                      {example}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
