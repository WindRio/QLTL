import { BrowserRouter, Routes, Route } from "react-router-dom";

import { LayoutCpn, QlvaCpn } from "../components";
import { routePath } from "../common/path";

const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route path={routePath.home.url} element={<LayoutCpn />}>
        <Route path={routePath.layout.url} element={<QlvaCpn />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
export default App;
