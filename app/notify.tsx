"use client"

import { Checkbox } from "@/components/ui/checkbox"

export function Notify() {
    return (
        <div className="flex space-x-10 text-sm font-semibold">
            <div className="email flex items-center space-x-2">
                <Checkbox />
                <span>E- Mail</span>
            </div>
            <div className="email flex items-center space-x-2">
                <Checkbox />
                <span>SMS</span>
            </div>
            <div className="email flex items-center space-x-2">
                <Checkbox />
                <span>App Notifications</span>
            </div>
        </div>
    )
}
