import { Routes, Route } from 'react-router-dom';
import ProjectsList from "./ProjectsList";
import ModelsList from "./ModelsList";
import Home from "./Home";

export default function Content() {

    return (
        <div className="flex-col bg-stone-50 justify-center">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/models" element={<ModelsList />} />
            </Routes>
        </div>
    )
}


