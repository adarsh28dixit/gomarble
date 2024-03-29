import { ErrorComponent, GitHubBanner, Refine } from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import routerBindings, {
    DocumentTitleHandler,
    UnsavedChangesNotifier,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import {
    BrowserRouter,
    Navigate,
    Outlet,
    Route,
    Routes,
} from "react-router-dom";
import "./App.css";
import { Layout } from "./components/layout";
import { HomeIcon, ShoppingCartIcon, TagIcon } from "@heroicons/react/20/solid";
import { Dashboard } from "./pages/dashboard";

function App() {
    return (
        <BrowserRouter>
            
            <RefineKbarProvider>
                <Refine
                    dataProvider={dataProvider(
                        "https://api.finefoods.refine.dev",
                    )}
                    routerProvider={routerBindings}
                    resources={[
                        
                    ]}
                    
                >
                    <Routes>
                        <Route
                            element={
                                <Layout>
                                    <Outlet />
                                </Layout>
                            }
                        >
                            <Route
                                index
                                element={<Navigate to="/dashboard" />}
                            />
                            <Route path="/dashboard">
                                <Route index element={<Dashboard />} />
                            </Route>
                            
                            <Route path="*" element={<ErrorComponent />} />
                        </Route>
                    </Routes>
                    
                </Refine>
            </RefineKbarProvider>
        </BrowserRouter>
    );
}

export default App;
