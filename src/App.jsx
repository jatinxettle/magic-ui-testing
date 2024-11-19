import { Globe } from "../src/components/Globe"
import { DockDemo } from "./components/DockDemo"
import { ShimmerDemo } from "../src/components/ShimmerDemo"
import { RippleDemo } from "../src/components/RippleDemo"
import { PulsatingButtonDemo } from "../src/components/PulsatingButtonDemo"
import "./App.css"
import { ThemeProvider } from "@/components/ThemeProvider"

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="w-screen h-screen flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center gap-[10rem] w-full mt-10">
          <div className="flex flex-col gap-[5rem] items-center w-full">
            <div>
              <DockDemo />
            </div>
            <div>
              <PulsatingButtonDemo />
            </div>
            <div className="w-full">
              <RippleDemo />
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  )
}

export default App
