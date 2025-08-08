import Head from 'next/head';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { Heart, Download, Share2, Eye } from 'lucide-react';

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);
    return () => window.removeEventListener('mousemove', updateMousePosition);
  }, []);

  const mouseImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=400&h=300&fit=crop&crop=center",
      title: "Field Mouse",
      description: "A cute field mouse in its natural habitat",
      likes: 124,
      views: 1250
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?w=400&h=300&fit=crop&crop=center",
      title: "White Mouse",
      description: "An adorable white laboratory mouse",
      likes: 89,
      views: 890
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1606567595334-d39972c85dbe?w=400&h=300&fit=crop&crop=center",
      title: "Harvest Mouse",
      description: "Tiny harvest mouse climbing on wheat",
      likes: 156,
      views: 2100
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&h=300&fit=crop&crop=center",
      title: "House Mouse",
      description: "Common house mouse exploring",
      likes: 67,
      views: 750
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop&crop=center",
      title: "Brown Mouse",
      description: "Beautiful brown mouse in garden",
      likes: 93,
      views: 1100
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1618336753974-aae8e04506aa?w=400&h=300&fit=crop&crop=center",
      title: "Pet Mouse",
      description: "Friendly pet mouse being handled",
      likes: 201,
      views: 3200
    }
  ];

  return (
    <>
      <Head>
        <title>Glassmorphism Mouse Gallery</title>
        <meta name="description" content="Beautiful mouse imagery with glassmorphism design" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen relative overflow-hidden">
        {/* Animated Background */}
        <div className="fixed inset-0 bg-gradient-to-br from-purple-400 via-pink-500 to-red-500">
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-400 via-purple-500 to-pink-500 opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-bl from-green-400 via-blue-500 to-purple-600 opacity-50"></div>
        </div>

        {/* Floating Elements */}
        <motion.div
          className="fixed w-64 h-64 rounded-full bg-white/10 blur-xl"
          animate={{
            x: mousePosition.x - 128,
            y: mousePosition.y - 128,
          }}
          transition={{ type: "spring", damping: 30, stiffness: 200 }}
        />
        
        <motion.div
          className="fixed w-96 h-96 rounded-full bg-purple-400/20 blur-2xl"
          animate={{
            x: mousePosition.x * 0.5 - 192,
            y: mousePosition.y * 0.5 - 192,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 100 }}
        />

        {/* Main Content */}
        <div className="relative z-10 min-h-screen">
          {/* Header */}
          <motion.header
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="p-8 text-center"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-3xl border border-white/20 shadow-2xl p-8 mx-auto max-w-4xl">
              <motion.h1
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-6xl md:text-8xl font-bold text-white mb-4 tracking-tight"
              >
                Mouse Gallery
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
              >
                Discover the enchanting world of mice through stunning photography and glassmorphism design
              </motion.p>
            </div>
          </motion.header>

          {/* Image Gallery */}
          <main className="px-8 pb-16">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {mouseImages.map((image, index) => (
                  <motion.div
                    key={image.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -10, scale: 1.02 }}
                    onHoverStart={() => setHoveredCard(image.id)}
                    onHoverEnd={() => setHoveredCard(null)}
                    className="group"
                  >
                    <Card className="backdrop-blur-md bg-white/10 border-white/20 shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
                      <div className="relative">
                        <img
                          src={image.src}
                          alt={image.title}
                          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: hoveredCard === image.id ? 1 : 0 }}
                          className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end justify-center p-4"
                        >
                          <div className="flex gap-2">
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Heart className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="ghost" className="text-white hover:bg-white/20">
                              <Share2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </motion.div>
                      </div>
                      <div className="p-6">
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-xl font-semibold text-white">{image.title}</h3>
                          <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                            Featured
                          </Badge>
                        </div>
                        <p className="text-white/70 mb-4 leading-relaxed">{image.description}</p>
                        <div className="flex items-center justify-between text-sm text-white/60">
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            <span>{image.likes}</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{image.views}</span>
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </main>

          {/* Footer */}
          <motion.footer
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="p-8 text-center"
          >
            <div className="backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-xl p-6 mx-auto max-w-2xl">
              <p className="text-white/80 mb-4">
                Explore more amazing mouse photography and share your favorites
              </p>
              <div className="flex gap-4 justify-center">
                <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30">
                  View Gallery
                </Button>
                <Button variant="outline" className="border-white/30 text-white hover:bg-white/20">
                  Upload Photo
                </Button>
              </div>
            </div>
          </motion.footer>
        </div>

        {/* Decorative Elements */}
        <div className="fixed top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-pulse"></div>
        <div className="fixed top-40 right-32 w-3 h-3 bg-white/20 rounded-full animate-pulse delay-300"></div>
        <div className="fixed bottom-32 left-16 w-1 h-1 bg-white/40 rounded-full animate-pulse delay-700"></div>
        <div className="fixed bottom-20 right-20 w-2 h-2 bg-white/25 rounded-full animate-pulse delay-500"></div>
      </div>
    </>
  );
}