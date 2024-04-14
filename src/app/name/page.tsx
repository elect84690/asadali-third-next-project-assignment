'use client'

import { useRouter } from "next/navigation";

export default function NamePage(){
    const router = useRouter();
        return (
            <div>
                <div>This is Name page.</div>
                <br />
                <button type="button" onClick={() => router.push('../')}>
                    Go to Home page.
                </button>
            </div>
        )
}