import useClock from "./hooks/useClock";

function App() {
  const locale = useClock();
  const pst = useClock("PST");
  const est = useClock("EST");
  const gst = useClock("GST");

  console.log({ locale, pst, est, gst });

  return <></>;
}

export default App;
