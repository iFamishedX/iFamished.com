import { GlassCard, GlassButton, usePageTitle } from "ifamished-ui"

const projects = [
  {
    name: "HungerBridge",
    description:
      "A lightweight multiloader HTTP bridge for Minecraft servers. Provides secure run, log, and ping endpoints for automation, dashboards, and remote control.",
    stack: ["Fabric", "Paper", "Purpur", "Quilt", "Folia"],
    features: [
      "Secure /run, /log, /ping endpoints",
      "Zero-noise, automation-focused design",
      "Ideal for dashboards and remote control",
    ],
    github: "https://github.com/iFamishedX/HungerBridge",
    modrinth: "https://modrinth.com/project/hungerbridge",
  },
  {
    name: "HungerLib",
    description:
      "A Python library mainly for interacting with Minecraft servers. Clients for command execution, log streaming, and server status polling.",
    stack: ["Python", "Library", "API"],
    features: [
      "Command execution and log streaming",
      "Pterodactyl Panel integration",
      "Clean API and codebase, ideal for automation and scripting",
      "Lightweight and easy to integrate",
    ],
    github: "https://github.com/iFamishedX/HungerLib",
    pypi: "https://pypi.org/project/hungerlib/",
  },
  {
    name: "MapRes",
    description:
      "A fast, modern string mapping Python library designed with scalability in mind.",
    stack: ["Python", "Utility"],
    features: [
      "Optimized for speed and low memory usage"
    ],
    github: "https://github.com/iFamishedX/mapres",
    pypi: "https://pypi.org/project/mapres/",
  },
  {
    name: "OptiFine for Fabric",
    description:
      "A modern OptiFine alternative built natively for Fabric. Provides performance boosts, visual enhancements, and shader support where applicable.",
    stack: ["Fabric", "Performance", "Shaders"],
    features: [
      "Performance enhancements",
      "Visual improvements",
      "Shader support (where applicable)",
    ],
    github: "https://github.com/iFamishedX/optifine-for-fabric",
    modrinth: "https://modrinth.com/project/optifine-for-fabric",
  },
  {
    name: "The Hunger SMP",
    description:
      "A semi-anarchy Minecraft server focused on performance and minimal rules. Powered by custom tooling including HungerBridge and HungerLib.",
    stack: ["SMP", "Semi-Anarchy", "Performance"],
    features: [
      "Minimal rules, high freedom",
      "Performance-tuned server environment",
      "Custom backend tooling",
    ],
    website: "https://hungersmp.com/",
    modrinth: "https://modrinth.com/server/the-hunger-smp",
  },
]

export default function Projects() {
  usePageTitle("iFamished | Projects")

  return (
    <div className="page">
      <div className="page-header fade-in-up">
        <h1>Projects</h1>
        <p>Tools, mods, and infrastructure across the Minecraft ecosystem.</p>
      </div>

      <section className="section">
        <div className="projects-grid stagger">
          {projects.map((p, i) => (
            <GlassCard key={p.name} className="project-card" style={{ "--i": i }}>
              <h3 className="project-title">{p.name}</h3>
              <p className="project-desc">{p.description}</p>

              <div className="project-stack">
                {p.stack.map((t) => (
                  <span key={t} className="tech-tag">
                    {t}
                  </span>
                ))}
              </div>

              <ul className="project-list">
                {p.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>

              <div className="project-links">
                {p.website && (
                  <GlassButton href={p.website} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                      <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm0 0c2.5 2.5 4 5.5 4 9s-1.5 6.5-4 9m0-18c-2.5 2.5-4 5.5-4 9s1.5 6.5 4 9m-7-9h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                    Website
                  </GlassButton>
                )}

                {p.github && (
                  <GlassButton href={p.github} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 .5C5.73.5.5 5.74.5 12.02c0 5.1 3.29 9.43 7.86 10.96.58.11.79-.25.79-.56v-2.17c-3.2.7-3.87-1.55-3.87-1.55-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.21 1.78 1.21 1.04 1.78 2.73 1.27 3.4.97.1-.76.41-1.27.75-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.2-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a10.9 10.9 0 0 1 2.9-.39c.98 0 1.97.13 2.9.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.59.23 2.76.11 3.05.75.81 1.2 1.84 1.2 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.68.8.56A10.53 10.53 0 0 0 23.5 12C23.5 5.74 18.27.5 12 .5z"/>
                    </svg>
                    GitHub
                  </GlassButton>
                )}

                {p.modrinth && (
                  <GlassButton href={p.modrinth} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12.252.004a11.78 11.768 0 0 0-8.92 3.73a11 11 0 0 0-2.17 3.11a11.37 11.359 0 0 0-1.16 5.169c0 1.42.17 2.5.6 3.77c.24.759.77 1.899 1.17 2.529a12.3 12.298 0 0 0 8.85 5.639c.44.05 2.54.07 2.76.02c.2-.04.22.1-.26-1.7l-.36-1.37l-1.01-.06a8.5 8.489 0 0 1-5.18-1.8a5.3 5.3 0 0 1-1.3-1.26c0-.05.34-.28.74-.5a37.572 37.545 0 0 1 2.88-1.629c.03 0 .5.45 1.06.98l1 .97l2.07-.43l2.06-.43l1.47-1.47c.8-.8 1.48-1.5 1.48-1.52c0-.09-.42-1.63-.46-1.7c-.04-.06-.2-.03-1.02.18c-.53.13-1.2.3-1.45.4l-.48.15l-.53.53l-.53.53l-.93.1l-.93.07l-.52-.5a2.7 2.7 0 0 1-.96-1.7l-.13-.6l.43-.57c.68-.9.68-.9 1.46-1.1c.4-.1.65-.2.83-.33c.13-.099.65-.579 1.14-1.069l.9-.9l-.7-.7l-.7-.7l-1.95.54c-1.07.3-1.96.53-1.97.53c-.03 0-2.23 2.48-2.63 2.97l-.29.35l.28 1.03c.16.56.3 1.16.31 1.34l.03.3l-.34.23c-.37.23-2.22 1.3-2.84 1.63c-.36.2-.37.2-.44.1c-.08-.1-.23-.6-.32-1.03c-.18-.86-.17-2.75.02-3.73a8.84 8.84 0 0 1 7.9-6.93c.43-.03.77-.08.78-.1c.06-.17.5-2.999.47-3.039c-.01-.02-.1-.02-.2-.03Z"/>
                    </svg>
                    Modrinth
                  </GlassButton>
                )}

                {p.pypi && (
                  <GlassButton href={p.pypi} size="sm" variant="primary">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-1.326 0-2.402.986-2.402 2.203v4.406c0 1.217 1.076 2.203 2.402 2.203h4.406c1.326 0 2.402-.986 2.402-2.203V2.203C18.808.986 17.732 0 16.406 0H12zM7.594 9.188C6.268 9.188 5.192 10.174 5.192 11.39v4.406c0 1.217 1.076 2.203 2.402 2.203h4.406c1.326 0 2.402-.986 2.402-2.203V11.39c0-1.217-1.076-2.203-2.402-2.203H7.594z"/>
                    </svg>
                    PyPI
                  </GlassButton>
                )}
              </div>

            </GlassCard>
          ))}
        </div>
      </section>
    </div>
  )
}
