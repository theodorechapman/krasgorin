
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
      "/lovable-uploads/234eba39-9064-427a-8867-444ed28f4ed6.png",
      "/lovable-uploads/e42e785b-00aa-46c7-a575-739736723a9e.png",
      "/lovable-uploads/4d427483-f080-48e2-b41b-8d3c1cd8daed.png",
      "/lovable-uploads/273ccb83-aa89-4634-a895-e9d150c85c90.png",
      "/lovable-uploads/4413eb0d-4088-4e32-8bca-28e5cb2b6f41.png",
      "/lovable-uploads/6a11f824-a3fb-4e84-8e66-6585dc2c3752.png"
    ]
  },
  "3": {
    title: "Mixed Media Collection",
    description: "Experimental works combining various materials and techniques.",
    images: [
      "/lovable-uploads/f645ac43-39a0-4db5-a551-adf54c58ebba.png",
      "/lovable-uploads/595db608-29c8-43e2-8671-b6c38fb919ca.png",
      "/lovable-uploads/0113f857-4bac-4bea-9bed-7f91c0f09946.png",
      "/lovable-uploads/65bcae03-29e8-42f8-b656-f68d8c51ce59.png",
      "/lovable-uploads/48bc7343-a3f7-4127-b1fe-37b5193a1c9d.png",
      "/lovable-uploads/6dfc90e0-dfdb-437c-b526-a60bae709e0d.png",
      "/lovable-uploads/3b3065b1-e881-46f3-a642-4b030d2f70bf.png",
      "/lovable-uploads/47099e6d-1cbb-4c6d-80c0-7d93a8cc5c09.png",
      "/lovable-uploads/f67961da-3d69-4c27-b358-de30d4798bcf.png",
      "/lovable-uploads/3ef4dd48-8fe3-4659-b05c-737b4c88352e.png"
    ]
  },
  "4": {
    title: "Religious Paintings Collection",
    description: "Spiritual and contemplative works exploring Orthodox Christian icons and broader religious themes.",
    images: [
      "/lovable-uploads/8e2c5197-ecca-4fab-87d5-c5e3393706b5.png",
      "/lovable-uploads/6ab4ccfb-df23-4354-a915-8097234f9d52.png",
      "/lovable-uploads/bab90324-5beb-416d-aefb-93dd71af6f03.png",
      "/lovable-uploads/86b30abe-d132-41e0-99da-fae73dc34e7a.png",
      "/lovable-uploads/1de7d452-0900-43af-96e6-8f5e1fdd96eb.png",
      "/lovable-uploads/ddba137b-7b51-41cc-b0d0-fc3108f9cd9b.png",
      "/lovable-uploads/bd995e42-415c-402f-908b-b8b7b5cb2546.png",
      "/lovable-uploads/ffe8128b-5899-44c8-88a9-62e5b351722f.png",
      "/lovable-uploads/d56bf5c4-184e-4645-b784-2b4c8d987d31.png"
    ]
  },
  "5": {
    title: "Point to Point Collection",
    description: "Works commemorating the annual Winterthur Point-to-Point Steeplechase.",
    images: [
      "/lovable-uploads/09b68f99-cdab-4a3c-bb48-06fdde3339bf.png",
      "/lovable-uploads/fad16d17-067f-4bf9-99b4-18f26a2429c7.png",
      "/lovable-uploads/f38a75c6-d053-4c32-8396-82345be1e6b4.png",
      "/lovable-uploads/6bb772fb-e76a-4340-aa2c-b069866f1dd6.png",
      "/lovable-uploads/7c5a39cb-67c2-4905-9f10-564186abe983.png",
      "/lovable-uploads/325485ba-6aed-4a63-a861-b5252e5474ff.png",
      "/lovable-uploads/aa446434-ca8b-4f02-9f1c-6bb988219bee.png"
    ]
  },
  "6": {
    title: "Americana Collection",
    description: "Iconic American symbols and themes expressed through artistic interpretation.",
    images: [
      "/lovable-uploads/aa3bb5ab-28b7-417c-b880-334154ba1a80.png",
      "/lovable-uploads/a438554f-e3e0-4786-bb7c-cf28d662f2ca.png",
      "/lovable-uploads/14701b62-b1a7-406f-9808-2e448953d534.png",
      "/lovable-uploads/a530b8eb-2d97-4ed6-a6cf-d58e56fe2d50.png",
      "/lovable-uploads/36d5b44e-bb7f-49d7-a7f0-9e9da4292372.png"
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
