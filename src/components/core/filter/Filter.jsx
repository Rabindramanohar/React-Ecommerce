import React from 'react'
import './Filter.css'
function Filter(props) {
    const handleChange = (event) => {
        // console.log(event.target.value);
        return props.handleSort(event.target.value);
    }

    const handleTagChange = (event) => {
        // console.log(event.target.value);
        return props.handleTag(event.target.value);
    }
    let tagNames = ["T-shirt", "shirt", "Denim", "jacket"];
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 col-md-9">
                    <p className = " mr-2">Filters:<span className="mr-4"></span>
                        {tagNames.map((item, idx) => (
                            <span key = {idx} >
                                <button 
                                    type="button" 
                                    class="btn btn-outline-secondary mr-2 custom-filter"
                                    value= {item}
                                    onClick = {handleTagChange}
                                >{item}</button>
                            </span>
                        ))}
                    </p>
                    </div>
                <div className="col-12 col-md-3">
                <select className="form-control" value = {props.sort} onChange = {handleChange}>
                    {/* {console.log("CHECKING: "+props.sort)} */}
                    <option value="">Sort by</option>
                    <option value="lowest">lowest to highest</option>
                    <option value="highest">highest to lowest</option>
                </select>
                </div>
            </div>
        </div>



    )
}

export default Filter
