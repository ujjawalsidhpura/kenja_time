import React, { useState } from "react";
import Modal from "@material-tailwind/react/Modal";
import ModalHeader from "@material-tailwind/react/ModalHeader";
import ModalBody from "@material-tailwind/react/ModalBody";
import '../input.css';


export default function EachProject(props) {

    const [showModal, setShowModal] = useState(false);

    const { picture, title, tags, description } = props.project;

    return (
        <>
            <div className=" transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 w-2/3 h-auto m-auto py-8"
                onClick={(e) => setShowModal(true)}>
                <img src={picture} alt="logo" />
                <span className="float-left text-bold">{title}</span>
                <span className="float-right">{tags}</span>
            </div>


            <Modal

                active={showModal}
                toggler={() => setShowModal(false)}>

                <ModalHeader toggler={() => setShowModal(false)}>
                    {title}
                </ModalHeader>

                <ModalBody>
                    <img src={picture} alt="logo" />
                    <br />
                    <p className="text-base leading-relaxed text-gray-600 font-normal ">
                        {description}
                    </p>
                </ModalBody>
            </Modal>
        </>
    );
}

