
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Info from "./pages/Info";
import GalleryPage from "./pages/GalleryPage";
import ArtworkDetailPage from "./pages/ArtworkDetailPage";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/info" element={<Info />} />
        <Route path="/gallery/:id" element={<GalleryPage />} />
        <Route path="/artwork/:collectionId/:imageIndex" element={<ArtworkDetailPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
