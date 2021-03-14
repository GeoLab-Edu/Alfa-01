import { Spinner } from "react-bootstrap";
import "./style.css"

export default function Loading() {
    return (
        <div className="justify-content-center d-flex align-items-center ft-8 height">
            <Spinner animation="grow" variant="danger" />
        </div>
    )
}