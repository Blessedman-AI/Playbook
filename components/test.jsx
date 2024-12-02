import Sidebar from '@/components/SidebarComponent';
import { MyTimeline, Timeline, TimelineItem } from '@/components/Timeline';
import TimelineHeader from '@/components/TimelineHeader';
import React from 'react';

const Content = () => {
  return (
    <div className="relative flex flex-col lg:h-screen ">
      {/* Sidebar */}
      <Sidebar
        href="/"
        category="Foundations"
        title="Rebuild your calendar for the life you want to live"
        tagName="Calendar"
        tagLink="/"
        authorName1="Chris Ho"
        authorLink1="/"
        authorName2="Sam Narval"
        authorLink2="/"
        overviewText="Your calendar is the canvas of your life, but many people let theirs fill up at odds with their true priorities. The best way to live more intentionally is to completely re-draw your schedule, at regular intervals. The key is rigorous self-reflection."
        resultText="Your EA will structure your time around your personal non-negotiables. My EA Sam understands my goals, and drafts my schedule accordingly every week, holding me accountable to my ideal self."
        className="lg:fixed lg:w-[420px] w-full h-full"
      />

      {/* Main Content */}
      <div className="flex-1 flex flex-col lg:ml-[420px] overflow-y-scroll">
        {/* Sticky Header */}
        <div className="sticky top-0 z-10 bg-white border-b border-gray-200">
          <TimelineHeader />
        </div>

        {/* Timeline Content */}
        <div className="px-10 pb-20 pt-10">
          <Timeline>
            <TimelineItem
              direction="left"
              title="Commit"
              duration="~3 hours"
              paragraph="Identify the weekly habits that will help you find fulfillment in each of your pillars"
              secondParagraph="Habits become your character, and making them the foundation of your calendar—exercising midday on Monday and Friday; meditating daily before breakfast; device-free time an hour before bed nightly—is more effective than setting untethered goals."
            />
            <TimelineItem
              direction="right"
              title="Commit"
              paragraph="Think about and write down your pillars—the immovable objects of your life."
              secondParagraph="Start with sleep, and layer on the other routines and goals—diet, relationships, exercise, mindfulness—that drive you and keep you fulfilled"
            />
            <TimelineItem
              direction="right"
              title="Draft"
              paragraph="Programs habits into calendar and distributes weekly priorities and commitments to maximize single-tasking and limit context switching"
              secondParagraph="Your EA will create Maker Blocks—dedicated hours for deep work—as containers for the work you need to get done most urgently"
            />
            <TimelineItem
              direction="right"
              title="Gatekeep"
              paragraph="Ensures your weekly priorities don't overtake your habits"
              secondParagraph="Your EA will prioritize tasks based on their urgency and importance. Over time, he or she will also learn to read your energy balance and reprioritize your calendar to help you spend more time in your flow state"
            />
            <TimelineItem
              direction="left"
              title="Feedback"
              duration="~1 hour"
              paragraph="Each week, review your calendar and assess progress toward your ideal schedule"
              secondParagraph="Be ruthless with your time. Give your EA voice-note feedback after meetings or commitments; if the item was a waste of time, you won't see it again"
            />
            <TimelineItem
              direction="right"
              title="Audit"
              paragraph="Schedules quarterly calendar performance review"
              secondParagraph="Your EA will flag any commitments you've been constantly rescheduling, and suggest modifications that better adhere to your ideal schedule"
            />
            <TimelineItem
              direction="right"
              title="Re-draft"
              paragraph="Constructs a new master calendar to match current habits, and inform weekly prioritisation of tasks and commitments"
              secondParagraph="All you have to do is reflect, once again, on what matters most to you "
            />
          </Timeline>
        </div>
      </div>
    </div>
  );
};

export default Content;
