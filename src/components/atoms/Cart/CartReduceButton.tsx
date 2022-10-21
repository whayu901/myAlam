import React, { memo } from "react";

import { IconButton } from "../Button";

interface Props {
  onPress: () => void;
}

const CartReduceButton = ({ onPress }: Props) => {
  return <IconButton icon="reduce" onPress={onPress} />;
};

export default memo(CartReduceButton);
