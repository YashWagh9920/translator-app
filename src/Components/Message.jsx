import React from 'react'
import copy from '../assets/images/clipboard-fill.png'

function Message({messages}) {

  const copyText = (input) => {
    // let text = e.target.parentElement.parentElement.children[0].innerText;
    navigator.clipboard.writeText(input);
  }


  return (
//     <div>
//     {messages.map((msg, index) => (
//      <div key={index} className="bg-black/30 p-6 rounded-lg shadow-xl mb-6 border border-cyan-400/20 backdrop-blur-sm">
//        <div className="grid grid-cols-2 gap-4">
//          <div className="bg-cyan-950/50 p-4 rounded-lg border border-cyan-400/30 backdrop-blur-sm">
//            <div className="font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent mb-2">
//              Spoken Message:
//            </div>
//           <div className='flex justify-between items-center flex-row'>
//           <div className="text-cyan-100">{msg.sourceText}</div>
//           <button onClick={()=> copyText(msg.sourceText)}><img src={`${copy}`} alt="" /></button>
//           </div>
//          </div>
         
//          <div className="bg-blue-950/50 p-4 rounded-lg border border-blue-400/30 backdrop-blur-sm">
//            <div className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent mb-2">
//              Translated Message:
//            </div>
//           <div className='flex justify-between items-center flex-row'>
//           <div className="text-blue-100">{msg.translatedText}</div>
//           <button onClick={()=> copyText(msg.translatedText)}><img src={`${copy}`} alt="" /></button>
//           </div>
//          </div>
//        </div>
//      </div>
//    ))}
//  </div>

<div className={`bg-black/40 p-6 rounded-lg shadow-xl border border-emerald-400/20 backdrop-blur-sm ${messages.length > 0 ? "block" : "hidden"}`}>
        {messages.map((msg, index) => (
          <div key={index} className="bg-black/30 p-6 rounded-lg shadow-xl mb-6 border border-emerald-400/20 backdrop-blur-sm">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-green-950/50 p-4 rounded-lg border border-emerald-400/30 backdrop-blur-sm">
                <div className="font-bold bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent mb-2">
                  Spoken Message:
                </div>
                <div className='flex justify-between items-center'>
                  <div className="text-green-100">{msg.sourceText}</div>
                  <button onClick={() => copyText(msg.sourceText)}><img src={`${copy}`} alt="" /></button>
                </div>
              </div>
              <div className="bg-emerald-950/50 p-4 rounded-lg border border-emerald-400/30 backdrop-blur-sm">
                <div className="font-bold bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent mb-2">
                  Translated Message:
                </div>
                <div className='flex justify-between items-center'>
                  <div className="text-emerald-100">{msg.translatedText}</div>
                  <button onClick={() => copyText(msg.translatedText)}><img src={`${copy}`} alt="" /></button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
  )
}

export default Message