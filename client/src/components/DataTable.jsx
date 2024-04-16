import React, { useState, useEffect } from "react";
import DataHeader from "./DataTable/DataHeader";
import DataLine from "./DataTable/DataLine";

export default function DataTable({ children }) {
    return (
        <div>
            <div className="text-gray-900">
                <div className="px-3 py-4 flex justify-center">
                    <table className="w-full text-md bg-green-700 shadow-md rounded mb-4">
                        <tbody>
                            {children}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}











