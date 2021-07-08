import { motion, AnimatePresence } from "framer-motion";
import { Provider } from "react-redux";
import { store } from "../app/store";
import Layout from "../components/Layout";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps, router }) => {
  return (
    <Provider store={store}>
      <AnimatePresence exitBeforeEnter>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: {
              opacity: 0,
            },
            pageAnimate: {
              opacity: 1,
            },
            pageExit: {
              backgroundColor: "white",
              opacity: 0,
            },
          }}
        >
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </motion.div>
      </AnimatePresence>
    </Provider>
  );
};

export default MyApp;
