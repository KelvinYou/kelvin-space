import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export default function Page() {
  return (
    <ResizablePanelGroup
      direction="horizontal"
      className="max-w-md rounded-lg border border-gray-900 dark:border-gray-50"
    >
      <ResizablePanel defaultSize={50} className="border-gray-900 dark:border-gray-50">
        <div className="flex h-[200px] items-center justify-center p-6 ">
          <span className="font-semibold">One</span>
        </div>
      </ResizablePanel>
      <ResizableHandle className="border border-gray-900 dark:border-gray-50"/>
      <ResizablePanel defaultSize={50}>
        <ResizablePanelGroup direction="vertical">
          <ResizablePanel defaultSize={25}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Two</span>
            </div>
          </ResizablePanel>
          <ResizableHandle className="border border-gray-900 dark:border-gray-50"/>
          <ResizablePanel defaultSize={75}>
            <div className="flex h-full items-center justify-center p-6">
              <span className="font-semibold">Three</span>
            </div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </ResizablePanel>
    </ResizablePanelGroup>
  )
}
