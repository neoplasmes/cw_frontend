import React from "react";
import { Introduction } from "./Introduction";
import { First, firstTest } from "./First";
import { Second,secondTest } from "./Second";
import{Third,thirdTest} from "./Third";
import { Fourth, fourthTest } from "./Fourth";
import { Fifth, fifthTest } from "./Fifth";
import {Sixth,sixthTest } from "./Sixth";
import{Seventh} from "./Seventh";
import{Eighth, eighthTest} from "./Eighth";
import {Epilogue} from "./Epilogue";




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
        test: secondTest
       },
    "3": {
        element: <Third />,
        test: thirdTest
       },
    "4": {
        element: <Fourth />,
        test: fourthTest
       },
    "5": {
        element: <Fifth />,
        test: fifthTest
       },
    "6": {
        element: <Sixth />,
        test: sixthTest
       },
    "7": {
        element: <Seventh />,
        
       },
    "8": {
         element: <Eighth />,
         test: eighthTest
        },
    "epilogue": {
        element: <Epilogue/>,
       },
}