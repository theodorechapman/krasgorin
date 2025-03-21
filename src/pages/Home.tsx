
import Layout from "../components/Layout";
import { Heart } from "lucide-react";
import { Link } from "react-router-dom";

const galleries = [
  {
    id: 1,
    image: "/lovable-uploads/c56be914-595e-4bf3-a890-18c9d4c5e95e.png",
    title: "Click for the mosaic collection"
  },
  {
    id: 2,
    image: "/lovable-uploads/1e6c0b09-6f1d-4e6f-ae7f-2108e53f5fae.png",
    title: "Click for the abstract collection"
  },
  {
    id: 3,
    image: "/lovable-uploads/6b108f2b-be6a-46e3-8688-2f554ef95419.png",
    title: "Click for the mixed media collection"
  },
  {
    id: 4,
    image: "/lovable-uploads/fba64bab-a003-433b-b64f-df2e47b2352e.png",
    title: "Click for the religious paintings collection"
  },
  {
    id: 5,
    image: "/lovable-uploads/c96d7f05-825b-4b39-a989-cc46de8b8147.png",
    title: "Click for the Point to Point collection"
  },
  {
    id: 6,
    image: "/lovable-uploads/a0b69580-84bf-472e-958c-3ecdcb96554d.png",
    title: "Click for the pet portrait collection"
  }
];

const Home = () => {
  return (
    <Layout>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {galleries.map((gallery) => (
          <Link key={gallery.id} to={`/gallery/${gallery.id}`} className="aspect-square gallery-image">
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
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
