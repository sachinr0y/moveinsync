import * as React from "react"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

export function Country() {
  return (
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
  )
}
