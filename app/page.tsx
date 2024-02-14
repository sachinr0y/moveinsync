'use client'

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Gender } from "./radio"
import { Notify } from "./notify"
import { DatePicker } from "./date"
import { FormEvent, useState } from "react"
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Home() {

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [country, setCountry] = useState<string>('');

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCountryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCountry(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Employee Name:', username);
    console.log('E-mail:', email);
    console.log('Country', country);
    // Add any additional logic or API calls here
  };

  return (
    <div className="flex h-screen w-screen">
      <div
        className="bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500
        w-[40%] flex justify-center items-center text-2xl text-white rounded-r-xl"
      >
        MoveinSync - OnboardingForm
      </div>
      <div className="w-[60%] flex justify-center mt-4">
        <Tabs defaultValue="profile" className="w-[60%]">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="profile">Profile</TabsTrigger>
            <TabsTrigger value="documents">Documents</TabsTrigger>
          </TabsList>
          <TabsContent value="profile">
            <Card>
              <CardHeader>
                <CardTitle>Personal Details</CardTitle>
                <CardDescription>
                  Make sure you fill all the *(mandatory) fields.
                </CardDescription>
              </CardHeader>
              <form onSubmit={handleSubmit}>
                <CardContent className="space-y-3">
                  {/* Name */}
                  <div className="space-y-2">
                    <Label htmlFor="name">Employee Name <span className="text-red-600">*</span></Label>
                    <Input type='text' value={username} onChange={handleNameChange} placeholder="your name" />
                  </div>

                  {/* E-mail */}
                  <div className="space-y-2">
                    <Label htmlFor="email">Email ID <span className="text-red-600">*</span></Label>
                    <Input placeholder="your work email" type="email" value={email} onChange={handleEmailChange} />
                  </div>

                  {/* Country */}
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a country" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Africa</SelectLabel>
                          <SelectItem value="Egypt">Egypt</SelectItem>
                          <SelectItem value="Libya">Libya</SelectItem>
                          <SelectItem value="kenya">Kenya</SelectItem>
                          <SelectItem value="Nigeria">Nigeria</SelectItem>
                          <SelectItem value="South Africa">South Africa</SelectItem>
                          <SelectItem value="Algeria">Algeria</SelectItem>
                          <SelectItem value="Namibia">Namibia</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Europe</SelectLabel>
                          <SelectItem value="UK">UK</SelectItem>
                          <SelectItem value="Norway">Norway</SelectItem>
                          <SelectItem value="Finland">Finland</SelectItem>
                          <SelectItem value="Ireland">Ireland</SelectItem>
                          <SelectItem value="Iceland">Iceland</SelectItem>
                          <SelectItem value="France">France</SelectItem>
                          <SelectItem value="Italy">Italy</SelectItem>
                          <SelectItem value="Spain">Spain</SelectItem>
                          <SelectItem value="Switzerland">Switzerland</SelectItem>
                          <SelectItem value="Portugal">Portugal</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>Asia</SelectLabel>
                          <SelectItem value="India">India</SelectItem>
                          <SelectItem value="Pakistan">Pakistan</SelectItem>
                          <SelectItem value="Srilanka">Srilanka</SelectItem>
                          <SelectItem value="China">China</SelectItem>
                          <SelectItem value="Indonesia">Indonesia</SelectItem>
                          <SelectItem value="Malaysia">Malaysia</SelectItem>
                          <SelectItem value="Japan">Japan</SelectItem>
                          <SelectItem value="South Korea">South Korea</SelectItem>
                          <SelectItem value="Russia">Russia</SelectItem>
                          <SelectItem value="Afghanistan">Afghanistan</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>North America</SelectLabel>
                          <SelectItem value="Canada">Canada</SelectItem>
                          <SelectItem value="USA">USA</SelectItem>
                          <SelectItem value="Mexico">Mexico</SelectItem>
                        </SelectGroup>
                        <SelectGroup>
                          <SelectLabel>South America</SelectLabel>
                          <SelectItem value="Brazil">Brazil</SelectItem>
                          <SelectItem value="Argentina">Argentina</SelectItem>
                          <SelectItem value="Peru">Peru</SelectItem>
                          <SelectItem value="Chile">Chile</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Gender */}
                  <div className="space-y-2">
                    <Label htmlFor="gender">Gender <span className="text-red-600">*</span></Label>
                    <Gender />
                  </div>

                  {/* Phone Number */}
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number <span className="text-red-600">*</span></Label>
                    <Input id="phone" placeholder="your mobile number" type="text" />
                  </div>

                  {/* Notification preferences */}
                  <div className="space-y-2">
                    <Label htmlFor="notify">Notification Preferences</Label>
                    <Notify />
                  </div>

                  {/* Office */}
                  <div className="space-y-2">
                    <Label htmlFor="office">Office</Label>
                    <Input id="office" value="Moveinsync - Bangalore,India" disabled />
                  </div>

                  {/* Team */}
                  <div className="space-y-2">
                    <Label htmlFor="team">Team</Label>
                    <Input id="team" placeholder="your department" />
                  </div>
                  <div className="flex items-center space-x-6">
                    <Button type='submit'>Submit</Button>
                    <Button>Reset</Button>
                  </div>
                </CardContent>
              </form>
              {/* <CardFooter>
                <div className="flex items-center space-x-6">
                  <Button type='submit'>Submit</Button>
                  <Button>Reset</Button>
                </div>
              </CardFooter> */}
            </Card>
          </TabsContent>
          <TabsContent value="documents">
            <Card>
              <CardHeader>
                <CardTitle>Upload Documents</CardTitle>
                <CardDescription>
                  Make sure you upload correct files.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Licence */}
                <div className="space-y-2">
                  <Label htmlFor="licence">Licence <span className="text-red-600">*</span></Label>
                  <Input type="file" accept=".pdf" />
                </div>

                {/* Licenece expiry Date */}
                <div className="space-x-2 flex items-center">
                  <Label htmlFor="expiry">Licence Expiry Date <span className="text-red-600">*</span></Label>
                  <DatePicker />
                </div>

                {/* BGV Certificate */}
                <div className="space-y-2">
                  <Label htmlFor="licence">BGV Certificate <span className="text-red-600">*</span></Label>
                  <Input type="file" accept=".png" />
                </div>
              </CardContent>
              <CardFooter>
                <div className="flex items-center space-x-6">
                  <Button>Submit</Button>
                  <Button>Reset</Button>
                </div>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
