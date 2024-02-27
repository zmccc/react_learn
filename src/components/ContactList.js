import classNames from 'classnames';
import React from 'react';
import styled from 'styled-components';

export default function ContactList(props) {
    return (
        <Wrap>
            {props.contacts.map((item) => (
                <li key={item.id}>
                    <button
                        className={classNames({
                            selected: item.id === props.selectedId,
                        })}
                        onClick={() => {
                            props.dispatch({
                                type: 'change_name',
                                contactId: item.id,
                            });
                        }}
                    >
                        {item.name}
                    </button>
                </li>
            ))}
        </Wrap>
    );
}

const Wrap = styled.ol`
    list-style-type: none;

    button {
        &.selected {
            font-weight: bold;
        }
    }
`;
