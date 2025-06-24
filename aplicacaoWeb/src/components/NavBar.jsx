import { AppBar, Toolbar, Button, Stack } from "@mui/material";
import { Link as RouterLink, useLocation } from "react-router-dom";
import ListAltIcon from "@mui/icons-material/ListAlt";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

export default function NavBar() {
  const location = useLocation();

  // Função para verificar se a rota atual começa com a rota passada (para destacar o botão)
  const isActive = (path) => location.pathname.startsWith(path);

  return (
    <AppBar position="static" sx={{ borderRadius: 0 }}>
      <Toolbar>
        <Stack direction="row" spacing={2}>
          <Button
            color={isActive("/alunos") ? "secondary" : "inherit"}
            variant={isActive("/alunos") ? "contained" : "text"}
            component={RouterLink}
            to="/alunos"
            startIcon={<ListAltIcon />}
            sx={{ fontWeight: isActive("/alunos") ? "bold" : "normal" }}
          >
            Alunos
          </Button>
          <Button
            color={isActive("/alunos/novo") ? "secondary" : "inherit"}
            variant={isActive("/alunos/novo") ? "contained" : "text"}
            component={RouterLink}
            to="/alunos/novo"
            startIcon={<AddCircleOutlineIcon />}
            sx={{ fontWeight: isActive("/alunos/novo") ? "bold" : "normal" }}
          >
            Novo Aluno
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
