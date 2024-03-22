'use client';

import { Button, Checkbox, Label, TextInput } from 'flowbite-react';

function Component() {
  return (
    <div className='flex justify-center mt-10'>
      <form className="flex max-w-md flex-col gap-4 w-1/2">
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email1" value="Tài khoản" />
          </div>
          <TextInput id="email1" type="email" required />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password1" value="Mật khẩu" />
          </div>
          <TextInput id="password1" type="password" required />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
}

export default Component;