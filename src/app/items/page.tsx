import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export default function Products() {
  return (
    <>
      <div className="w-full my-20">
        <div className='grid grid-cols-1 text-center md:grid-cols-4 gap-5 px-6'>
          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/a.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className="font-extrabold text-xl tracking-widest mb-5">RanaRabees</h3>
            <Link href="/item1" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/b.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className="font-extrabold text-xl tracking-widest mb-5">RanaRabees</h3>
            <Link href="/item2" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/c.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className="font-extrabold text-xl tracking-widest mb-5">RanaRabees</h3>
            <Link href="/item3" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/d.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item4" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/e.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item5" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/f.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item6" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/g.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item7" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/h.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item8" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/i.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item9" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/j.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item10" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/k.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item11" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/l.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item12" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/m.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item13" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/n.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item14" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>

          <div className="item my-8 pb-2 hover:scale-110 transition-all aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
            <Image src="/o.jpg"
              width={600}
              height={800}
              alt="RanaRabees"
              className="w-[650px] h-[300px] object-cover object-center group text-center-hover:opacity-75"
            />
            <h3 className='font-extrabold text-xl tracking-widest mb-5'>RanaRabees</h3>
            <Link href="/item15" className="text-lg tracking-widest rounded-md bg-white px-3.5 py-2.5 font-bold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">Show Details <span aria-hidden="true">→</span></Link>
          </div>
        </div >
      </div >
    </>
  )
}