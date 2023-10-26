import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import React from 'react'
import Chatroom from './Chatroom'
import Link from 'next/link'

const ChatPage = () => {
  return (
    <div className='p-4'>
      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Chatroom</CardTitle>
            <CardDescription>build with socket.io</CardDescription>
          </CardHeader>
          <CardContent>
            <div>I refer from here</div>
            <div>
              <Link 
                href={'https://medium.com/@wb-ts/how-to-build-a-simple-chat-app-using-next-js-typescript-socket-io-34c45e56d679'} target="_blank">
                  - Medium
              </Link>
            </div>
            <div>
              <Link 
                href={'https://socket.io/docs/v4/tutorial/step-9'} target="_blank">
                  - Socket.io Docs
              </Link>
            </div>
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>

      <div className='mt-4'>
        <Card>
          <CardHeader>
            <CardTitle>Chatroom Demo</CardTitle>
            <CardDescription>Still searching the best way and improve...</CardDescription>
          </CardHeader>
          <CardContent>
            {/* <Chatroom /> */} currently it is failed successfully XD
          </CardContent>
          <CardFooter>
          </CardFooter>
        </Card>
      </div>
      
    </div>
  )
}

export default ChatPage