import React, { useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import "./pract.css"
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import Footer from "../../components/Footer/Footer"


const Practice = () => {

    const docs = [
        {
            uri: require("./5-Батыс-Еуропаның-модерні-әмбебап-синтетикалық-стиль..pdf"),
            fileName: " "
        }, // Local File
        {
            uri: require("./8-АҚШ-соңғы-жылдардағы-дизайн.pdf"),
            fileName: " "
        }, // Local File
        { uri: require("./13-Италяндық-Автомобиль-дизайны.pdf") }, // Local File
        {
            uri: require("./Ақш-тағы-қазіргі-уақыттағы-атақты-үздік-дизайнерлер..pdf"),
            fileName: " "
        }, // Local File
        {
            uri: require("./Альберх-Дюрер-Апокалипсис.pdf"),
            fileName: " "
        }, // Local File
        {
            uri: require("./Голландтық-натюрморт-_1_.pdf"),
            fileName: " "
        }, // Local File
        {
            uri: require("./Ең танымал итальяндық дизайнерлер.pdf"),
            fileName: " "
        }, // Local File
    ];

    const [activeDocument, setActiveDocument] = useState(docs[0]);

    const handleDocumentChange = (document) => {
        setActiveDocument(document);
    };


    return (
        <div className='practice'>
            <Navbar />
            <div className="head">
                <h4>Презентациялар</h4>
            </div>
            <div className="docView">
                <div className="wrapper">
                    <DocViewer className='my-doc-viewer-style' documents={docs} activeDocument={activeDocument} pluginRenderers={DocViewerRenderers} onDocumentChange={handleDocumentChange} />
                </div>
            </div>
        </div>
    )
}

export default Practice