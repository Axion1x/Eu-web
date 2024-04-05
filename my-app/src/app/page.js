"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from "./page.module.css";
import App from "./components/App.jsx"
import { Provider } from "react-redux";
import { store } from "@/redux/store";
const Home = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
    );
}

export default Home;