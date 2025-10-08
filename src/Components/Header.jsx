import { AppBar, Box, Toolbar, Typography } from "@mui/material";

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

        <Box>İkon Alanı</Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
