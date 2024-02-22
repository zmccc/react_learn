import React, { memo } from 'react';
import Panel from './Panel';

function Container(props) {
    return (
        <div>
            <Panel />
            <label>
                <input
                    type='checkbox'
                    checked={props.theme === 'dark'}
                    onChange={(e) =>
                        props.setTheme(e.target.checked ? 'dark' : 'light')
                    }
                />
                <span>use dark mode</span>
            </label>
        </div>
    );
}

export default memo(Container);
