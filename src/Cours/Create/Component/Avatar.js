/*import React, { Component } from 'react';
import FabricCanvas from './Avatar/FabricCanvas';
import TemplateList from './Avatar/TemplateList'
import {bglist, facelist, eyeslist, faciallist, hairlist} from '../../images/templates/templatelist';
import {fabric} from 'fabric';

class Avatar extends Component {

    constructor(props){
        super(props);

        this.state = {
            activeProperty : null
        };
    }

    addToCanvas = (imgElement, property_type, z_Index) => {

        var imgInstance = new fabric.Image(imgElement, {
            width: 400,
            height: 400,
            the_type: property_type,
            zIndex : z_Index
        });

        this.setState({activeProperty: imgInstance });

    }

    render() {
        return (
            <React.Fragment>
                <div className="row">
                    <ul className="tabs">
                        <li className="tab col s2"><a className="active" href="#test1">Test 1</a></li>
                        <li className="tab col s2"><a href="#test2">Test 2</a></li>
                        <li className="tab col s2"><a href="#test3">Test 3</a></li>
                        <li className="tab col s2"><a href="#test4">Test 4</a></li>
                        <li className="tab col s2"><a href="#test5">Test 5</a></li>
                    </ul>
                    <div id="test1">
                        <TemplateList
                            data = {bglist}
                            property_type = "bg"
                            zIndex = {-999}
                            addtocanvas ={this.addToCanvas}
                        />
                    </div>
                    <div id="test2">
                        <TemplateList
                            data = {facelist}
                            property_type = "face"
                            zIndex = {0}
                            addtocanvas ={this.addToCanvas}
                        />
                    </div>
                    <div id="test3">
                        <TemplateList
                            data = {eyeslist}
                            property_type = "eyes"
                            zIndex = {2}
                            addtocanvas ={this.addToCanvas}
                        />
                    </div>
                    <div id="test4">
                        <TemplateList
                            data = {faciallist}
                            property_type = "beard"
                            zIndex = {2}
                            addtocanvas ={this.addToCanvas}
                        />
                    </div>
                    <div id="test4">
                        <TemplateList
                            data = {hairlist}
                            property_type = "hair"
                            zIndex = {2}
                            addtocanvas ={this.addToCanvas}
                        />
                    </div>
                </div>
            </React.Fragment>
            /*    <Col md={6}>
                    <Tabs defaultActiveKey={1} justified id="main_tabs">
                        <Tab eventKey={1} title="Faces">

                            <TemplateList
                                data = {facelist}
                                property_type = "face"
                                zIndex = {0}
                                addtocanvas ={this.addToCanvas}
                            />

                        </Tab>
                        <Tab eventKey={2} title="Eyes">

                            <TemplateList
                                data = {eyeslist}
                                property_type= "eyes"
                                zIndex = {2}
                                addtocanvas ={this.addToCanvas}
                            />

                        </Tab>
                        <Tab eventKey={3} title="Beard">

                            <TemplateList
                                data = {faciallist}
                                property_type= "beard"
                                zIndex = {2}
                                addtocanvas ={this.addToCanvas}
                            />

                        </Tab>
                        <Tab eventKey={4} title="Hair">

                            <TemplateList
                                data = {hairlist}
                                property_type= "hair"
                                zIndex = {2}
                                addtocanvas ={this.addToCanvas}
                            />

                        </Tab>
                        <Tab eventKey={5} title="Background">

                            <TemplateList
                                data = {bglist}
                                property_type= "bg"
                                zIndex = {-9999}
                                addtocanvas ={this.addToCanvas}
                            />

                        </Tab>
                    </Tabs>
                </Col>

                <Col md={6}>

                    <FabricCanvas
                        activeProperty = {this.state.activeProperty}
                    />

                </Col>

            </div>
        );
    }
}

export default Avatar;*/