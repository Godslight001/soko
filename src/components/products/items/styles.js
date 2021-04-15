import {makeStyles} from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root:{
        flexGrow: 1,
    },
    image: {
        width: 100,
        height: 115,
        borderRadius: 10,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },

    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },

    cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
    },

    cartActions: {
        justifyContent: 'space-between',
    },

    buttons: {
        display: 'flex',
        alignItems: 'center',
    },

}));