import { useContext, useEffect } from "react";

import AppointmentItem from "../appointmentItem.tsx/AppointmentItem";
import { AppointmentContext } from "../../context/appointments/AppointmentsContext";

function AppointmentList() {
	const { activeAppointments, getActiveAppointments } = useContext(AppointmentContext);

	useEffect(() => {
		getActiveAppointments();
	// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			{activeAppointments.map((item) => {
				return <AppointmentItem {...item} key={item.id} />;
			})}
		</>
	);
}

export default AppointmentList;