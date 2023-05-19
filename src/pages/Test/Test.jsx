import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Footer from "../../components/Footer/Footer"
import OnlineTest2 from "../../components/OnlineTest2/OnlineTest";


const Test = () => {

    const docs = [
        { uri: require("./3к-тест-Дизайн теориясы мен тарихы-50 (1).pdf"),
        fileName: " " }, // Local File
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (
        <div className='lesson'>
            <div className="head">
                <h4>Емтихан сұрақтары</h4>
                <iframe src="https://www.youtube.com/embed/KmbvuKpWoXY" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            <div className="docView">
                <div className="wrapper">
                    <OnlineTest2/>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Test