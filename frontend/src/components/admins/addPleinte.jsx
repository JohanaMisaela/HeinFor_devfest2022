import React from 'react';

const FormPleinte = ()=> {
    return (
    <div>
        <div className="row">
            <div className="col-md-6">
                <h3>Pleinte</h3>
                <form>
                    <div className="form-group">
                        <label htmlFor="plainte">Pleinte</label>
                        <input type="text" />
                        <label htmlFor="descriptions">Déscriptions</label>
                        <input type="text" />
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Submit Plainte</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
)}

export default FormPleinte;