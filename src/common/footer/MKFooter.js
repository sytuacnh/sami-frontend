import React, { PureComponent, Fragment } from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import landingPageStyle from "assets/jss/material-kit-pro-react/views/landingPageStyle.jsx";
import Footer from "components/Footer/Footer.jsx";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Favorite from "@material-ui/icons/Favorite";

class MKFooter extends PureComponent {

    render() {
        const { classes } = this.props;
        // console.log(classes)
        return (
            <Footer
              content={
                <div>
                  <div className={classes.left}>
                    <List className={classes.list}>
                      <ListItem className={classes.inlineBlock}>
                        <a
                          href="https://www.creative-tim.com/?ref=mkpr-landing"
                          target="_blank"
                          className={classes.block}
                        >
                          Creative Tim
                        </a>
                      </ListItem>
                      <ListItem className={classes.inlineBlock}>
                        <a
                          href="https://www.creative-tim.com/presentation?ref=mkpr-landing"
                          target="_blank"
                          className={classes.block}
                        >
                          About us
                        </a>
                      </ListItem>
                      <ListItem className={classes.inlineBlock}>
                        <a
                          href="//blog.creative-tim.com/"
                          className={classes.block}
                        >
                          Blog
                        </a>
                      </ListItem>
                      <ListItem className={classes.inlineBlock}>
                        <a
                          href="https://www.creative-tim.com/license?ref=mkpr-landing"
                          target="_blank"
                          className={classes.block}
                        >
                          Licenses
                        </a>
                      </ListItem>
                    </List>
                  </div>
                  <div className={classes.right}>
                    &copy; {1900 + new Date().getYear()} , made with{" "}
                    <Favorite className={classes.icon} /> by{" "}
                    <a
                      href="https://www.creative-tim.com/?ref=mkpr-landing"
                      target="_blank"
                    >
                      Creative Tim
                    </a>{" "}
                    for a better web.
                  </div>
                </div>
              }
            />
        );
    }
}

export default withStyles(landingPageStyle)(MKFooter)