import React from 'react';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

const MouseCard = ({ 
  image, 
  title, 
  description, 
  species, 
  habitat,
  size,
  className = "",
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -5, scale: 1.02 }}
      className={`group ${className}`}
      {...props}
    >
      <Card className="relative overflow-hidden border-0 bg-white/10 backdrop-blur-md shadow-xl hover:shadow-2xl transition-all duration-300 hover:bg-white/20">
        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
        
        <CardContent className="relative p-0">
          {/* Image Container */}
          <div className="relative h-64 overflow-hidden">
            <motion.img
              src={image || "/api/placeholder/400/300"}
              alt={title || "Mouse"}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {/* Species Badge */}
            {species && (
              <Badge className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30">
                {species}
              </Badge>
            )}
          </div>

          {/* Content */}
          <div className="p-6 space-y-4">
            <div className="space-y-2">
              <h3 className="text-xl font-semibold text-white group-hover:text-white/90 transition-colors">
                {title || "Field Mouse"}
              </h3>
              <p className="text-white/70 text-sm leading-relaxed">
                {description || "A small rodent commonly found in fields and grasslands."}
              </p>
            </div>

            {/* Details */}
            <div className="flex flex-wrap gap-2">
              {habitat && (
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="w-2 h-2 bg-green-400/60 rounded-full"></span>
                  <span>Habitat: {habitat}</span>
                </div>
              )}
              {size && (
                <div className="flex items-center gap-2 text-xs text-white/60">
                  <span className="w-2 h-2 bg-blue-400/60 rounded-full"></span>
                  <span>Size: {size}</span>
                </div>
              )}
            </div>

            {/* Glassmorphic accent line */}
            <div className="w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            
            {/* Interactive elements */}
            <div className="flex justify-between items-center pt-2">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white/70 hover:text-white text-sm font-medium transition-colors"
              >
                Learn More
              </motion.button>
              <div className="flex gap-1">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-1.5 h-1.5 bg-white/40 rounded-full group-hover:bg-white/60 transition-colors"
                  />
                ))}
              </div>
            </div>
          </div>
        </CardContent>

        {/* Hover effect overlay */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent" />
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/50 to-transparent" />
          <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        </div>
      </Card>
    </motion.div>
  );
};

export default MouseCard;