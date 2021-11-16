import { Box, Typography, makeStyles } from '@mui/material'

const useStyles = makeStyles({
  root: {
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.textColor,
  },
});

export default function TextBubble (props) {
    const classes = useStyles(props);

    return (
        <Box className={classes.bubble}>
            <Typography>{props.text}</Typography>
        </Box>
    )
}
