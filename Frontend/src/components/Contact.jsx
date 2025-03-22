import React from 'react'
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { MailMinus, MessageCircle } from 'lucide-react'


function Contact() {
    return (
        <>
            <div className="flex justify-center mt-8 gap-12 sm:h-[60vh] items-center flex-col w-full p-4 sm:flex-row">

                {/* left */}
                <div className="">
                    <h2 className='font-extrabold mb-4 text-2xl sm:text-4xl'>Contact</h2>
                    <h2 className='text-xl sm:text-2xl text-black mb-4'>Ask our team</h2>
                    <p className='mb-4'>Want to contact us directly? No problem. We are always here for you</p>
                    <div className="flex flex-col gap-4">
                        <h2 className='flex gap-2'><MailMinus /> Email info@summarify.com</h2>
                        <h2 className='flex gap-2'><MessageCircle /> Start live chat +31 00 00 000</h2>
                        <h2>WhatsApp +31 00 00 000</h2>
                    </div>
                </div>
                {/* right */}

                <div className="">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Can the Summarizer can handle complex languange ?</AccordionTrigger>
                            <AccordionContent className="sm:w-96">
                                Yes, it can. The AI has been trained on a big dataset, so technical or complex data won’t be a problem for the text summarizer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>Can I use the Summarizer in moblie</AccordionTrigger>
                            <AccordionContent>
                                The text summarizer is accessible on both desktop and mobile.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How much text handle in once</AccordionTrigger>
                            <AccordionContent className="sm:w-96">
                                At the moment, a maximum of 600 words can be summarized at once, within a few seconds. Want to summarize more? Just paste another block of text. There’s no limit on how much text you can summarize with our text summarizer.
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger>How to use ?</AccordionTrigger>
                            <AccordionContent>
                            Insert, paste or download your text
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default Contact
