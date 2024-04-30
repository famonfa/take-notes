import { NextResponse } from "next/server";
import { prisma } from "@/app/libs/prisma";

type Params = {
  params: { id: string };
};

