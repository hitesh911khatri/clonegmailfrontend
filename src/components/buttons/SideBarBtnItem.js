import InboxIcon from '@mui/icons-material/Inbox';
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import WatchLaterOutlinedIcon from '@mui/icons-material/WatchLaterOutlined';
import LabelImportantIcon from '@mui/icons-material/LabelImportant';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';
import InsertDriveFileOutlinedIcon from '@mui/icons-material/InsertDriveFileOutlined';
import LabelOutlinedIcon from '@mui/icons-material/LabelOutlined';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export const sideBarBtnItems = [
    {
        icon: <InboxIcon />,
        text: "Inbox"
    }, {
        icon: <StarOutlineIcon />,
        text: "Starred"
    }, {
        icon: <WatchLaterOutlinedIcon />,
        text: "Snoozed"
    }, {
        icon: <LabelImportantIcon />,
        text: "Important"
    }, {
        icon: <SendOutlinedIcon />,
        text: "Sent"
    }, {
        icon: <InsertDriveFileOutlinedIcon />,
        text: "Drafts"
    }, {
        icon: <LabelOutlinedIcon />,
        text: "Categories"
    }, {
        icon: <ExpandMoreIcon />,
        text: "More"
    }
]