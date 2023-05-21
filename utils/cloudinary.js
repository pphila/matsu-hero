import cloudinary from 'cloudinary';

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export async function getAllImages() {
  const res = await cloudinary.v2.api.resources({
    type: 'upload',
    prefix: 'Carousel',
  });

  const sliderData = res.resources.map((images, key) => ({
    id: key,
    ...images,
  }));
  console.log('slider data', sliderData);
  return sliderData;
}