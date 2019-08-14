import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

class DonateButton extends PureComponent {
    // const { classes } = props; // == const content = props.classes ;
    render() {
        const {currentDonationAmount} = this.props;

        return(
            <form
                method="post"
                action="https://www.paypal.com/cgi-bin/webscr"
                target="_blank"
              >
                <input type="hidden" name="cmd" value="_donations" />
                <input type="hidden" name="amount" value={currentDonationAmount} />
                <input type="hidden" name="business" value="sanantoniomathinclude@gmail.com" />
                <input type="hidden" name="item_name" value="Donate SaMi" />
                <input type="hidden" name="currency_code" value="USD" />
                <input type="hidden" name="tax" value="0" />
                <input
                  type="image"
                  src="https://i.postimg.cc/yWqHkQHQ/sami-donate-long-trim.png"
                  border="0"
                  name="submit"
                  title="Click this button to securely donate SaMi through PayPal!"
                  alt="Donate with PayPal button"
                  style={{width:550}}
                />
                <img
                  alt=""
                  border="0"
                  src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                  width="1"
                  height="1"
                />
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return { 
        currentDonationAmount: state.getIn(['donate', 'currentDonationAmount']),
    }
};

export default connect(mapStateToProps, null)(DonateButton);
