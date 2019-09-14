import React, { PureComponent } from 'react';
import PropTypes from "prop-types";
import classNames from "classnames";
import compose from 'recompose/compose'
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import { Link } from "react-router-dom";
import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.jsx";
import Table from "components/Table/Table.jsx";
// import sectionPillsStyle from "assets/jss/material-kit-pro-react/views/blogPostsSections/sectionPillsStyle.jsx";
import Week1 from '../../../../../../../../src/static/events/free_tutoring/2019-2020/pdf/Week1.pdf';
import Week1Spanish from '../../../../../../../../src/static/events/free_tutoring/2019-2020/pdf/Week1-Spanish.pdf';


const style = {
    paddingCustom: {
        padding: "30px 0"
    },
    eventFont: {
        fontSize: "18px",
        textAlign: "left"
    },
    cardTitle: {
      fontWeight: "700"
    },
    leftText: {
      textAlign: "left"
    },
    marginBottomSmShrink: {
       marginBottom: "-20px"
    },
    marginBottomLgExpand: {
       marginBottom: "50px"
    }
}

class FreeTutoring20192020Section extends PureComponent {

    render() {
        const {
            classes,
        }  = this.props;

        return (
            <div className={classes.contactContent, classes.paddingCustom}>
              <div className={classes.container}>
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={8}
                    md={8}
                    className={
                      classNames(classes.mlAuto, classes.mrAuto, classes.textCenter, classes.marginBottomLgExpand)
                    }
                  > 
                    <h2 className={classes.title}>Weekly Schedule</h2>
                    <Table
                      tableHead={[<b>Week</b>, <b>Date</b>,<b>Schedule</b>]}
                      tableData={[
                        ["Week 1", 
                          "9/23-9/29", 
                          <a className="link" href={Week1} target="_blank" rel="noopener noreferrer">PDF (English)</a>, 
                          <a className="link" href={Week1Spanish} target="_blank" rel="noopener noreferrer">PDF (Spanish)</a>],
                        ["Week 2", 
                          "9/30-10/06", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 3", 
                          "10/07-10/13", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 4", 
                          "10/21-10/27", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 5", 
                          "10/28-11/03", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 6", 
                          "11/04-11/10", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 7", 
                          "11/11-11/15", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 8", 
                          "01/13-01/19", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 9", 
                          "01/20-01/26", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 10", 
                          "01/27-02/02", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 11", 
                          "02/03-02/09", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 12", 
                          "02/10-02/16", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 13", 
                          "02/17-02/23", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 14", 
                          "02/24-03/01", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 15", 
                          "03/02-03/08", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
                        ["Week 16", 
                          "03/14", 
                          <a className="link" href="https://drive.google.com/open?id=1ffDOvmQW4THObe91sbx7dNjmXruK-LfQ" target="_blank" rel="noopener noreferrer"></a>, 
                          <a className="link" href="https://drive.google.com/open?id=1kM73ftyr85m-0IDkqGjd21TqC5FVj5yf" target="_blank" rel="noopener noreferrer"></a>],
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
                  </GridItem>
                </GridContainer>
              </div>
            </div>
        );
    }
}


export default compose(
    withStyles(style),
    withStyles(featuresStyle),
)(FreeTutoring20192020Section);