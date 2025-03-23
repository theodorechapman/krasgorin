
import { useParams, Link } from "react-router-dom";
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
      "/lovable-uploads/26428e69-856f-497a-ada6-cd4f85add9d6.png",
      "/lovable-uploads/1eff9295-7f13-4210-8324-043c53c4f274.png",
      "/lovable-uploads/955962a9-2a97-4f02-af11-fe5c17aabea6.png",
      "/lovable-uploads/c6f25d97-a411-43e6-95c3-3e5b692a055d.png",
      "/lovable-uploads/13f861f2-5518-4284-9d5f-cc3a0f7892ce.png",
      "/lovable-uploads/ae6d8397-cc3a-4d7d-bb72-d6f9db98a4b4.png",
      "/lovable-uploads/84ffa129-fc08-4339-8236-7e4249024516.png",
      "/lovable-uploads/d3178134-4efb-4e22-b2b3-601b34d29d53.png",
      "/lovable-uploads/ce7bd3c8-5ebe-43bf-9825-d6486496f9f6.png"
    ]
  },
  "2": {
    title: "Emotions In Space Collection",
    description: "Bold expressions of form and emotion in cosmic-inspired compositions.",
    images: [
      "/lovable-uploads/c56be914-595e-4bf3-a890-18c9d4c5e95e.png",
      "/lovable-uploads/2eb99fc8-75be-4e26-b4e5-20707f5af501.png",
      "/lovable-uploads/3a003761-53c2-42e6-9a4c-7073ecb8639a.png"
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
  },
  "7": {
    title: "2025 Collection",
    description: "The newest collection of abstract expressionist works for 2025.",
    images: [
      "/lovable-uploads/2cdb16cd-7964-449f-8af4-46d87c39ad4e.png",
      "/lovable-uploads/a25a5634-2736-4d28-af66-0ccf77020356.png",
      "/lovable-uploads/ffcd2be0-5b06-4608-9f0e-f8717aaa520c.png",
      "/lovable-uploads/171dbeb6-307b-4b73-b54b-c905af6ff99c.png",
      "/lovable-uploads/0a42412b-8939-428d-932f-518c2fa4805e.png",
      "/lovable-uploads/da0d3aa7-b448-4150-8414-1cb06bcb0360.png",
      "/lovable-uploads/48cfee6c-3d99-4fab-87fb-9a9f50389322.png",
      "/lovable-uploads/59e6dc4e-a5cf-423b-aac2-db9debe48ee1.png",
      "/lovable-uploads/6cc783af-8311-4ffa-8c98-f5bdddfb15a2.png",
      "/lovable-uploads/ab30b64e-51ad-4942-be46-c578d4a001c3.png",
      "/lovable-uploads/39200fd3-1501-4474-892f-95fe30f88591.png",
      "/lovable-uploads/6f007ffc-beb3-463c-9df8-3854ea4915fb.png"
    ]
  }
};

const GalleryPage = () => {
  const { id } = useParams<{ id: string }>();
  const [loading, setLoading] = useState(true);
  const [loadedImages, setLoadedImages] = useState<number>(0);
  const collection = id ? collectionData[id] : null;
  
  useEffect(() => {
    setLoading(true);
    setLoadedImages(0);
  }, [id]);
  
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
            <Link 
              key={index} 
              to={`/artwork/${id}/${index}`}
              className="rounded-lg overflow-hidden shadow-md transition-transform hover:scale-[1.02]"
            >
              <AspectRatio ratio={4/3}>
                <img 
                  src={image} 
                  alt={`${collection.title} artwork ${index + 1}`} 
                  className="w-full h-full object-cover"
                  onLoad={handleImageLoad}
                />
              </AspectRatio>
            </Link>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default GalleryPage;
