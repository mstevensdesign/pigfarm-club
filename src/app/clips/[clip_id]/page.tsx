"use client";

import { useParams } from "next/navigation";

const ClipDetailPage = () => {
  const params = useParams();
  const clip_id = params?.clip_id ? Number(params.clip_id) : null;
  console.log(clip_id);
};
export default ClipDetailPage;
