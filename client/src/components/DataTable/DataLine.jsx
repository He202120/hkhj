import React from 'react';
import {Input} from "@/components/ui/input";
import {Button} from "@/components/ui/button";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

const DataLine = ({ children }) => {
    return (
        <tr className="border-b hover:bg-green-100 bg-gray-100">
            {children}
        </tr>
    );
}

export default DataLine;






























