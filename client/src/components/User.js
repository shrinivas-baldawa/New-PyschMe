import './styles/user.css'

export default function User(props){
    return(
        <div>
            
            <button type="button" class="btn1 btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                <img src="https://icons-for-free.com/iconfiles/png/512/avatar+person+profile+user+icon-1320086059654790795.png" />
            </button>
            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">User Details</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            Name: {props.name}
                            <br/>
                            <br/>
                            Phone: {props.phone}
                            <br/>
                            <br/>
                            Email: {props.email}
                            <br/>
                            <br/>
                            Date Of Birth: {props.dob}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}