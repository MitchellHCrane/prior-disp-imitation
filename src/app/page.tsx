import { ArrowRightIcon } from "@heroicons/react/16/solid";

export default function Cart() {
  return (
    <main className="relative isolate bg-pdBlue/80">
      <video
        preload="auto"
        autoPlay
        loop
        muted
        className="absolute -z-10 h-full w-full object-cover"
        poster="https://prioritydispatch.widen.net/content/ggvgosonxk/webp/dotnethome.webp?position=c&amp;color=ffffffff&amp;quality=80&amp;u=wfnssn"
      >
        <source
          src="https://previews.us-east-1.widencdn.net/seeds/43288192/assets/asset-view/e/0/3/0/e0301b7d-4ab5-44e3-a516-87f2ba524b63/video_1080p/faststart.mp4?response-content-disposition=inline%3B%20filename%3D%22DotNet-Hero-Video-emd.mp4%22&Expires=1725349856&Signature=iK4pZlwS6HywGJp8CnddlRmquALis28XU2g9fOcF-wBBVspb9BBsRjnaOuC7AtIA0pVOM4vmcPYEQMW438zLLsERs~z6vOo~Cs-hw5jvQyrzqgZE8aWqeVRJXFgRmNSQEBx0kmWcA1BVZjjWpvySAptDYtw9Rg1ZmpfgNNx4-zShkCDCS7sQUV9Uj5RtQiYmDIdL~qVSgXw54uYmI05iazQ1kvFrJzPoKhB5OFvgHdl9QAHKizJFeCWALxh5Ln4Fx-0RFdpvPbiiBrSwg8GFuclQB3gTJ05IIlX~tskm8GqEBxdJ5Ps27agtMUsFuEM6TAD0UT3jK11ljpJofODZnA__&Key-Pair-Id=APKAJD5XONOBVWWOA65A"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>
      <div className="flex items-center text-white">
        <div className="mx-auto max-w-[67.5rem] w-[91.666667%]">
          <div className="py-24">
            <div className="col-span-2">
              <h1 className="text-white pb-6 text-5xl font-semibold uppercase leading-[44px]">
                Put A Proven System At The Start Of Your Response Chain
              </h1>
            </div>
            <div className="pb-14">
              <h2 className="text-2xl font-bold text-pdYellow">
                We make your Emergency Dispatch safe, efficient, and effective.
              </h2>
            </div>
            <div className="flex md:flex-row flex-col  justify-between pb-14">
              <a
                href=""
                className="mb-4 block max-w-fit rounded-[32px] bg-pdRed px-12 py-4 text-xl font-bold text-gray-50 xs:text-2xl md:mb-0"
              >
                <button>Schedule a Demo</button>
              </a>
              <a>
                <button className="line-normal group relative flex transform items-center  overflow-hidden rounded-[32px] border-[5px] border-pdYellow bg-transparent px-10 py-3 text-lg font-semibold text-pdYellow transition-transform ease-in-out hover:border-pdRed hover:text-pdRed">
                  <span className="mr-2">Register for a Course</span>
                  <span className="custom-transition-transform w-0 overflow-hidden transition-transform duration-300 ease-in-out group-hover:w-auto group-hover:transform-none group-hover:opacity-100">
                    <ArrowRightIcon className="size-4" />
                  </span>
                </button>
              </a>
            </div>
            <div className="relative mb-2 mt-0 flex items-center">
              <div className="flex-grow border-t border-pdGray"></div>
              <span className="mx-4 flex-shrink text-gray-400">
                <p className="text-base font-bold text-codeBlue-600">
                  See our solutions for:
                </p>
              </span>
              <div className="flex-grow border-t border-pdGray"></div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
