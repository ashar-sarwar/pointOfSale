import React from 'react';
const Tabs = () => {
    return (
        <React.Fragment>
            <CalBody id="cash-tab" />
            <CalBody id="card-tab" />
            <CalBody id="discount-tab" />
        </React.Fragment>
    );
}

export default Tabs;