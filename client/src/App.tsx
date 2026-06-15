import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AdminProvider } from "./contexts/AdminContext";
import { SubmissionsProvider } from "./contexts/SubmissionsContext";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import WhyChooseUs from "./pages/WhyChooseUs";
import Testimonials from "./pages/Testimonials";
import Contact from "./pages/Contact";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import CustomCursor from "./components/CustomCursor";
import { SmoothScrollProvider } from "./contexts/SmoothScrollContext";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/about"} component={About} />
      <Route path={"/services"} component={Services} />
      <Route path={"/portfolio"} component={Portfolio} />
      <Route path={"/why-choose-us"} component={WhyChooseUs} />
      <Route path={"/testimonials"} component={Testimonials} />
      <Route path={"/contact"} component={Contact} />
      <Route path={"/admin-login"} component={AdminLogin} />
      <Route path={"/admin"} component={Admin} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <AdminProvider>
        <SubmissionsProvider>
          <ThemeProvider defaultTheme="light">
            <SmoothScrollProvider>
              <TooltipProvider>
                <CustomCursor />
                <Toaster />
                <Router />
              </TooltipProvider>
            </SmoothScrollProvider>
          </ThemeProvider>
        </SubmissionsProvider>
      </AdminProvider>
    </ErrorBoundary>
  );
}

export default App;
