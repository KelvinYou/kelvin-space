import React from 'react'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'

const AppSwitcher = () => {
  return (
    <>
      <Dialog>
        <DialogTrigger className='w-full bg-gray-300 dark:bg-gray-700 rounded-sm flex items-center justify-center py-4'>
          Menu Preference
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Menu Preference</DialogTitle>
            <DialogDescription>
              Select all the menu bar you want to show
            </DialogDescription>

          </DialogHeader>

          <div className="items-top flex space-x-2 mt-3">
            <Checkbox id="terms1" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms1"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>

          <div className="items-top flex space-x-2 mt-3">
            <Checkbox id="terms2" />
            <div className="grid gap-1.5 leading-none">
              <label
                htmlFor="terms2"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </label>
              <p className="text-sm text-muted-foreground">
                You agree to our Terms of Service and Privacy Policy.
              </p>
            </div>
          </div>

          <DialogFooter>
            <Button type="submit">Confirm</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default AppSwitcher