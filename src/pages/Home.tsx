
import Layout from "../components/Layout";
import { Link } from "react-router-dom";

const galleries = [
  {
    id: 7,
    image: "/lovable-uploads/d5a2de54-9946-48f2-9830-8c3b8e1a7889.png",
    title: "Click for 2025 collection"
  },
  {
    id: 1,
    image: "/lovable-uploads/68d07db1-add3-400b-b833-820d738607d3.png",
    title: "Click for mosaic collection"
  },
  {
    id: 2,
    image: "/lovable-uploads/234eba39-9064-427a-8867-444ed28f4ed6.png",
    title: "Click for Emotions In Space collection"
  },
  {
    id: 3,
    image: "/lovable-uploads/f645ac43-39a0-4db5-a551-adf54c58ebba.png",
    title: "Click for mixed media collection"
  },
  {
    id: 4,
    image: "/lovable-uploads/8e2c5197-ecca-4fab-87d5-c5e3393706b5.png",
    title: "Click for religious paintings collection"
  },
  {
    id: 6,
    image: "/lovable-uploads/a0b69580-84bf-472e-958c-3ecdcb96554d.png",
    title: "Click for pet portrait collection"
  },
  {
    id: 5,
    image: "/lovable-uploads/c96d7f05-825b-4b39-a989-cc46de8b8147.png",
    title: "Click for Point to Point collection"
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
              <p className="text-center px-4 text-lg">{gallery.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </Layout>
  );
};

export default Home;
