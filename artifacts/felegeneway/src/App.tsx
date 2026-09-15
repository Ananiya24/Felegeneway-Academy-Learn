import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { Route, Switch } from "wouter";
import AboutPage from "./pages/about";
import ContactPage from "./pages/contact";
import GalleryPage from "./pages/gallery";
import HomePage from "./pages/home";
import NewsPage from "./pages/news";
import ProgramsPage from "./pages/programs";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="font-sans text-foreground selection:bg-accent selection:text-white">
      <Navbar />
      <main>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/programs" component={ProgramsPage} />
          <Route path="/gallery" component={GalleryPage} />
          <Route path="/news" component={NewsPage} />
          <Route path="/contact" component={ContactPage} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  );
}

export default App;