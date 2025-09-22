interface ThirdEyeGlyphProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
  animated?: boolean;
}

export default function ThirdEyeGlyph({ 
  size = 'md', 
  className = '', 
  animated = true 
}: ThirdEyeGlyphProps) {
  const sizes = {
    sm: 'w-12 h-12',
    md: 'w-16 h-16',
    lg: 'w-24 h-24',
    xl: 'w-32 h-32'
  };

  const iconSizes = {
    sm: 'text-xl',
    md: 'text-2xl',
    lg: 'text-4xl',
    xl: 'text-6xl'
  };

  return (
    <div 
      className={`${sizes[size]} bg-primary/20 rounded-full flex items-center justify-center gold-glow relative ${animated ? 'animate-float force-animate' : ''} ${className}`}
      data-testid="third-eye-glyph"
    >
      <i className={`fas fa-eye text-accent ${iconSizes[size]}`} />
      
      {/* Rotating rings around the eye */}
      {animated && (
        <>
          <div 
            className="absolute inset-0 border-2 border-accent/30 rounded-full animate-spin force-animate" 
            style={{ animationDuration: '8s' }}
          />
          <div 
            className="absolute inset-2 border border-accent/20 rounded-full animate-spin force-animate" 
            style={{ 
              animationDuration: '12s', 
              animationDirection: 'reverse' 
            }}
          />
        </>
      )}
    </div>
  );
}
