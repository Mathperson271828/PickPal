import { useState } from 'react'
import { Search, Star, ThumbsUp, ThumbsDown, Zap } from 'lucide-react'
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-indigo-600" />
              <h1 className="text-2xl font-bold text-gray-900">PickPal</h1>
              <Badge variant="secondary" className="ml-2">AI Shopping</Badge>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Find the Perfect Product in Minutes
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Stop wasting hours reading reviews. Our AI analyzes thousands of opinions 
            to recommend the top 3 products for your needs.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex space-x-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <Input
                  type="text"
                  placeholder="e.g., Best wireless earbuds under $150"
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="pl-10 h-12 text-lg"
                />
              </div>
              <Button 
                onClick={handleSearch}
                disabled={isSearching || !query.trim()}
                className="h-12 px-8 text-lg"
              >
                {isSearching ? 'Searching...' : 'Search'}
              </Button>
            </div>
          </div>
        </div>

        {/* Results */}
        {isSearching && (
          <div className="text-center py-12">
            <div className="inline-flex items-center space-x-2">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-indigo-600"></div>
              <span className="text-lg text-gray-600">Analyzing reviews and ratings...</span>
            </div>
          </div>
        )}

        {results.length > 0 && !isSearching && (
          <div className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Top 3 Recommendations
              </h3>
              <p className="text-gray-600">
                Based on analysis of {results.reduce((sum, product) => sum + product.reviewCount, 0).toLocaleString()} reviews
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-3">
              {results.map((product, index) => (
                <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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
                      <Badge className="bg-indigo-600 text-white">
                        #{index + 1} Pick
                      </Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-white rounded-full px-3 py-1 flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="font-bold text-sm">{product.score}</span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription className="text-lg font-semibold text-green-600">
                      {product.price}
                    </CardDescription>
                    <p className="text-sm text-gray-600 mt-2">{product.summary}</p>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    {/* Pros */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <ThumbsUp className="h-4 w-4 text-green-600" />
                        <span className="font-semibold text-green-700">Pros</span>
                      </div>
                      <ul className="space-y-1">
                        {product.pros.map((pro, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-green-500 mr-2">•</span>
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Cons */}
                    <div>
                      <div className="flex items-center space-x-2 mb-2">
                        <ThumbsDown className="h-4 w-4 text-red-600" />
                        <span className="font-semibold text-red-700">Cons</span>
                      </div>
                      <ul className="space-y-1">
                        {product.cons.map((con, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start">
                            <span className="text-red-500 mr-2">•</span>
                            {con}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="pt-2 border-t">
                      <p className="text-xs text-gray-500">
                        Based on {product.reviewCount.toLocaleString()} reviews
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Example Queries */}
        {results.length === 0 && !isSearching && (
          <div className="text-center py-12">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">
              Try searching for:
            </h3>
            <div className="flex flex-wrap justify-center gap-3">
              {['wireless earbuds', 'standing desk', 'coffee maker'].map((example) => (
                <Button
                  key={example}
                  variant="outline"
                  onClick={() => {
                    setQuery(example)
                    setTimeout(() => handleSearch(), 100)
                  }}
                  className="capitalize"
                >
                  {example}
                </Button>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

export default App
