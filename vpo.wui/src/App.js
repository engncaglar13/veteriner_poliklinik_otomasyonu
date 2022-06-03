import { PureComponent } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import "./App.css";
import Layout from "./components/Layout/Layout";
import NavMenu from "./components/Layout/Nav/NavMenu";
import SecureRoute from "./libs/SecureRoute";
//HomePage
import HomePage from "./components/Home/HomePage";
//User
import UserList from "./components/Users/UserList";
import UserEdit from "./components/Users/UserEdit";
import UserNew from "./components/Users/UserNew";
import UserDelete from "./components/Users/UserDelete";
//Role
import RoleList from "./components/Roles/RoleList";
import RoleEdit from "./components/Roles/RoleEdit";
import RoleNew from "./components/Roles/RoleNew";
import RoleDelete from "./components/Roles/RoleDelete";
//Pet
import PetList from "./components/Pets/PetList";
import PetEdit from "./components/Pets/PetEdit";
import PetNew from "./components/Pets/PetNew";
import PetDelete from "./components/Pets/PetDelete";
//Product
import ProductList from "./components/Products/ProductList";
import ProductEdit from "./components/Products/ProductEdit";
import ProductNew from "./components/Products/ProductNew";
import ProductDelete from "./components/Products/ProductDelete";

//Customer
import CustomerList from "./components/Customers/CustomerList";
import CustomerEdit from "./components/Customers/CustomerEdit";
import CustomerNew from "./components/Customers/CustomerNew";
import CustomerDelete from "./components/Customers/CustomerDelete";

//Supplier
import SupplierList from "./components/Suppliers/SupplierList";
import SupplierEdit from "./components/Suppliers/SupplierEdit";
import SupplierNew from "./components/Suppliers/SupplierNew";
import SupplierDelete from "./components/Suppliers/SupplierDelete";

//ProductCategory
import ProductCategoryList from "./components/ProductCategories/ProductCategoryList";
import ProductCategoryEdit from "./components/ProductCategories/ProductCategoryEdit";
import ProductCategoryNew from "./components/ProductCategories/ProductCategoryNew";
import ProductCategoryDelete from "./components/ProductCategories/ProductCategoryDelete";


//CurrencyUnit
import CurrencyUnitList from "./components/CurrencyUnits/CurrencyUnitList";
import CurrencyUnitEdit from "./components/CurrencyUnits/CurrencyUnitEdit";
import CurrencyUnitNew from "./components/CurrencyUnits/CurrencyUnitNew";
import CurrencyUnitDelete from "./components/CurrencyUnits/CurrencyUnitDelete";


//Payment
import PaymentList from "./components/Payments/PaymentList";
import PaymentEdit from "./components/Payments/PaymentEdit";
import PaymentNew from "./components/Payments/PaymentNew";
import PaymentDelete from "./components/Payments/PaymentDelete";

//MeasurementUnit
import MeasurementUnitList from "./components/MeasurementUnits/MeasurementUnitList";
import MeasurementUnitEdit from "./components/MeasurementUnits/MeasurementUnitEdit";
import MeasurementUnitNew from "./components/MeasurementUnits/MeasurementUnitNew";
import MeasurementUnitDelete from "./components/MeasurementUnits/MeasurementUnitDelete";

//Payment
import PetAnalysisList from "./components/PetAnalysis/PetAnalysisList";
import PetAnalysisEdit from "./components/PetAnalysis/PetAnalysisEdit";
import PetAnalysisNew from "./components/PetAnalysis/PetAnalysisNew";
import PetAnalysisDelete from "./components/PetAnalysis/PetAnalysisDelete";


//Modal
import ModalManager from "./libs/ModalManager";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";

