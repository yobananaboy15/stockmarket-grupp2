import React from "react";
import { Switch, Route } from "react-router-dom";
import { IndicesPage } from "./pages/IndicesPage";
import { IndexDetailsPage } from "./pages/IndexDetailsPage";
import { MarketListPage } from "./pages/MarketListPage";
import { StockListPage } from "./pages/StockListPage";
import { StockDetailPage } from "./pages/StockDetailPage";
import CryptoDetails from "./pages/CryptoDetails";
import CryptoList from "./pages/CryptoList";
import CurrenciesDetailPage from "./pages/CurrenciesDetailPage";
import CurrenciesPage from "./pages/CurrenciesPage";
import Navbar from "./components/Navbar";
import {FrontPage} from "./pages/FrontPage"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Switch>
        <Route path="/indexes/:ticker" component={IndexDetailsPage} />

        <Route path="/indexes/">
          <IndicesPage />
        </Route>

        <Route path="/currencies/:ticker" component={CurrenciesDetailPage} />

        <Route path="/currencies">
          <CurrenciesPage />
        </Route>

        <Route path="/crypto/:ticker" component={CryptoDetails}></Route>
        <Route path="/crypto">
          <CryptoList />
        </Route>
        <Route path="/markets/:market/:stock" component={StockDetailPage} />
        <Route path="/markets/:market" component={StockListPage} />
        <Route path="/markets">
          <MarketListPage />
        </Route>
        <Route path="/">
          <FrontPage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
