import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import { IconButton, Tooltip } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import DescriptionIcon from "@mui/icons-material/Description";

const Header = () => {
  return (
    <AppBar sx={{ backgroundColor: "black" }}>
      <Toolbar
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "1.5rem",
            letterSpacing: 2,
            cursor: "pointer",
            ml: 3
          }}
        >
          &lt;BD /&gt;
        </Typography>

        <Box sx={{ display:'flex', gap:1, mr:3 }}>
          <Tooltip title= "Github">
            <IconButton
              color="inherit"
              component="a"
              href="https://github.com/Ozhanbirgul"
              target="_blank"
            >
              <GitHubIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Linkedin">
            <IconButton
              color="inherit"
              component="a"
              href="https://www.linkedin.com/in/birgul-demirden/"
              target="_blank"
            >
              <LinkedInIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Mail">
            <IconButton
              color="inherit"
              component="a"
              href="mailto:birgulozhan9@gmail.com"
            >
              <EmailIcon />
            </IconButton>
          </Tooltip>

          <Tooltip title="Cv">
            <IconButton
              color="inherit"
              component="a"
              href="/birguldemirden.pdf"
              target="_blank"
            >
              <DescriptionIcon />
            </IconButton>
          </Tooltip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
