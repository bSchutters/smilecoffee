import { Input } from "../../design-sytem/input/input";
import { Textarea } from "../../design-sytem/textarea/textarea";
import { Select } from "../../design-sytem/select/select";
import { Button } from "../../design-sytem/button/button";

export default function ContactForm() {
  return (
    <form className="flex flex-col gap-12 mb-10 ">
      <div className="flex gap-10 w-full">
        <Input type="text" placeholder="Name" className="w-1/3" />
        <Input type="email" placeholder="Name" />
        <Select>
          <option value="volvo">Problem</option>
          <option value="saab">Jobs</option>
          <option value="mercedes">Other</option>
        </Select>
      </div>
      <div className="flex flex-col gap-12">
        <Textarea placeholder="Message" />
        <Button
          text="Send"
          textSize="35"
          bgColor="orange"
          textColor="beige"
          className="w-1/6 self-end"
        />
      </div>
    </form>
  );
}
