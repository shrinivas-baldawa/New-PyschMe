import react from "react";
import "./styles/list.css"

export default function List(){
    return(
        <div class="list-group">
            <table>
                <tr class="header">
                    <th>Counsellor Name</th>
                    <th>Fees (in INR)</th>
                    <th>Experience</th>
                </tr>
                <tr>
                    <th><button type="button" class="list-group-item list-group-item-action">Dr. Abhishek Singh</button></th>
                    <th>5000</th>
                    <th>5 years</th>
                </tr>
                <tr>
                    <th><button type="button" class="list-group-item list-group-item-action">Dr. Shobhana Iyer</button></th>
                    <th>3000</th>
                    <th>2 years</th>
                </tr>
                <tr>
                    <th><button type="button" class="list-group-item list-group-item-action">Dr. Geetika Babu</button></th>
                    <th>6000</th>
                    <th>7 years</th>
                </tr>
            </table>

        </div>
    )
}