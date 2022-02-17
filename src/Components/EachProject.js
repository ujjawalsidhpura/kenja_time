
export default function EachProject(props) {

    const { picture, title, tags } = props.project;

    return (
        <div className="w-2/3 h-auto m-auto py-8">
            <img src={picture} alt="picture" />
            <span className="float-left text-bold">{title}</span>
            <span className="float-right">{tags}</span>
        </div>
    )
}