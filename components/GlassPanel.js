import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../lib/utils';

const GlassPanel = React.forwardRef(({
  children,
  className,
  variant = 'default',
  blur = 'md',
  opacity = 'medium',
  border = true,
  hover = false,
  ...props
}, ref) => {
  const variants = {
    default: 'bg-white/10',
    dark: 'bg-black/10',
    primary: 'bg-blue-500/10',
    secondary: 'bg-purple-500/10',
    accent: 'bg-pink-500/10'
  };

  const blurLevels = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl'
  };

  const opacityLevels = {
    low: 'bg-opacity-5',
    medium: 'bg-opacity-10',
    high: 'bg-opacity-20'
  };

  const baseClasses = cn(
    'relative overflow-hidden',
    variants[variant],
    blurLevels[blur],
    border && 'border border-white/20',
    'shadow-lg shadow-black/5',
    className
  );

  const Component = hover ? motion.div : 'div';

  const hoverProps = hover ? {
    whileHover: {
      scale: 1.02,
      backgroundColor: 'rgba(255, 255, 255, 0.15)',
      transition: { duration: 0.2 }
    },
    whileTap: {
      scale: 0.98
    }
  } : {};

  return (
    <Component
      ref={ref}
      className={baseClasses}
      {...hoverProps}
      {...props}
    >
      {/* Glass effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
      
      {/* Border highlight */}
      {border && (
        <div className="absolute inset-0 rounded-inherit">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-white/20 to-transparent" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </Component>
  );
});

GlassPanel.displayName = 'GlassPanel';

export default GlassPanel;