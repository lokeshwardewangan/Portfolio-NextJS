"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ShineBorder } from "@/components/ui/shine-border";
import { ArrowRight, Mail, MessageSquare, User, Tag, Loader2 } from "lucide-react";

// Form & Validation
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactSchema, ContactFormData } from "@/schemas/contact";
import { useSendMessage } from "@/hooks/useContact";

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const { mutate: sendMessage, isPending } = useSendMessage();

  const onSubmit = (data: ContactFormData) => {
    sendMessage(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  return (
    <main className="bg-grid-white/[0.02] relative flex min-h-screen w-full items-center justify-center overflow-hidden pt-20 pb-10 antialiased">
      {/* Ambient Background Glows */}
      <div className="bg-card/80 pointer-events-none absolute inset-0 flex items-center justify-center mask-[radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black"></div>
      <div className="pointer-events-none absolute top-0 left-1/2 h-full w-full max-w-7xl -translate-x-1/2">
        <div className="absolute top-[-10%] left-[-10%] h-96 w-96 animate-pulse rounded-full bg-purple-500/20 opacity-50 blur-[100px]" />
        <div className="absolute right-[-10%] bottom-[-10%] h-96 w-96 animate-pulse rounded-full bg-blue-500/20 opacity-50 blur-[100px] delay-1000" />
      </div>

      <div className="relative z-10 w-full max-w-lg p-4">
        <div className="mb-8 space-y-2 text-center">
          <h1 className="bg-linear-to-b from-slate-950 to-slate-600 bg-clip-text text-3xl font-bold text-transparent md:text-4xl dark:from-neutral-50 dark:to-neutral-400">
            Get in Touch
          </h1>
          <p className="text-muted-foreground text-sm md:text-base">
            Have a project in mind? Let&apos;s build something extraordinary.
          </p>
        </div>

        <Card className="border-border bg-card/80 relative w-full overflow-hidden border py-8 shadow-2xl backdrop-blur-2xl dark:bg-black/5">
          <ShineBorder
            className="z-0 p-px"
            shineColor={["#A07CFE", "#FE8FB5", "#FFBE7B"]}
            duration={10}
            borderWidth={1.5}
          />
          <div className="relative z-10 h-full w-full rounded-[inherit] bg-transparent">
            <CardHeader className="px-8">
              <CardTitle className="text-foreground text-xl">Contact Me</CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and I&apos;ll get back to you shortly.
              </CardDescription>
            </CardHeader>
            <CardContent className="px-8">
              <form onSubmit={handleSubmit(onSubmit)} className="my-5 mb-8 grid gap-6">
                <div className="group grid gap-2">
                  <Label
                    htmlFor="name"
                    className="text-foreground transition-colors group-focus-within:text-purple-700 dark:group-focus-within:text-purple-400"
                  >
                    Name
                  </Label>
                  <div className="relative">
                    <User className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4 transition-colors group-focus-within:text-purple-700 dark:group-focus-within:text-purple-400" />
                    <Input
                      id="name"
                      placeholder="Your Name"
                      {...register("name")}
                      className="border-border bg-foreground/5 text-foreground placeholder:text-muted-foreground hover:bg-foreground/10 pl-9 transition-all duration-300 focus-visible:border-purple-500/50 focus-visible:ring-purple-500/50"
                    />
                  </div>
                  {errors.name && (
                    <p className="text-xs text-red-700 dark:text-red-400">{errors.name.message}</p>
                  )}
                </div>

                <div className="group grid gap-2">
                  <Label
                    htmlFor="email"
                    className="text-foreground transition-colors group-focus-within:text-pink-700 dark:group-focus-within:text-pink-400"
                  >
                    Email
                  </Label>
                  <div className="relative">
                    <Mail className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4 transition-colors group-focus-within:text-pink-700 dark:group-focus-within:text-pink-400" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="name@example.com"
                      {...register("email")}
                      className="border-border bg-foreground/5 text-foreground placeholder:text-muted-foreground hover:bg-foreground/10 pl-9 transition-all duration-300 focus-visible:border-pink-500/50 focus-visible:ring-pink-500/50"
                    />
                  </div>
                  {errors.email && (
                    <p className="text-xs text-red-700 dark:text-red-400">{errors.email.message}</p>
                  )}
                </div>

                <div className="group grid gap-2">
                  <Label
                    htmlFor="subject"
                    className="text-foreground transition-colors group-focus-within:text-cyan-700 dark:group-focus-within:text-cyan-400"
                  >
                    Subject
                  </Label>
                  <div className="relative">
                    <Tag className="text-muted-foreground absolute top-2.5 left-3 h-4 w-4 transition-colors group-focus-within:text-cyan-700 dark:group-focus-within:text-cyan-400" />
                    <Input
                      id="subject"
                      placeholder="Project Inquiry"
                      {...register("subject")}
                      className="border-border bg-foreground/5 text-foreground placeholder:text-muted-foreground hover:bg-foreground/10 pl-9 transition-all duration-300 focus-visible:border-cyan-500/50 focus-visible:ring-cyan-500/50"
                    />
                  </div>
                  {errors.subject && (
                    <p className="text-xs text-red-700 dark:text-red-400">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                <div className="group grid gap-2">
                  <Label
                    htmlFor="message"
                    className="text-foreground transition-colors group-focus-within:text-orange-700 dark:group-focus-within:text-orange-400"
                  >
                    Message
                  </Label>
                  <div className="relative">
                    <MessageSquare className="text-muted-foreground absolute top-3 left-3 h-4 w-4 transition-colors group-focus-within:text-orange-700 dark:group-focus-within:text-orange-400" />
                    <textarea
                      id="message"
                      placeholder="How can I help you?"
                      {...register("message")}
                      className="ring-offset-background border-border bg-foreground/5 text-foreground placeholder:text-muted-foreground hover:bg-foreground/10 flex min-h-[100px] w-full resize-none rounded-md border px-3 py-2 pl-9 text-sm transition-all duration-300 focus-visible:ring-2 focus-visible:ring-orange-500/50 focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>
                  {errors.message && (
                    <p className="text-xs text-red-700 dark:text-red-400">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <div className="flex items-center justify-end">
                  <Button
                    type="submit"
                    disabled={isPending}
                    className="w-fit cursor-pointer border-0 bg-linear-to-r from-purple-700 via-pink-700 to-orange-700 text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-[1.02] hover:from-purple-800 hover:via-pink-800 hover:to-orange-800 hover:shadow-pink-500/30 disabled:cursor-not-allowed disabled:opacity-50 dark:from-purple-500 dark:via-pink-500 dark:to-orange-500 dark:hover:from-purple-600 dark:hover:via-pink-600 dark:hover:to-orange-600"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message <ArrowRight className="ml-2 h-4 w-4" />
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </CardContent>
          </div>
        </Card>
      </div>
    </main>
  );
}
