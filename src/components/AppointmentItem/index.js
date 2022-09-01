import './index.css'

const AppointmentsItem = props => {
  const {eachAppointmentDetails, onClickStar} = props
  const {id, title, date, isStarClicked} = eachAppointmentDetails

  const starUrl = isStarClicked
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStarBtn = () => {
    onClickStar(id)
  }

  return (
    <li className="List_item">
      <div className="appointment_item_card">
        <div className="star_card">
          <h1 className="appointment_type_name">{title}</h1>
          <button type="button" className="star_btn" onClick={onClickStarBtn}>
            <img src={starUrl} alt="Star" className="star_icon" />
          </button>
        </div>
        <p className="appoint_date">{`Date:${date}`}</p>
      </div>
    </li>
  )
}
export default AppointmentsItem
