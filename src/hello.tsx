import { Button, Popover, Tooltip } from 'antd';
import React from 'react';

export default function Hello() {
    return <Popover content={"my big popover"} trigger={'click'} zIndex={1100}>
        <Tooltip title="my tooltip" zIndex={1000}><Button>Click</Button></Tooltip>
    </Popover>;
};
