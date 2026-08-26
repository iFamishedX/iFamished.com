import { Routes, Route, Navigate } from "react-router-dom"
import { Navbar, Footer } from "ifamished-ui"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const navItems = [
  { to: "/", label: "Home", end: true },
  { to: "/about", label: "About" },
  { to: "/projects", label: "Projects" },
  { to: "/contact", label: "Contact" },
]

const socials = [
  { label: "GitHub", href: "https://github.com/iFamished" },
  { label: "Modrinth", href: "https://modrinth.com/user/iFamished" },
  { label: "Discord", href: "https://discord.com/users/iFamished" },
]

export default function App() {
  return (
    <>
      <Navbar
        brand="iFamished"
        brandDotColor="#22d3ee"
        navItems={navItems}
      />

      <div className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Footer
        brand="iFamished"
        socials={socials}
        footerNote={`© ${new Date().getFullYear()} iFamished. All rights reserved.`}
      />
    </>
  )
}
