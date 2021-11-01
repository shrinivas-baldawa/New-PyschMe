import react, {useState} from "react";
import "./styles/checkbox.css";

export default function Checkbox() {
    return (
        <div className="CheckApp" id="Checkbox">
            <h3 style={{"textAlign":"center","backgroundColor":"yellowgreen","color":"black","borderBottom":"1px solid black"}}>TO DO LIST</h3>
            <div classname="list">
                <div className="todo">
                    <input type="checkbox" id="yoga" name="yoga" value="yoga"  />
                    Yoga for half an hour
                </div>
                <div className="todo">
                    <input type="checkbox" id="meditation" name="med" value="meditation" />
                    Meditation for 15 minutes
                </div>
                <div className="todo">
                    <input type="checkbox" id="hoby" name="hobby" value="hoby"  />
                    Do one activity that comes under your hobby
                </div>
                <div className="todo">
                    <input type="checkbox" id="self" name="self" value="self"  />
                    Write about your self
                </div>
                <div className="todo">
                    <input type="checkbox" id="music" name="music" value="music"/>
                    Listen to peaceful music while going to sleep
                </div>
            </div>
        </div>
    );
}