
import { useParams } from "react-router-dom";
import Layout from "../components/Layout";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useEffect, useState } from "react";

// Define the gallery data structure
interface GalleryItem {
  id: number;
  image: string;
  title: string;
}

// Collection data mapped by id
const collectionData: Record<string, {
  title: string;
  description: string;
  images: string[];
}> = {
  "1": {
    title: "Mosaic Collection",
    description: "A series exploring texture and pattern through mosaic techniques.",
    images: [
      "/lovable-uploads/c56be914-595e-4bf3-a890-18c9d4c5e95e.png",
      "/lovable-uploads/2eb99fc8-75be-4e26-b4e5-20707f5af501.png",
      "/lovable-uploads/3a003761-53c2-42e6-9a4c-7073ecb8639a.png"
    ]
  },
  "2": {
    title: "Abstract Collection",
    description: "Bold expressions of form and color in abstract compositions.",
    images: [
      "/lovable-uploads/1e6c0b09-6f1d-4e6f-ae7f-2108e53f5fae.png",
      "/lovable-uploads/5767049f-9ecf-4e14-a39d-90bf806e49a3.png",
      "/lovable-uploads/89627bb8-8035-47c6-a97b-bcf230bf288a.png"
    ]
  },
  "3": {
    title: "Mixed Media Collection",
    description: "Experimental works combining various materials and techniques.",
    images: [
      "/lovable-uploads/6b108f2b-be6a-46e3-8688-2f554ef95419.png",
      "/lovable-uploads/cd68e19e-b18e-4927-bfb4-6b36c36a1644.png",
      "/lovable-uploads/a00fc0fe-587c-42f8-b910-dc8ad97bf1cd.png"
    ]
  },
  "4": {
    title: "Religious Paintings Collection",
    description: "Spiritual and contemplative works exploring religious themes.",
    images: [
      "/lovable-uploads/fba64bab-a003-433b-b64f-df2e47b2352e.png",
      "/lovable-uploads/feeefabb-593d-4957-9613-19f955bbb3bb.png"
    ]
  },
  "5": {
    title: "Point to Point Collection",
    description: "Intricate works exploring connectivity and pattern.",
    images: [
      "/lovable-uploads/c96d7f05-825b-4b39-a989-cc46de8b8147.png",
      "/lovable-uploads/cd68e19e-b18e-4927-bfb4-6b36c36a1644.png"
    ]
  },
  "6": {
    title: "Pet Portrait Collection",
    description: "Beloved animal companions captured in distinctive style.",
    images: [
      "/lovable-uploads/a0b69580-84bf-472e-958c-3ecdcb96554d.png",
      "/lovable-uploads/89627bb8-8035-47c6-a97b-bcf230bf288a.png"
    ]
  }
};

const GalleryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const collection = id ? collectionData[id] : null;
  
  useEffect(() => {
    // Reset loading state when gallery changes
    setLoading(true);
    setLoadedImages(0);
  }, [id]);
  
  // Calculate when all images are loaded
  useEffect(() => {
    if (collection && loadedImages === collection.images.length) {
      setLoading(false);
    }
  }, [loadedImages, collection]);

  const handleImageLoad = () => {
    setLoadedImages(prev => prev + 1);
  };

  if (!collection) {
    return (
      <Layout>
        <div className="text-center py-12">
          <h2 className="text-2xl font-medium mb-4">Gallery not found</h2>
          <p>Sorry, we couldn't find the collection you're looking for.</p>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-medium tracking-wide mb-2">{collection.title}</h2>
          <p className="text-gray-600">{collection.description}</p>
        </div>

        {loading && (
          <div className="flex justify-center items-center h-40">
            <div className="text-center">
              <p className="text-lg mb-2">Loading artwork...</p>
              <p className="text-sm text-gray-500">
                {loadedImages} of {collection.images.length} images loaded
              </p>
            </div>
          </div>
        )}

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-6 ${loading ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
          {collection.images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <AspectRatio ratio={4/3}>
                <img 
                  src={image} 
                  alt={`${collection.title} artwork ${index + 1}`} 
                  className="w-full h-full object-cover"
                  onLoad={handleImageLoad}
                />
              </AspectRatio>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
