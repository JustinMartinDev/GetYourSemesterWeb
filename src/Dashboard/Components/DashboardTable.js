import React, {Component} from "react";
import DashboardItem from "./DashboardItem";
class DashboardTable extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <DashboardItem
                    nomCours="zer"
                    percent="25"
                    online="false"
                />
                <DashboardItem
                    nomCours="myCours"
                    percent="83"
                    online="true"
                />
                <DashboardItem
                    nomCours="mySeconde cours"
                    percent="54"
                    online="true"
                />
            </React.Fragment>
        )
    }
}

export default  DashboardTable;