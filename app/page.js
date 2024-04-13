import Image from "next/image";
import {Button, ButtonGroup} from "@nextui-org/react";


export default function Home() {
  return (
    <main className="flex justify-center items-center ml-3 ">
      <h1>Home Page</h1>
      <Button style={{textAlign: 'left', width: '100%'}}>My Button</Button> 
    </main>
  );
}
