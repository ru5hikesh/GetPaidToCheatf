"use client"

import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Play, Check, Lock } from 'lucide-react'
import PageGradient from "@/assets/svg/PageGradient1.svg"
import TutorialTopGradient from "@/assets/svg/tutorialtopgradient.svg"
import Image from "next/image"

export default function Tutorials() {
  const courseProgress = [
    { title: "Getting Started", status: "completed", progress: 100 },
    { title: "Basic Concepts", status: "completed", progress: 100 },
    { title: "Connect Account", status: "completed", progress: 100 },
    { title: "Start Earning", status: "completed", progress: 100 },
    { title: "How to start affiliate linking", status: "in-progress", progress: 60 },
    { title: "New Video", status: "locked", progress: 0 },
    { title: "New Video", status: "locked", progress: 0 },
  ]

  return (
    <div className="min-h-screen relative w-fit overflow-hidden mx-auto">
      {/* Background Gradients */}
      <Image
        src={TutorialTopGradient}
        alt=""
        className="absolute top-0 right-0 pointer-events-none"
      />
      <Image
        src={PageGradient}
        alt=""
        className="absolute bottom-0 left-0 pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto p-6 space-y-6">
        {/* Platform Mastery Progress */}
        <Card className="bg-[#4C4C4C33] backdrop-blur-sm border-0">
          <div className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-white">Platform Mastery Progress</h2>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span className="text-[#F05600]">65% Complete</span>
              </div>
              <Progress value={65} className="bg-[#4C4C4C33]" />
            </div>
          </div>
        </Card>

        {/* Tutorial Progress */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Video Section */}
          <Card className="bg-[#4C4C4C33] backdrop-blur-sm border-0">
            <div className="p-6 space-y-4">
              <div className="relative aspect-video bg-black/50 rounded-lg flex items-center justify-center">
                <button className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors">
                  <Play className="w-8 h-8 text-white" />
                </button>
              </div>
              <h3 className="text-xl font-semibold text-white">
                How to Start Affiliate Linking and earning by sharing the link
              </h3>
              <div className="w-full bg-[#4C4C4C33] rounded-full h-2">
                <div className="bg-[#F05600] h-2 rounded-full" style={{ width: "60%" }} />
              </div>
              <button className="flex items-center justify-center w-full gap-2 bg-[#F05600] text-white py-3 rounded-lg hover:bg-[#F05600]/90 transition-colors">
                <Play className="w-5 h-5" />
                Continue Learning
              </button>
              <p className="text-sm text-gray-400 text-center">
                Complete the video to earn a 24 hour Key. Wait for 2 Weeks for it to be activated
              </p>
            </div>
          </Card>

          {/* Course Overview */}
          <Card className="bg-[#4C4C4C33] backdrop-blur-sm border-0">
            <div className="p-6 space-y-4">
              <h3 className="text-xl font-semibold text-white">Course Overview</h3>
              <div className="space-y-4">
                {courseProgress.map((course, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      course.status === "completed" 
                        ? "bg-green-500" 
                        : course.status === "in-progress" 
                          ? "bg-[#F05600]" 
                          : "bg-gray-600"
                    }`}>
                      {course.status === "completed" ? (
                        <Check className="w-4 h-4 text-white" />
                      ) : course.status === "locked" ? (
                        <Lock className="w-4 h-4 text-white" />
                      ) : null}
                    </div>
                    <div className="flex-1">
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-white">{course.title}</span>
                        <span className={`${
                          course.status === "completed" 
                            ? "text-green-500" 
                            : course.status === "in-progress" 
                              ? "text-[#F05600]" 
                              : "text-gray-500"
                        }`}>
                          {course.status === "completed" 
                            ? "Completed" 
                            : course.status === "in-progress" 
                              ? "In Progress" 
                              : "Locked"}
                        </span>
                      </div>
                      <div className="w-full bg-[#4C4C4C33] rounded-full h-1">
                        <div 
                          className={`h-1 rounded-full ${
                            course.status === "completed" 
                              ? "bg-green-500" 
                              : "bg-[#F05600]"
                          }`} 
                          style={{ width: `${course.progress}%` }} 
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

