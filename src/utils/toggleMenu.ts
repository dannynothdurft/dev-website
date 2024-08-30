"use client";
import { store } from "@/lib/Redux/store";
import { switchMobileNavigation } from "@/lib/Redux/reducer/mode";

export default function toggleMenu() {
  const dispatch = store.dispatch;
  dispatch(switchMobileNavigation());
}
