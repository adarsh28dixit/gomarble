import React, { useState } from "react";
import { TabItem } from "./TabItem";
import { TabPanel } from "./TabPanel";
import { TTab } from "../../interfaces";

type TTabViewProps = {
    tabs: TTab[];
};

export const TabView = ({ tabs }: TTabViewProps) => {
    const [activeTab, setActiveTab] = useState(0);
    return (
        <div className="mx-auto py-4 bg-slate-50 ">
            
            <div className="mx-auto">
                {tabs?.map((tab: TTab, index: number) => (
                    <TabPanel key={tab?.id} isActive={index === activeTab}>
                        {tab?.content}
                    </TabPanel>
                ))}
            </div>
        </div>
    );
};
