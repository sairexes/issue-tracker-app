import Button from "@/components/Button";
import { Input, Textarea } from "@nextui-org/input";
import { useRef } from "react";

export const AddIssue = () => {
    const hiddenFileInput = useRef<HTMLInputElement>(null);
    const handleChange = (event:any) => {
        if (event.target.files && event.target.files[0]) {
          const i = event.target.files[0];
          console.log( i )
        }
      };


      const handleClick = (event:any) => {
        if ( hiddenFileInput && hiddenFileInput.current) {
            hiddenFileInput.current.click();
        }
      };
    return (
        <div>
            <div className="flex flex-row items-center justify-items-center">
                <span>Title</span>
                <Input/>
            </div>
            <div className="flex">
                <span>Description</span>
                <Textarea/>
            </div>
            <div className="">
                <Button onClick={(e)=>handleClick(e)}>
                  Add File
                </Button>
                <input type="file"
                  ref={hiddenFileInput}
                  onChange={handleChange}

                  accept="image/*"
                  style={{ display: 'none' }} />
            </div>

        </div>
    )
}

export default AddIssue;