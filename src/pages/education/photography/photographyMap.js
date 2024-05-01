import React from "react";
import { Introduction } from "./Introduction";
import { First, firstTest } from "./First";
import { Second } from "./Second";
import { Third } from "./Third";



export const photographyMap = {
    "introduction": {
        element: <Introduction />
        },
    "1": {
         element: <First />,
         test: firstTest
        },
    "2": {
        element: <Second />,
        test: firstTest
       },
    "3": {
        element: <First />,
        test: firstTest
       },
    "4": {
        element: <First />,
        test: firstTest
       },
    "5": {
        element: <First />,
        test: firstTest
       },
    "6": {
        element: <First />,
        test: firstTest
       },
    "7": {
        element: <First />,
        test: firstTest
       },
    "8": {
         element: <First />,
         test: firstTest
        },
    "epilogue": {
        element: <></>,
       },
}