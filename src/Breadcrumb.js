import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";

export default function Breadcrumb(menuGroup, pageName, pageHref) {
    return (

        <Breadcrumbs aria-label="breadcrumb">
            <Link underline="hover" color="inherit" href="/">
                {menuGroup}
            </Link>
            <Typography color="text.primary">{pageName}</Typography>
        </Breadcrumbs>
    );
}
