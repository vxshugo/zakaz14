import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
import Footer from "../../components/Footer/Footer"


const SRS = () => {

    const docs = [
        {
            uri: require("./срс.pdf"),
            fileName: " "
        }, // Local File
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (
        <div className='lesson'>
            <Navbar/>
            <div className="head">
                <h4>СӨЖ</h4>
                <iframe src="https://www.youtube.com/embed/DBBOk34kj_0" title="YouTube video player" frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen></iframe>
            </div>
            <div className="docView">
                <div className="wrapper">
                    <DocViewer className='my-doc-viewer-style' documents={docs} activeDocument={activeDocument}
                               pluginRenderers={DocViewerRenderers} onDocumentChange={handleDocumentChange}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default SRS