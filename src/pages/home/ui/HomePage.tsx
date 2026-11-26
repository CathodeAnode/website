import type { ReactElement } from "react";
import { Divider, PageBounds } from "@/shared/ui";
import { AboutSection } from "./AboutSection.tsx";
import { HeroSection } from "./HeroSection.tsx";
import { ProjectsSection } from "./ProjectsSection.tsx";
import { SubdomainsSection } from "./SubdomainsSection.tsx";

export function HomePage(): ReactElement {
    return (
        <PageBounds>
            <HeroSection />
            <Divider />
            <SubdomainsSection />
            <Divider />
            <ProjectsSection />
            <Divider />
            <AboutSection />
        </PageBounds>
    );
}
