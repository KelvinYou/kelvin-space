"use client";

import React, { useEffect } from 'react'

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import * as z from "zod"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { toast } from "@/components/ui/use-toast"

import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { useLocalStorage } from 'usehooks-ts';
import { INITIAL_DEFAULT_MENU_LIST, SELECTED_MENU_NAME, navLinks } from '@/constants/menu';
import { DialogClose } from '@radix-ui/react-dialog';

 
const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one item.",
  }),
})
 
const CheckboxReactHookFormMultiple = () => {
  const [selectedMenu, setSelectedMenu] = useLocalStorage<any>(SELECTED_MENU_NAME, null);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: selectedMenu || INITIAL_DEFAULT_MENU_LIST,
  })
 
  function onSubmit(data: z.infer<typeof FormSchema>) {
    setSelectedMenu(data);
    
    toast({
      title: "Updated !",
      // description: (
      //   <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
      //     <code className="text-white">{JSON.stringify(data, null, 2)}</code>
      //   </pre>
      // ),
    })
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              {/* <div className="mb-4">
                <FormLabel className="text-base">Sidebar</FormLabel>
                <FormDescription>
                  Select the items you want to display in the sidebar.
                </FormDescription>
              </div> */}
              {navLinks.map((item, index) => (
                <FormField
                  key={item.id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  )
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.name}
                        </FormLabel>
                      </FormItem>
                    )
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <DialogClose asChild>
          <Button type="submit">Confirm</Button>
        </DialogClose>
      </form>
    </Form>
  )
}

const MenuSelector = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger 
          className='w-full bg-gray-300 dark:bg-gray-700 rounded-sm flex items-center justify-center py-4'
        >
          Menu Preference
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Menu Preference</DialogTitle>
            <DialogDescription>
              Select all the menu bar you want to show
            </DialogDescription>

          </DialogHeader>

          <CheckboxReactHookFormMultiple />

          {/* <DialogFooter>
            <Button type="submit">Confirm</Button>
          </DialogFooter> */}
        </DialogContent>
      </Dialog>
    </>
  )
}

export default MenuSelector