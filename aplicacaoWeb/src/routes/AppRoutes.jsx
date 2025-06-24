import { Routes, Route } from "react-router-dom";
import ListaAlunos from "../pages/ListaAlunos";
import FormAlunoPage from "../pages/FormAlunoPage";

export default function AppRoutes() {
  return (
    <Routes>
      {/* Alunos */}
      <Route path="/" element={<ListaAlunos />} />
      <Route path="/alunos" element={<ListaAlunos />} />
      <Route path="/alunos/novo" element={<FormAlunoPage />} />
      <Route path="/alunos/editar/:id" element={<FormAlunoPage />} />
    </Routes>
  );
}
