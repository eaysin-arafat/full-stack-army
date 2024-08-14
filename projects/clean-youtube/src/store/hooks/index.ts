import { createTypedHooks } from "easy-peasy";
import { StoreModelType } from "..";

const typedHooks = createTypedHooks<StoreModelType>();

export const useStoreActions = typedHooks.useStoreActions;
export const useStoreDispatch = typedHooks.useStoreDispatch;
export const useStoreState = typedHooks.useStoreState;
