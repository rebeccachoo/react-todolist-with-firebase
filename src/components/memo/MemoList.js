import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
	root: {
		minWidth: 275,
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
});
const MemoList = (props) => {
	const classes = useStyles();

	return (
		<div className="MemoList">
			{props.memos.map((memo, index) => {
				return (
					<Card
						key={index}
						className={classes.root}
						style={{
							marginTop: "10px",
							backgroundColor: memo.done ? "#F3D34A" : "#F0E7D8",
							cursor: "pointer",
						}}
						onClick={(id) => props.cardClicked(memo.id)}
					>
						<div style={{ padding: "20px", paddingBottom: "0" }}>
							<Typography className={classes.title} color="textSecondary">
								{memo.date}
							</Typography>
							<Typography style={{ fontWeight: "bold" }}>
								{memo.memo}
							</Typography>
						</div>
						<CardActions>
							<Button size="small" onClick={(id) => props.delete(memo.id)}>
								Remove
							</Button>
							<Button size="small" onClick={(id) => props.update(memo.id)}>
								Update
							</Button>
						</CardActions>
					</Card>
				);
			})}
		</div>
	);
};
export default MemoList;
