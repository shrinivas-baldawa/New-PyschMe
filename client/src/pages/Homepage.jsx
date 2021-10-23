import React, { useState } from "react";
import { data, statuses } from "../data";

const Homepage = () => {
    const [items, setItems] = useState(data);

    const [checked, setChecked] = React.useState(false);
       
    const handleChange = () => {
        setChecked(!checked);
    };

    // const onDrop = (item, monitor, status) => {
    //     const mapping = statuses.find(si => si.status === status);

    //     setItems(prevState => {
    //         const newItems = prevState
    //             .filter(i => i.id !== item.id)
    //             .concat({ ...item, status, icon: mapping.icon });
    //         return [ ...newItems ];
    //     });
    // };

    const moveItem = (dragIndex, hoverIndex) => {
        const item = items[dragIndex];
        setItems(prevState => {
            const newItems = prevState.filter((i, idx) => idx !== dragIndex);
            newItems.splice(hoverIndex, 0, item);
            return  [ ...newItems ];
        });
    };

    const Checkbox = ({ label, value, onChange }) => {
        return (
          <label>
            <input type="checkbox" checked={value} onChange={onChange} />
            {label}
          </label>
        );
    };

    return (
        
        <div className={"row"}>
            {data.map((d,s) => {
                return (

                    <div key={s.status} className={"col-wrapper"}>
                        <h2 className={"col-header"}>{s.status}</h2>

                        <Checkbox
                        label={d.title}
                        value={checked}
                        onChange={handleChange}
                        />
                        <p>Is {d.title} checked? {checked.toString()}</p>

                        {/* <DropWrapper onDrop={onDrop} status={s.status}>
                            <Col>
                                {items
                                    .filter(i => i.status === s.status)
                                    .map((i, idx) => <Item key={i.id} item={i} index={idx} moveItem={moveItem} status={s} />)
                                }
                            </Col>
                        </DropWrapper> */}
                    </div>
                );
            })}
        </div>
        
    );

};

export default Homepage;