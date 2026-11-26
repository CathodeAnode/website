import type { ReactElement } from "react";
import { BrowserRouter, Route, Routes } from "react-router";
import { styled } from "styled-system/jsx";
import { HomePage } from "@/pages/home";
import { NotFoundPage } from "@/pages/not-found";
import { SiteFooter } from "@/widgets/site-footer";
import { SiteHeader } from "@/widgets/site-header";

export function App(): ReactElement {
    return (
        <BrowserRouter>
            <styled.div
                css={{
                    position: "relative",
                    zIndex: 1,
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100dvh",
                }}
            >
                <SiteHeader />
                <styled.main css={{ flex: 1 }}>
                    <Routes>
                        <Route
                            path="/"
                            element={<HomePage />}
                        />
                        <Route
                            path="*"
                            element={<NotFoundPage />}
                        />
                    </Routes>
                </styled.main>
                <SiteFooter />
            </styled.div>
        </BrowserRouter>
    );
}
