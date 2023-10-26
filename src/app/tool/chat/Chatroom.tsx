"use client";

import React, { useState, useEffect } from 'react';
import io from 'socket.io-client';
const Chatroom = () => {
    // State to store the messages
    const [messages, setMessages] = useState<any>([]);
    // State to store the current message
    const [currentMessage, setCurrentMessage] = useState('');

    useEffect(() => {
        // Create a socket connection
        const socket = io();

        // Listen for incoming messages
        socket.on('message', (message: any) => {
            setMessages((prevMessages: any) => [...prevMessages, message]);
        });

        // Clean up the socket connection on unmount
        return () => {
            socket.disconnect();
        };
    }, []);

    const sendMessage = () => {
    const socket = io();
      
        // Send the message to the server
        socket.emit('message', currentMessage);
        // Clear the currentMessage state
        setCurrentMessage('');
    };

    return (
        <div>
            {/* Display the messages */}
            {messages.map((message: any, index: number) => (
                <p key={index}>{message}</p>
            ))}

            {/* Input field for sending new messages */}
            <input
                type="text"
                value={currentMessage}
                onChange={(e) => setCurrentMessage(e.target.value)}
            />

            {/* Button to submit the new message */}
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default Chatroom