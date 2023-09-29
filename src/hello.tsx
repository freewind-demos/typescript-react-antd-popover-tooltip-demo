import React from 'react'
import {Alert, Button, Popover} from 'antd';

export default function Hello() {
    return <Popover content={"hello"} trigger={'click'}><Button>Click</Button></Popover>;
};
