import React from "react";
import { Text } from "../ui-styles/Text";

const FormatDate = ({ date }: { date: string; css?: string }) => {
  const formattedDate = formatDate(date);

  return (
    <Text par css="text-xs">
      {formattedDate}
    </Text>
  );
};

const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear().toString().substr(-2);

  return `${day}/${month}/${year}`;
};

export default FormatDate;
