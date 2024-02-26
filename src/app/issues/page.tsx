"use client"

import Button from "@/components/Button";
import { Input } from "@/components/Input";
import Table from "@/components/Table";
import IconSearch from "@/icons/IconSearch";
import { TABLE_COLUMN_SAMPLE, TABLE_DATA } from "./data";
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader } from "@nextui-org/modal";
import { useState } from "react";
import AddIssue from "./AddIssue";

export default function IssuePage() {
    const [isOpen, setIsOpen] = useState(false)
    return <main>
        <div className="flex justify-end gap-4">
            <Input type="text" placeholder="Search" iconbefore={<IconSearch/>}/>
            <Button onClick={()=>setIsOpen(!isOpen)}>Add Issue</Button>
        </div>
        <div className="flex max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
            <Table columns={TABLE_COLUMN_SAMPLE} dataSource={TABLE_DATA}></Table>
        </div>
        <Modal
            isOpen={isOpen}
            isDismissable={false}
            isKeyboardDismissDisabled={true}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Post Ticket</ModalHeader>
              <ModalBody>
                <AddIssue/>
              </ModalBody>
              <ModalFooter>
                <Button onClick={()=>setIsOpen(!isOpen)}>
                  Close
                </Button>
                <Button>
                  Save Ticket
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
        </Modal>

    </main>
}