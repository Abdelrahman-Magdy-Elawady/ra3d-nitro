import SelectInput from "@/components/form-inputs/select";
import { calculateShipping } from "@/actions";
import Button from "@/components/button";
export default function ShippingForm() {
  return (
    <form
      action={calculateShipping}
      className="space-y-8 w-full max-w-[450px] mx-auto"
    >
      <div className="flex flex-col gap-[10px] 2xl:p-[10px]">
        <LabeledInput
          label={"shipping from"}
          input={
            <SelectInput options={["riyadh", "jeddah"]} name="shipping-from" />
          }
        />
        <LabeledInput
          label={"shipping to"}
          input={
            <SelectInput
              options={["riyadh", "jeddah", "b", "a"]}
              name="shipping-to"
            />
          }
        />
      </div>
      <Button
        type="submit"
        className="mx-auto block font-semibold bg-[#364772] text-white  2xl:w-[169px] 2xl:h-[42px] text-[calc(13px+(16-13)*((clamp(390px,100vw,1512px)-390px)/(1512-390)))]"
        animated
      >
        calculate now
      </Button>
    </form>
  );
}
//-----------------------------------------------------------------
interface LabeledInputPropType {
  input: React.ReactNode;
  label: string;
}

function LabeledInput({ input, label }: LabeledInputPropType) {
  //--------HOC------
  return (
    <label className="space-y-2 font-semibold text-[13px]">
      <div className="capitalize">{label}</div>
      {input}
    </label>
  );
}
