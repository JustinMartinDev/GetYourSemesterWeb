import React, {Component} from "react";
import CoursDashboardItem from "./CoursDashboardItem";
class CoursDashboardTable extends Component {
    constructor(props) {
        super(props);
    }

    render(){
        return(
            <React.Fragment>
                <CoursDashboardItem
                    nomCours="zer"
                    percent="25"
                    online="false"
                />
                <CoursDashboardItem
                    nomCours="myCours"
                    percent="83"
                    online="true"
                />
                <CoursDashboardItem
                    nomCours="mySeconde cours"
                    percent="54"
                    online="true"
                />
            </React.Fragment>
        )
    }
}

export default  CoursDashboardTable;