import configureStore from "./store/reducers/configureStore";
const store = configureStore();
class App extends PureComponent {
  render() {
    return (
      <>
        <NavMenu />
        <Layout>
          <Provider store={store}>
            <ModalManager>
              <Router>
                <Route exact path="/login" component={Login} />
                <Route exact path="/register" component={Register} />
                <Switch>
                  <SecureRoute exact path="/" component={HomePage} />
                  <SecureRoute exact path="/users-list" component={UserList} />
                  <SecureRoute exact path="/users-edit/:id" component={UserEdit} />
                  <SecureRoute exact path="/users-delete/:id" component={UserDelete} />
                  <SecureRoute exact path="/users-new" component={UserNew} />
                  <SecureRoute exact path="/roles-list" component={RoleList} />
                  <SecureRoute exact path="/roles-edit/:id" component={RoleEdit} />
                  <SecureRoute exact path="/roles-delete/:id" component={RoleDelete} />
                  <SecureRoute exact path="/roles-new" component={RoleNew} />
                  <SecureRoute exact path="/customers-list" component={CustomerList} />
                  <SecureRoute exact path="/customers-edit/:id" component={CustomerEdit} />
                  <SecureRoute exact path="/customers-delete/:id" component={CustomerDelete} />
                  <SecureRoute exact path="/customers-new" component={CustomerNew} />
                  <SecureRoute exact path="/suppliers-list" component={SupplierList} />
                  <SecureRoute exact path="/suppliers-edit/:id" component={SupplierEdit} />
                  <SecureRoute exact path="/suppliers-delete/:id" component={SupplierDelete} />
                  <SecureRoute exact path="/suppliers-new" component={SupplierNew} />
                  <SecureRoute exact path="/payments-list" component={PaymentList} />
                  <SecureRoute exact path="/payments-edit/:id" component={PaymentEdit} />
                  <SecureRoute exact path="/payments-delete/:id" component={PaymentDelete} />
                  <SecureRoute exact path="/payments-new" component={PaymentNew} />
                  <SecureRoute exact path="/pets-list" component={PetList} />
                  <SecureRoute exact path="/pets-edit/:id" component={PetEdit} />
                  <SecureRoute exact path="/pets-delete/:id" component={PetDelete} />
                  <SecureRoute exact path="/pets-new" component={PetNew} />
                  <SecureRoute exact path="/products-list" component={ProductList} />
                  <SecureRoute exact path="/products-edit/:id" component={ProductEdit} />
                  <SecureRoute exact path="/products-delete/:id" component={ProductDelete} />
                  <SecureRoute exact path="/products-new" component={ProductNew} />
                  <SecureRoute exact path="/productCategories-list" component={ProductCategoryList} />
                  <SecureRoute exact path="/productCategories-edit/:id" component={ProductCategoryEdit} />
                  <SecureRoute exact path="/productCategories-delete/:id" component={ProductCategoryDelete} />
                  <SecureRoute exact path="/productCategories-new" component={ProductCategoryNew} />
                  <SecureRoute exact path="/currencyUnits-list" component={CurrencyUnitList} />
                  <SecureRoute exact path="/currencyUnits-edit/:id" component={CurrencyUnitEdit} />
                  <SecureRoute exact path="/currencyUnits-delete/:id" component={CurrencyUnitDelete} />
                  <SecureRoute exact path="/currencyUnits-new" component={CurrencyUnitNew} />
                  <SecureRoute exact path="/measurementUnits-list" component={MeasurementUnitList} />
                  <SecureRoute exact path="/measurementUnits-edit/:id" component={MeasurementUnitEdit} />
                  <SecureRoute exact path="/measurementUnits-delete/:id" component={MeasurementUnitDelete} />
                  <SecureRoute exact path="/measurementUnits-new" component={MeasurementUnitNew} />
                  <SecureRoute exact path="/pet-analysis-list" component={PetAnalysisList} />
                  <SecureRoute exact path="/pet-analysis-edit/:id" component={PetAnalysisEdit} />
                  <SecureRoute exact path="/pet-analysis-delete/:id" component={PetAnalysisDelete} />
                  <SecureRoute exact path="/pet-analysis-new" component={PetAnalysisNew} />

                </Switch >
              </Router >
            </ModalManager >
          </Provider >
        </Layout >
      </>
    );
  }
}

export default App;
