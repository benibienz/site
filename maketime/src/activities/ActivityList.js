import {
  IconButton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import { Container, DividerTableRow, NumberCell } from "../components";
import Activity from "./Activity";

const hoursInWeek = 168;

const Headers = () => (
  <>
    <TableHead>
      <DividerTableRow>
        <TableCell align="center">
          <Typography>
            <b>Activity</b>
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>
            <b>Target</b>
          </Typography>
        </TableCell>
        <TableCell align="center">
          <Typography>
            <b>Scheduled</b>
          </Typography>
        </TableCell>
      </DividerTableRow>
    </TableHead>
  </>
);

const AddNewRow = () => (
  // TODO: use Floating Action Button with tooltip instead of Icon
  <>
    <DividerTableRow>
      <TableCell align="center">
        <IconButton aria-label="add new activity" color="primary">
          <AddCircleIcon />
        </IconButton>
      </TableCell>
      <TableCell></TableCell>
      <TableCell></TableCell>
    </DividerTableRow>
  </>
);

const HourTotals = ({ targetTotal, calendarTotal }) => (
  <>
    <TableRow>
      <TableCell align="center">
        <Typography>
          <b>Total</b>
        </Typography>
      </TableCell>
      <NumberCell align="center">{targetTotal}</NumberCell>
      <NumberCell align="center">{calendarTotal}</NumberCell>
    </TableRow>
    <TableRow>
      <TableCell align="center">
        <Typography>
          <b>Remaining</b>
        </Typography>
      </TableCell>
      <NumberCell align="center">{hoursInWeek - targetTotal}</NumberCell>
      <NumberCell align="center">{hoursInWeek - calendarTotal}</NumberCell>
    </TableRow>
  </>
);

const ActivityList = () => {
  return (
    <Container title="Weekly Hours">
      <TableContainer>
        <Table>
          <Headers />
          <TableBody>
            <Activity name="Sleep" handleDelete={() => null} />
            <AddNewRow />
            <HourTotals targetTotal={56} calendarTotal={56} />
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default ActivityList;
