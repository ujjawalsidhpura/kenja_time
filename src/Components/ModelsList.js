import EachModel from './EachModel';
import ModelsData from '../Data/Models3D/ModelsData';

export default function ModelsList() {

    const allModels = ModelsData();

    const parsedModels = allModels.map(model =>
        <EachModel model={model} />
    )

    return (

        <ul>
            {parsedModels}
        </ul>

    )
}