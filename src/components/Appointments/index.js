import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import AppointmentsItem from '../AppointmentItem'
import './index.css'

class Appointments extends Component {
  state = {
    appointmentList: [],
    title: '',
    date: '',
    isStarClicked: false,
  }

  onChangeTitle = event => {
    this.setState({title: event.target.value})
  }

  onChangeDate = event => {
    this.setState({date: event.target.value})
  }

  onClickAdd = () => {
    const {title, date} = this.state
    console.log('add btn is clicked')

    const newAppointment = {
      id: uuidv4(),
      title,
      date,
      isStarClicked: false,
    }
    this.setState(prevState => ({
      appointmentList: [...prevState.appointmentList, newAppointment],
    }))
  }

  onClickStar = id => {
    console.log('star btn is clicked')
    this.setState(prevState => ({
      appointmentList: prevState.appointmentList.map(eachAppointment => {
        if (id === eachAppointment.id) {
          return {
            ...eachAppointment,
            isStarClicked: !eachAppointment.isStarClicked,
          }
        }
        return eachAppointment
      }),
    }))
  }

  render() {
    const {appointmentList} = this.state
    return (
      <div className="page_container">
        <div className="appointment_card">
          <div className="appointment_header_container">
            <div className="UserTextCard">
              <h1 className="UserTextCard_heading">Add Appointment</h1>
              <label htmlFor="tittle_text" className="UserTextCard_Label_text">
                TITLE
              </label>
              <br />
              <input
                type="text"
                id="tittle_text"
                className="UserTextCard_tittle_input"
                placeholder="Title"
                onChange={this.onChangeTitle}
              />
              <br />
              <label htmlFor="tittle_text" className="UserTextCard_Label_text">
                DATE
              </label>
              <br />
              <input
                type="date"
                id="tittle_text"
                className="UserTextCard_tittle_input"
                onChange={this.onChangeDate}
              />
              <br />
              <button
                type="button"
                className="Add_btn"
                onClick={this.onClickAdd}
              >
                Add
              </button>
            </div>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                className="appointment_header_img"
                alt="appointments"
              />
            </div>
          </div>
          <hr className="hr_line" />
          <div className="startCard">
            <h1 className="startCard_heading">Appointments</h1>
            <button type="button" className="start_btn">
              Started
            </button>
          </div>
          <ul className="NewAppointments_bundle">
            {appointmentList.map(eachAppointment => (
              <AppointmentsItem
                key={eachAppointment.id}
                eachAppointmentDetails={eachAppointment}
                onClickStar={this.onClickStar}
                isStarClicked={eachAppointment.isStarClicked}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Appointments
