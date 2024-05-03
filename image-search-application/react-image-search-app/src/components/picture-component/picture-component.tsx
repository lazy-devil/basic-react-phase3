import './picture-component.css'

export default function Picture(props: any) {

    return <>
        <img src={props.urls.small} alt={props.description} />
    </>
}