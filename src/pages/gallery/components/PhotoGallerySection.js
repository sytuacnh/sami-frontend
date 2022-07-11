import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose'
import classNames from "classnames";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import withStyles from "@material-ui/core/styles/withStyles";
import sectionsStyle from "assets/jss/material-kit-pro-react/views/presentationSections/sectionsStyle.jsx";
import imgs from "../imgs.js";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import Button from "components/CustomButtons/Button.jsx";
import Close from "@material-ui/icons/Close";
import javascriptStyles from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.jsx";
import { actionCreators } from '../store';

// import testImg from "../../../static/gallery/summer_camp_img_15.jpg";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const style = {
     paddingBottom: {
         paddingBottom: "130px"
     }
}
class PhotoGallerySection extends PureComponent {

    renderContainerFluid(cssClass, imgClickHanlder) {
      return imgs.map(row => {
        return (
          <GridContainer key={row[0]}>
            {row.map((el, index) => {
              return (
                <GridItem
                  md={3}
                  sm={3}
                  xs={12}
                  key={el + "_" + index}
                  className={cssClass}
                >
                  <img
                    src={require(`../../../static/gallery/${el}.jpg`)}
                    alt={el}
                    id={index}
                    key={el[index]}
                    onClick={() => {imgClickHanlder(el)}}
                  />
                </GridItem>
              );
            })}
          </GridContainer>
        );
      });
    }

    render() {
        const {
            classes,
            showDialog,
            clickedImgName,
            handleImgClicked,
            handleDialogClose
        }  = this.props;

        return (
            <div className={classNames(classes.container, classes.paddingBottom)}>
              <GridContainer justify="center">
                <GridItem
                  md={10}
                  className={classNames(classes.section, classes.textCenter, classes.mrAuto, classes.mlAuto)}
                >
                  <div className={classes.sectionSections}>
                    <div className={classes.containerFluid}>
                      {this.renderContainerFluid(classes.photoGallery, handleImgClicked)}
                    </div>
                    <Dialog
                      classes={{
                        root: classes.modalRoot,
                        paper: classes.modal + " " + classes.modalSignup
                      }}
                      open={showDialog}
                      TransitionComponent={Transition}
                      keepMounted
                      aria-labelledby="signup-modal-slide-title"
                      aria-describedby="signup-modal-slide-description"
                    >
                        <DialogTitle
                          id="signup-modal-slide-title"
                          disableTypography
                          className={classes.modalHeader}
                        >
                          <Button
                            simple
                            className={classes.modalCloseButton}
                            key="close"
                            aria-label="Close"
                            onClick={handleDialogClose}
                          >
                            
                            <Close className={classes.modalClose} />
                          </Button>
                        </DialogTitle>
                           
                        <DialogContent
                          id="signup-modal-slide-description"
                          className={classes.modalBody}
                        >
                          <img
                            src={require(`../../../static/gallery/${clickedImgName}.jpg`)}
                            alt="Sami"
                            key="Sami Photo"
                            style={{width: 750}}
                          />
                        </DialogContent>
                    </Dialog>
                  </div>
                </GridItem>
              </GridContainer>
            </div> 
        );
    }
}

const mapStateToProps = (state) => {
    return {
        showDialog: state.getIn(['gallery', 'showDialog']),
        clickedImgName: state.getIn(['gallery', 'clickedImgName']),
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleImgClicked(imgName) {
          const action = actionCreators.imgClicked(imgName);
          dispatch(action);
        },
        handleDialogClose() {
            const action = actionCreators.closeDialog();
            dispatch(action);
        }
    }
}

export default compose(
    withStyles(style),
    withStyles(sectionsStyle),
    withStyles(javascriptStyles),
    connect(mapStateToProps, mapDispatchToProps)
)(PhotoGallerySection)