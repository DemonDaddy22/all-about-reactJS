import React from 'react';

export const isEmptyString = obj => obj == null || obj == undefined || (typeof obj == "string" && obj.trim() == '');

export const isValidNumber = obj => obj != null && !isNaN(parseFloat(obj)) && !isNaN(Number(obj));

export const isEmptyList = obj => !Array.isArray(obj) || (Array.isArray(obj) && obj.length == 0);

export const isEmptyObject = obj => obj == null || typeof obj !== 'object' || Object.keys(obj).length === 0;

export const getPathValue = (obj, accumulatedPath, defaultValue) => {
    if (obj == null || typeof obj != 'object' || typeof accumulatedPath != 'string') return defaultValue;

    const path = accumulatedPath.split('.');
    let tempObj = obj;

    for (let accessor of path) {
        if (tempObj == null || typeof tempObj != 'object') return defaultValue;
        else if (accessor in tempObj) tempObj = tempObj[accessor];
        else return defaultValue;
    }
    return tempObj == null ? defaultValue : tempObj;
};