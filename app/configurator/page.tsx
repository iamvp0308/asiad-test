import type { Metadata } from "next";
import ConfiguratorLoader from "@/components/ConfiguratorLoader";

export const metadata: Metadata = {
  title: "3D Configurator — ASIAD",
  description:
    "Design your ASIAD build in real time — seat color, material, stitching, and accessories rendered live in 3D.",
};

export default function ConfiguratorPage() {
  return (
    <div className="pt-[88px]">
      <ConfiguratorLoader />
    </div>
  );
}
