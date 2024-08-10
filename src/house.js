import React from "react";
import NewRoomForm from "./new-room-form";

export default class House extends React.Component {
    render() {
        const rooms = this.props.data.rooms
            ? this.props.data.rooms.map((room, index) =>
            <li key={index}>
                {room.name} Area: {room.area}
                <button onClick={e => this.props.deleteRoom(e, this.props.data, room)}
                     className='button btn-primary'>
                    Delete</button>
            </li>)
        :null;
        return(
            <div className='card m-3 p-1'>
                <h1>{this.props.data.name}</h1>
                <ul>
                    {rooms}
                </ul>
                <NewRoomForm
                    addNewRoom={this.props.addNewRoom} data={this.props.data} />
            </div>
        )
    }
}