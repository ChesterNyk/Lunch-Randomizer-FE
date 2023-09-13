import { Box, Container } from "@mui/material";
import TopNav from "./TopNav";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Box sx={{ display: "flex" }}>
      <TopNav />

      {/* Main Container */}
      <Box component="main" sx={{flexGrow:1, overflow: 'auto'}}>
        <Container maxWidth= "sm">{children}</Container>
      </Box>
    </Box>
  );
};

export default Layout;
