import React from 'react';
import styled from 'styled-components';

export default function Chat(props) {
    return (
        <Wrap>
            <textarea
                value={props.message.message}
                placeholder={`和${props.contact.name}聊天`}
                onChange={(e) => {
                    props.dispatch({
                        type: 'change_message',
                        message: e.target.value,
                    });
                }}
            />
            <div>
                <button
                    onClick={() => {
                        alert(
                            `邮件:${props.contact.email}; 内容:${props.message.message}`
                        );
                        props.dispatch({
                            type: 'change_message',
                            message: '',
                        });
                    }}
                >{`发送到${props.contact.email}`}</button>
            </div>
        </Wrap>
    );
}

const Wrap = styled.div``;
