import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";

function createData(name, correct, skipped, wrong, points) {
  return { name, correct, skipped, wrong, points };
}

// const calcPoints = (result) => result.correct * 3 - result.wrong;

export default function ResultTable({ results }) {
  const theme = useTheme();

  const style = {
    backgroundColor: theme.palette.primary.bgBlue,
    // backgroundColor: "rgba(0,0,0,0)",
    width: "80%",
    borderRadius: "15px",
    boxShadow: "rgba(0, 0, 0, 0.45) 0px 45px 30px -20px",
    mb: "40px",

    "& th, td": {
      color: "primary.text",
      font: "500 15px Poppins",
      padding: "20px 24px",
    },

    "& .bold": {
      fontWeight: "700",
    },
  };

  const total = { correct: 0, skip: 0, wrong: 0, points: 0 };

  const rows = [
    ...results.map((result) => {
      total.correct += result.correct;
      total.skip += result.skip;
      total.wrong += result.wrong;
      total.points += result.points;
      return createData(
        result.name,
        result.correct,
        result.skip,
        result.wrong,
        result.points
      );
    }),
    // createData("Advance Maths", 3, 0, 2, 7),
    // createData("English", 2, 2, 1, 5),
    // createData("Advance Maths", 3, 0, 2, 7),
    // createData("English", 2, 2, 1, 5),

    createData("Total", total.correct, total.skip, total.wrong, total.points),
  ];

  const headings = ["Correct", "Skip", "Wrong", "Points"];

  const toStr = (number) => (number < 10 ? "0" + number : number.toString());

  return (
    <TableContainer component={Paper} sx={style}>
      <Table sx={{ minWidth: 650 }}>
        <TableHead>
          <TableRow>
            <TableCell className="bold">Subjects</TableCell>
            {headings.map((heading) => (
              <TableCell align="right" className="bold">
                {heading}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, idx) => (
            <TableRow
              key={row.name}
              sx={{
                "&:last-child td, &:last-child th": { border: 0 },
                // backgroundColor: idx === rows.length - 1 ? highlightRow : null,
                // fontSize: idx === rows.length - 1 ? highlightRow : null,
              }}
            >
              <TableCell
                component="th"
                scope="row"
                className={idx === rows.length - 1 ? "bold" : null}
              >
                {row.name}
              </TableCell>
              <TableCell
                align="right"
                className={idx === rows.length - 1 ? "bold" : null}
              >
                {toStr(row.correct)}
              </TableCell>
              <TableCell
                align="right"
                className={idx === rows.length - 1 ? "bold" : null}
              >
                {toStr(row.skipped)}
              </TableCell>
              <TableCell
                align="right"
                className={idx === rows.length - 1 ? "bold" : null}
              >
                {toStr(row.wrong)}
              </TableCell>
              <TableCell
                align="right"
                className={idx === rows.length - 1 ? "bold" : null}
              >
                {toStr(row.points)}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
