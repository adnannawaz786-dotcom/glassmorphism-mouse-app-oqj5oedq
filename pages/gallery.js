import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Heart, Download, Share2, ZoomIn, X } from 'lucide-react';
import Link from 'next/link';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState('all');
  const [loading, setLoading] = useState(true);

  // Mouse image data with different categories
  const mouseImages = [
    {
      id: 1,
      src: '/api/placeholder/400/300',
      title: 'Field Mouse in Nature',
      category: 'wild',
      description: 'A tiny field mouse exploring its natural habitat',
      likes: 142
    },
    {
      id: 2,
      src: '/api/placeholder/400/300',
      title: 'White Laboratory Mouse',
      category: 'lab',
      description: 'Clean white mouse in laboratory setting',
      likes: 89
    },
    {
      id: 3,
      src: '/api/placeholder/400/300',
      title: 'Pet Mouse Portrait',
      category: 'pet',
      description: 'Adorable pet mouse close-up portrait',
      likes: 203
    },
    {
      id: 4,
      src: '/api/placeholder/400/300',
      title: 'Mouse Family',
      category: 'wild',
      description: 'Mother mouse with her babies',
      likes: 156
    },
    {
      id: 5,
      src: '/api/placeholder/400/300',
      title: 'Computer Mouse Evolution',
      category: 'tech',
      description: 'Evolution of computer mouse technology',
      likes: 78
    },
    {
      id: 6,
      src: '/api/placeholder/400/300',
      title: 'Harvest Mouse',
      category: 'wild',
      description: 'Tiny harvest mouse on wheat stalk',
      likes: 234
    },
    {
      id: 7,
      src: '/api/placeholder/400/300',
      title: 'Gaming Mouse Setup',
      category: 'tech',
      description: 'High-end gaming mouse with RGB lighting',
      likes: 167
    },
    {
      id: 8,
      src: '/api/placeholder/400/300',
      title: 'Fancy Mouse Varieties',
      category: 'pet',
      description: 'Different varieties of fancy pet mice',
      likes: 198
    },
    {
      id: 9,
      src: '/api/placeholder/400/300',
      title: 'Research Mouse',
      category: 'lab',
      description: 'Mouse in scientific research environment',
      likes: 92
    }
  ];

  const categories = [
    { id: 'all', name: 'All Images', count: mouseImages.length },
    { id: 'wild', name: 'Wild Mice', count: mouseImages.filter(img => img.category === 'wild').length },
    { id: 'pet', name: 'Pet Mice', count: mouseImages.filter(img => img.category === 'pet').length },
    { id: 'lab', name: 'Lab Mice', count: mouseImages.filter(img => img.category === 'lab').length },
    { id: 'tech', name: 'Tech Mice', count: mouseImages.filter(img => img.category === 'tech').length }
  ];

  const filteredImages = filter === 'all' 
    ? mouseImages 
    : mouseImages.filter(img => img.category === filter);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const toggleFavorite = (imageId) => {
    setFavorites(prev => 
      prev.includes(imageId) 
        ? prev.filter(id => id !== imageId)
        : [...prev, imageId]
    );
  };

  const handleDownload = (image) => {
    // Simulate download
    console.log(`Downloading ${image.title}`);
  };

  const handleShare = (image) => {
    if (navigator.share) {
      navigator.share({
        title: image.title,
        text: image.description,
        url: window.location.href
      });
    } else {
      // Fallback for browsers that don't support Web Share API
      navigator.clipboard.writeText(window.location.href);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-12 h-12 border-4 border-white/30 border-t-white rounded-full"
        />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
      {/* Header */}
      <div className="sticky top-0 z-40 backdrop-blur-md bg-black/20 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 text-white hover:text-purple-300 transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span>Back to Home</span>
              </motion.button>
            </Link>
            
            <h1 className="text-2xl font-bold text-white">Mouse Gallery</h1>
            
            <div className="flex items-center gap-2 text-white/70">
              <Heart className="w-5 h-5" />
              <span>{favorites.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap gap-3 mb-8">
          {categories.map((category) => (
            <motion.button
              key={category.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category.id)}
              className={`px-6 py-3 rounded-full backdrop-blur-sm border transition-all duration-300 ${
                filter === category.id
                  ? 'bg-white/20 border-white/30 text-white shadow-lg'
                  : 'bg-white/5 border-white/10 text-white/70 hover:bg-white/10 hover:text-white'
              }`}
            >
              {category.name} ({category.count})
            </motion.button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredImages.map((image) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl backdrop-blur-sm bg-white/5 border border-white/10 shadow-xl"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Action Buttons */}
                  <div className="absolute top-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleFavorite(image.id)}
                      className={`p-2 rounded-full backdrop-blur-sm transition-colors ${
                        favorites.includes(image.id)
                          ? 'bg-red-500/80 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-4 h-4 ${favorites.includes(image.id) ? 'fill-current' : ''}`} />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => setSelectedImage(image)}
                      className="p-2 rounded-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <ZoomIn className="w-4 h-4" />
                    </motion.button>
                  </div>
                  
                  {/* Bottom Actions */}
                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="flex items-center gap-2 text-white text-sm">
                      <Heart className="w-4 h-4" />
                      <span>{image.likes}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleDownload(image)}
                        className="p-1.5 rounded-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30 transition-colors"
                      >
                        <Download className="w-3.5 h-3.5" />
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => handleShare(image)}
                        className="p-1.5 rounded-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30 transition-colors"
                      >
                        <Share2 className="w-3.5 h-3.5" />
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Image Info */}
                <div className="p-4">
                  <h3 className="font-semibold text-white mb-1">{image.title}</h3>
                  <p className="text-white/70 text-sm line-clamp-2">{image.description}</p>
                  
                  <div className="flex items-center justify-between mt-3">
                    <span className="px-2 py-1 rounded-full bg-white/10 text-white/80 text-xs capitalize">
                      {image.category}
                    </span>
                    <div className="flex items-center gap-1 text-white/60 text-xs">
                      <Heart className="w-3 h-3" />
                      <span>{image.likes}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden rounded-2xl backdrop-blur-sm bg-white/10 border border-white/20"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 z-10 p-2 rounded-full backdrop-blur-sm bg-black/50 text-white hover:bg-black/70 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Image Details */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{selectedImage.title}</h2>
                    <p className="text-white/80">{selectedImage.description}</p>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => toggleFavorite(selectedImage.id)}
                      className={`p-3 rounded-full backdrop-blur-sm transition-colors ${
                        favorites.includes(selectedImage.id)
                          ? 'bg-red-500/80 text-white'
                          : 'bg-white/20 text-white hover:bg-white/30'
                      }`}
                    >
                      <Heart className={`w-5 h-5 ${favorites.includes(selectedImage.id) ? 'fill-current' : ''}`} />
                    </motion.button>
                    
                                 <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleDownload(selectedImage)}
                      className="p-3 rounded-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <Download className="w-5 h-5" />
                    </motion.button>
                    
                    <motion.button
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleShare(selectedImage)}
                      className="p-3 rounded-full backdrop-blur-sm bg-white/20 text-white hover:bg-white/30 transition-colors"
                    >
                      <Share2 className="w-5 h-5" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Gallery;
