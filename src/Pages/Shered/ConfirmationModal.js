import React from 'react';

const ConfirmationModal = ({title, discription, closeModal , modalData,successAction,successButtonName}) => {
    return (
        <div>
            <input type="checkbox" id="confirmation-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">{title}</h3>
                    <p className="py-4">{discription}</p>
                    <div className="modal-action">
                        <label onClick={()=>successAction(modalData)} htmlFor="confirmation-modal" className="btn">{successButtonName}</label>
                        <label onClick={closeModal} htmlFor="confirmation-modal" className="btn">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConfirmationModal;