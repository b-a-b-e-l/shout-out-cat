import { Box, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'

const colorPink = '#F39CFC'

const useStyles = makeStyles({
  bubble: {
    '&:after': {
      content: '""',
      position: 'absolute',
      borderStyle: 'solid',
      borderWidth: '38px 16px 0',
      borderColor: `${colorPink} transparent`,
      display: 'block',
      width: '0',
      zIndex: '1',
      bottom: '-38px',
      left: '70%',
    }
  },
});

export default function TextBubble (props) {
    const { bubble } = useStyles(props);

    return (
        <Box
          className={bubble}
          width='420px'
          borderRadius='33px'
          padding='20px'
          bgcolor={props.backgroundColor}
          color={props.textColor}
          borderColor={colorPink}
          position='relative'
          border={`2px solid ${colorPink}`}
        >
          <Typography align='center'>
            {props.text}
          </Typography>
        </Box>
    )
}
