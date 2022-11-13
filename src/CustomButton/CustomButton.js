import React from 'react';

const CustomButton = ({children}) => {
    return (
        <div>
            <button className="btn bg-gradient-to-r from-[#0FCFEC] to-[#19D3AE] border-0">{children}</button>
        </div>
    );
};

export default CustomButton;