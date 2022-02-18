import { Routes, Route } from 'react-router-dom';
import ProjectsList from "./ProjectsList";
import ModelsList from "./ModelsList";

export default function Content() {

    return (
        <div className="flex-col bg-stone-50 justify-center">
            <Routes>
                <Route path="/projects" element={<ProjectsList />} />
                <Route path="/models" element={<ModelsList />} />
            </Routes>
        </div>
    )
}


