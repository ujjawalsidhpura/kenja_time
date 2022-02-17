import { OBJModel } from 'react-3d-viewer';

export default function EachModel(props) {

    return (

        <OBJModel
            width="600" height="600"
            position={{ x: 0, y: 0, z: 0 }}
            src={props.model}
            onLoad={() => {
                //...
            }}
            onProgress={xhr => {
                //...
            }}
        />
    )
}