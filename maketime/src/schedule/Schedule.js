import purple from "@material-ui/core/colors/purple";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import { Container } from "../components";
import { generateSleepDefaults } from "./events";

// Set Monday as first day of week
moment.updateLocale("en", { week: { dow: 1 } });

// Set the calendar to start next Monday
// From https://stackoverflow.com/a/33078648 and https://stackoverflow.com/a/3894087
const startDate = new Date();
startDate.setDate(startDate.getDate() + ((7 - startDate.getDay()) % 7) + 1);
startDate.setHours(0, 0, 0, 0);

const Schedule = () => (
  <Container title="Schedule">
    <Calendar
      events={generateSleepDefaults(startDate)}
      views={["week"]}
      defaultView="week"
      step={60}
      showMultiDayTimes
      defaultDate={startDate}
      localizer={momentLocalizer(moment)}
      toolbar={false}
      eventPropGetter={(event, start, end, isSelected) => {
        return { style: { backgroundColor: purple[500] } };
      }}
    />
  </Container>
);

export default Schedule;
