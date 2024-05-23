import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Page1 from "./page1"
import Page2 from "./page2"
import Page3 from "./page3"
export default function Component() {
  return (
    <div className="relative mb-16 mt-4 flex flex-col overflow-hidden rounded-lg bg-background">
      <Tabs defaultValue="1" className="w-full">
        <TabsList className="fixed inset-x-0 bottom-0 z-20 h-auto border-t py-4">
                    <TabsTrigger value="1">Home Screen</TabsTrigger>
          <TabsTrigger value="2">Product Details</TabsTrigger>
          <TabsTrigger value="3">Checkout</TabsTrigger>
        </TabsList>
                <TabsContent value="1"><Page1 /></TabsContent>
        <TabsContent value="2"><Page2 /></TabsContent>
        <TabsContent value="3"><Page3 /></TabsContent>
      </Tabs>
    </div>
  );
}