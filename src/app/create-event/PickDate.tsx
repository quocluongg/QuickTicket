import * as React from 'react';
import { ChevronDownIcon } from 'lucide-react';
import { Label } from '@/@shared/components/ui/label';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/@shared/components/ui/popover';
import { Button } from '@/@shared/components/ui/Button';
import { Calendar } from '@/@shared/components/ui/calendar';
import { Input } from '@/@shared/components/ui/input';

interface PickDateProps {
  date: Date | undefined;
  onChange: (date: Date | undefined) => void;
}

export function PickDate({ date, onChange }: PickDateProps) {
  const [open, setOpen] = React.useState(false);
  const [time, setTime] = React.useState('10:30:00'); // optional: manage time too

  return (
    <div className="flex gap-4">
      <div className="flex flex-col gap-3">
        <Label htmlFor="date" className="px-1">
          Date
        </Label>
        <Popover open={open} onOpenChange={setOpen}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              id="date"
              className="w-32 justify-between font-normal"
            >
              {date ? date.toLocaleDateString() : 'Select date'}
              <ChevronDownIcon />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-auto overflow-hidden p-0" align="start">
            <Calendar
              mode="single"
              selected={date}
              captionLayout="dropdown"
              onSelect={(selectedDate) => {
                onChange(selectedDate);
                setOpen(false);
              }}
            />
          </PopoverContent>
        </Popover>
      </div>

      <div className="flex flex-col gap-3">
        <Label htmlFor="time" className="px-1">
          Time
        </Label>
        <Input
          type="time"
          id="time"
          step="1"
          defaultValue={time}
          className="bg-background appearance-none [&::-webkit-calendar-picker-indicator]:hidden"
        />
      </div>
    </div>
  );
}
