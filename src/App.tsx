import { FlexBox } from "./components/UI/FlexBox";

function App() {
  return (
    <>
      {/* <div className="bg-primary">Primary</div>
      <div className="bg-light">Primary Light</div>
      <div className="bg-dark">Primary Dark</div>
      <div className="bg-secondary">Secondary</div>
      <div className="bg-gray-primary">Grey</div>
      <div className="bg-gray-light">Light Grey</div>
      <div className="bg-gray-dark">Dark Grey</div>
      <div className="bg-black">Black</div>
      <div className="bg-white">White</div> */}
      {/* <div className="text-textSecondary">a</div> */}
      <FlexBox bgColor="black" color="primary">
        ABC
      </FlexBox>
      <div className="flex justify-start align-top flex-row flex-nowrap  w-auto h-auto    text-primary cursor-default undefined">
        ABC
      </div>
    </>
  );
}

export default App;
