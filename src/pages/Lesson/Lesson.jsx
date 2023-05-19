import React, {useState} from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./lesson.css"
import DocViewer, {DocViewerRenderers} from "@cyntler/react-doc-viewer";
import Footer from "../../components/Footer/Footer"


const Lesson = () => {

    const docs = [
        {
            uri: require("./лекция диплом.pdf"), fileName: " ",
        }, {
            uri: require("./lesson2.pdf"), fileName: " "
        }, // Local File
        {
            uri: require("./3-Ежелгі Мысыр, Антикалық дәуір, Греция, Рим.pdf"), fileName: " "
        }, // Local File
        {
            uri: require("./8-АҚШ дизайнерлерінің өндірістік қалыптасуы.pdf"), fileName: " "
        }, // Local File
        {
            uri: require("./10-БАУХАУС және ВХУТЕМАС.pdf"), fileName: " "
        }, // Local File
        {
            uri: require("./2-Дизайнерлік қызметтің анықтамасы. Дизайнердің мәдениеттік сөздігі.pdf"), fileName: " "
        }, // Local File
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (<div className='lesson'>
        <Navbar/>
        <div className="head">
            <h4>Лекция</h4>
            <iframe src="https://www.youtube.com/embed/g39sNTBM9eM" title="YouTube video player" frameBorder="0"
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
    </div>)
}

export default Lesson