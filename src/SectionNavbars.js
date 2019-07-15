import React from "react";
import SectionNavbarsUI from "./SectionNavbarsUI";
import store from "./store";
import { getInputChangeAction } from "./store/actionCreators";

class SectionNavbars extends React.Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        this.handleSearchInputChange = this.handleSearchInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    render() {
        return (
            <SectionNavbarsUI 
                inputValue={this.state.inputValue}
                handleSearchInputChange={this.handleSearchInputChange}
            />
        )
    }

    handleSearchInputChange(e) {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleStoreChange() {
        this.setState(store.getState());
    }
}

export default SectionNavbars;