import React, { PureComponent } from 'react';
import Table from "components/Table/Table.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import Syllabi from '../../../../../../src/static/events/free_tutoring/2022-2023/pdf/2022-2023SaMiSyllabi.pdf';
import Program from '../../../../../../src/static/events/free_tutoring/2022-2023/pdf/2022-2023SaMiProgram.pdf';


class FreeTutoring20222023ScheduleTable extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Table
              tableHead={[<b>Year</b>,<b>Program</b>, <b>Syllabi</b>]}
              tableData={[
                ["2022-2023", 
                  <a className="link" href={Program} target="_blank" rel="noopener noreferrer">PDF</a>, 
                  <a className="link" href={Syllabi} target="_blank" rel="noopener noreferrer">PDF</a>],
              ]}
              customCellClasses={[
                classes.cellText,
                classes.cellText,
                classes.cellText
              ]}
              customClassesForCells={[0, 1, 2]}
              customHeadCellClasses={[
                classes.textRight,
                classes.textRight,
                classes.textRight
              ]}
              customHeadClassesForCells={[0, 1, 2]}
            />
        );
    }
}

export default withStyles(featuresStyle)(FreeTutoring20222023ScheduleTable);
