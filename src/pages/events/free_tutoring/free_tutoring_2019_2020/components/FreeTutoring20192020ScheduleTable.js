import React, { PureComponent } from 'react';
import Table from "components/Table/Table.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";

import Week from '../../../../../../src/static/events/free_tutoring/2019-2020/pdf/Week.pdf';
import WeekSpanish from '../../../../../../src/static/events/free_tutoring/2019-2020/pdf/Week-Spanish.pdf';


class FreeTutoring20192020ScheduleTable extends PureComponent {
    render() {
        const { classes } = this.props;

        return (
            <Table
              tableHead={[<b>Year</b>,<b>Link(English)</b>, <b>Link(Spanish)</b>]}
              tableData={[
                ["2019-2020", 
                  <a className="link" href={Week} target="_blank" rel="noopener noreferrer">PDF</a>, 
                  <a className="link" href={WeekSpanish} target="_blank" rel="noopener noreferrer">PDF</a>],
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

// export default withStyles(null)(FreeTutoring20192020ScheduleTable)

export default withStyles(featuresStyle)(FreeTutoring20192020ScheduleTable);
