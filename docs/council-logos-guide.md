# Council Logos Integration Guide

## Overview

This guide explains how to add council logo images to the InfiniteScroll component in the FeaturedEvents section.

## Image Requirements

1. **Format**: PNG or SVG recommended (transparent background)
2. **Size**: Aim for square dimensions (e.g., 200x200px)
3. **Resolution**: At least 72 DPI for web display
4. **File naming**: Use consistent naming like `[council-name].png` (e.g., `ieee.png`)

## File Structure

Place all council logo images in the following directory:
```
client/public/images/council-logos/
```

Example structure:
```
council-logos/
  ├── ieee.png
  ├── csi.png
  ├── sae.png
  └── ...
```

## Implementation Steps

### 1. Add Logo Images

Upload your council logo images to the `client/public/images/council-logos/` directory.

### 2. Update the FeaturedEvents Component

Modify the `scrollItems` array in `FeaturedEvents.tsx` to include the logo images:

```tsx
// Convert council data to the format needed by InfiniteScroll
const scrollItems = councilData.map(council => {
  // Construct image path based on council name
  const logoPath = `/images/council-logos/${council.name.toLowerCase()}.png`;
  
  return {
    content: (
      <div className="p-4">
        <div className="flex flex-col items-center justify-center">
          {/* Replace placeholder with actual logo image */}
          <div className="mb-3 w-20 h-20 flex items-center justify-center">
            <img 
              src={logoPath} 
              alt={`${council.name} logo`} 
              className="max-h-full max-w-full object-contain"
              onError={(e) => {
                // Fallback to initial if image fails to load
                e.currentTarget.style.display = 'none';
                e.currentTarget.parentElement!.innerHTML = `
                  <div class="w-16 h-16 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full flex items-center justify-center">
                    <span class="text-xl font-bold text-white">${council.name.charAt(0)}</span>
                  </div>
                `;
              }}
            />
          </div>
          <h3 className="text-lg font-medium text-foreground mb-1">{council.name}</h3>
          <p className="text-xs text-muted-foreground text-center">{council.description}</p>
        </div>
      </div>
    )
  };
});
```

### 3. Advanced: Custom Logo Paths

If your logo files don't follow the naming convention:

```tsx
// Council data with explicit logo paths
const councilData = [
  { 
    name: "IEEE", 
    description: "Institute of Electrical and Electronics Engineers",
    logoPath: "/images/council-logos/ieee-logo-custom.png"
  },
  { 
    name: "CSI", 
    description: "Computer Society of India",
    logoPath: "/images/council-logos/csi-emblem.png" 
  },
  // ... other councils
];

// And then in the scrollItems mapping:
const scrollItems = councilData.map(council => ({
  content: (
    <div className="p-4">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-3 w-20 h-20 flex items-center justify-center">
          <img 
            src={council.logoPath || `/images/council-logos/${council.name.toLowerCase()}.png`}
            alt={`${council.name} logo`} 
            className="max-h-full max-w-full object-contain"
            onError={(e) => {
              // Fallback code here...
            }}
          />
        </div>
        <h3 className="text-lg font-medium text-foreground mb-1">{council.name}</h3>
        <p className="text-xs text-muted-foreground text-center">{council.description}</p>
      </div>
    </div>
  )
}));
```

## Styling Considerations

1. **Sizing**: The logos are displayed within a container of fixed dimensions. Adjust the `w-20 h-20` classes in the example code to change the size.

2. **Background**: By default, logos are displayed on a transparent background. If you want to add a background:
   ```tsx
   <div className="mb-3 w-20 h-20 bg-white/10 p-2 rounded-lg flex items-center justify-center">
     <img ... />
   </div>
   ```

3. **Hover Effects**: The existing hover effect makes the card slightly elevated. You can enhance this:
   ```css
   .infinite-scroll-item:hover img {
     transform: scale(1.1);
     transition: transform 0.3s ease;
   }
   ```

## Troubleshooting

1. **Images Not Loading**: Make sure the path is correct. The path should be relative to the `public` directory.

2. **Images Too Large/Small**: Use the CSS classes to control the container size and `object-fit` property for the image.

3. **Poor Quality Images**: Replace with higher resolution images or SVG formats when possible.

## Best Practices

1. **Optimize Images**: Compress PNG files or use SVG for better performance.
2. **Consistent Dimensions**: Keep all logos with similar dimensions for visual harmony.
3. **Preload Critical Images**: Add preload links for faster initial display.
4. **Test Mobile Rendering**: Ensure logos look good on smaller screens.

---

Remember to update the README.md file in the council-logos directory to document the expected image format and naming conventions for other developers.