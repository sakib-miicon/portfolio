"use client";
import { Button } from "@/components/ui/button";
import {
  ChevronLeft,
  ChevronRight,
  ImageIcon,
  ExternalLink,
  Github,
} from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description:
      "Full-stack e-commerce solution with payment integration, inventory management, and admin dashboard.",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    image: "/placeholder.svg?height=200&width=400",
    externalLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/example/ecommerce",
  },
  {
    id: 2,
    title: "Task Management App",
    description:
      "Collaborative task management application with real-time updates and team collaboration features.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    image: "/placeholder.svg?height=200&width=400",
    externalLink: "https://example.com/task-management",
    githubLink: "https://github.com/example/task-management",
  },
];

export default function PortfolioSection() {
  return (
    <section className="bg-slate-900/50 backdrop-blur-sm py-16 px-6 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/4 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div>
            <p className="text-slate-400 text-sm mb-2">
              some of my recent works
            </p>
            <h2 className="text-white text-5xl font-bold">PROJECTS</h2>
          </div>
          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-slate-400 hover:text-white hover:bg-slate-700/50"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/80 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 hover:scale-105 transition-all duration-300 group border border-slate-700/50 hover:border-blue-500/30"
            >
              {/* Project Image Placeholder */}
              <div className="h-48 bg-slate-700/50 flex items-center justify-center border-b border-slate-600/50 relative overflow-hidden">
                {/* Default state */}
                <div className="flex flex-col items-center text-slate-500 group-hover:opacity-0 transition-opacity duration-300">
                  <ImageIcon className="h-12 w-12 mb-2" />
                  <span className="text-sm">Project Preview</span>
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-blue-900/20 via-blue-900/40 to-slate-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
                  {/* Project title on hover */}
                  <h3 className="text-white text-lg font-semibold">
                    {project.title}
                  </h3>

                  {/* Action buttons */}
                  <div className="flex gap-2 self-end">
                    <Button
                      size="icon"
                      className="bg-white/90 hover:bg-white text-gray-800 h-8 w-8"
                    >
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                    <Button
                      size="icon"
                      className="bg-white/90 hover:bg-white text-gray-800 h-8 w-8"
                    >
                      <Github className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="bg-slate-800/90 p-6">
                <h3 className="text-white text-xl font-semibold mb-3">
                  {project.title}
                </h3>
                <p className="text-slate-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="bg-emerald-500 text-white text-xs px-3 py-1 rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
