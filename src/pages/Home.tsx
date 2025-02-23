
import Layout from "../components/Layout";
import { Heart } from "lucide-react";

const galleries = [
  {
    id: 1,
    image: "/lovable-uploads/5767049f-9ecf-4e14-a39d-90bf806e49a3.png",
    title: "Click for emotions in space collection"
  },
  {
    id: 2,
    image: "/lovable-uploads/89627bb8-8035-47c6-a97b-bcf230bf288a.png",
    title: "Click for the mosaic collection"
  },
  {
    id: 3,
    image: "/lovable-uploads/3a003761-53c2-42e6-9a4c-7073ecb8639a.png",
    title: "Click for the mixed media collection"
  },
  {
    id: 4,
    image: "/lovable-uploads/2eb99fc8-75be-4e26-b4e5-20707f5af501.png",
    title: "Click for the religious paintings collection"
  },
  {
    id: 5,
    image: "/lovable-uploads/feeefabb-593d-4957-9613-19f955bbb3bb.png",
    title: "Click for the Point to Point collection"
  },
  {
    id: 6,
    image: "/lovable-uploads/cd68e19e-b18e-4927-bfb4-6b36c36a1644.png",
    title: "Click for the pet portrait collection"
  }
];

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleries.map((gallery) => (
          <div key={gallery.id} className="aspect-square gallery-image">
            <img
              src={gallery.image}
              alt={gallery.title}
              className="w-full h-full object-cover"
            />
            <div className="gallery-overlay">
              <p className="text-center px-4 mb-4 text-lg">{gallery.title}</p>
              <button className="p-2 rounded-full hover:bg-white/20 transition-colors">
                <Heart className="w-6 h-6" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
