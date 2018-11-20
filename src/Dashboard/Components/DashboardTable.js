import React, {Component} from "react";
import DashboardItem from "./DashboardItem";
class DashboardTable extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <DashboardItem
                nomCours="zer"
                percent="25"
                online="false"
            />
        )
    }
}

export default  DashboardTable;