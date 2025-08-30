# Placeholder Assets Guide

This folder contains the configuration for all placeholder assets used in the presentation. To customize the presentation with your own content, simply replace the URLs in `/assets/placeholders.ts`.

## How to Replace Placeholders

### 1. Company Logos

Update the `LOGOS` object in `placeholders.ts`:

```typescript
export const LOGOS = {
  HDFC_LIFE: "YOUR_HDFC_LOGO_URL_HERE",
  ICICI_PRUDENTIAL: "YOUR_ICICI_LOGO_URL_HERE"
};
```

**Recommended specs:**
- Format: PNG with transparent background
- Size: 200x200px minimum 
- Aspect ratio: Square or slightly rectangular
- High resolution for crisp display

### 2. Team Member Photos

Update the `TEAM_MEMBERS` object with your team information:

```typescript
export const TEAM_MEMBERS = {
  MEMBER_1: {
    name: "Your Name",
    role: "Your Role", 
    image: "YOUR_PHOTO_URL_HERE"
  },
  // ... repeat for all team members
};
```

**Recommended specs:**
- Format: JPG or PNG
- Size: 300x300px minimum
- Aspect ratio: Square (1:1)
- Professional headshot style
- Good lighting and clear face

### 3. Company Information

Update the `COMPANY_INFO` object:

```typescript
export const COMPANY_INFO = {
  TEAM_NAME: "Your Team Name",
  PROJECT_TITLE: "Your Project Title",
  SUBTITLE: "Your Project Subtitle",
  MBA_PROGRAM: "Your Program Name",
  UNIVERSITY: "Your University"
};
```

## Where These Assets Appear

### Logos
- **HDFC_LIFE**: Slide 3 (HDFC Overview)
- **ICICI_PRUDENTIAL**: Slide 4 (ICICI Overview)

### Team Member Images
- **All Members**: Slide 14 (Team & Thank You)

### Company Information
- **TEAM_NAME**: Slides 1 and 14
- **SUBTITLE**: Slide 1
- **Other info**: Referenced throughout presentation

## Image Hosting Options

### Free Options:
1. **GitHub**: Upload to your repository and use the raw URL
2. **Imgur**: Upload and copy direct link
3. **Google Drive**: Upload, share publicly, and use direct link
4. **Unsplash**: Use existing high-quality stock photos

### Professional Options:
1. **Cloudinary**: Professional image hosting with optimization
2. **AWS S3**: Enterprise-grade storage
3. **Company website**: Host on your organization's domain

## Tips for Best Results

1. **Consistent sizing**: Keep all team photos the same dimensions
2. **High quality**: Use at least 300px images to avoid pixelation
3. **Fast loading**: Optimize images for web (compress without losing quality)
4. **Reliable hosting**: Use stable hosting services for presentation reliability
5. **Backup URLs**: Keep backup copies of your images

## Example Workflow

1. Gather your team photos and logos
2. Upload to your preferred hosting service
3. Copy the direct image URLs
4. Replace the placeholder URLs in `placeholders.ts`
5. Test the presentation to ensure all images load correctly

## Need Help?

If you encounter issues with image loading:
- Check that URLs are publicly accessible
- Verify the image format is supported (JPG, PNG, GIF, WebP)
- Ensure URLs are direct links to images, not web pages
- Test URLs in a browser to confirm they display the image

---

**Note**: All current placeholder images are from Unsplash and are free to use for any purpose.