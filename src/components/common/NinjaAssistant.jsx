import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send } from 'lucide-react';
import gsap from 'gsap';

export default function NinjaAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'assistant',
      text: 'Welcome to Coding Ninjas chat support. How can we help you?',
      options: ['Know about courses', 'Need help with something else']
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [inputMode, setInputMode] = useState(null); // 'phone' or null
  const [phoneError, setPhoneError] = useState('');

  const widgetRef = useRef(null);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      gsap.fromTo(widgetRef.current,
        { scale: 0.8, opacity: 0, y: 30, transformOrigin: 'bottom right' },
        { scale: 1, opacity: 1, y: 0, duration: 0.3, ease: 'back.out(1.5)' }
      );
    }
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const addMessage = (sender, text, options = null) => {
    setMessages((prev) => [...prev, { id: Date.now(), sender, text, options }]);
  };

  const handleOptionClick = (option) => {
    addMessage('user', option);

    if (option === 'Know about courses') {
      setTimeout(() => {
        addMessage('assistant', 'Please enter your contact number:');
        setInputMode('phone');
      }, 800);
    } else {
      setTimeout(() => {
        addMessage('assistant', 'Please visit our Contact page or call us at 1800-123-3598.');
      }, 800);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    if (inputMode === 'phone') {
      const cleanPhone = inputValue.replace(/[^0-9]/g, '');
      if (cleanPhone.length !== 10) {
        setPhoneError('Please enter correct number');
        addMessage('user', inputValue);
        setTimeout(() => {
          addMessage('assistant', 'Please enter correct 10-digit number.');
        }, 600);
        return;
      }
      setPhoneError('');
      addMessage('user', inputValue);
      setInputMode(null);
      setInputValue('');
      setTimeout(() => {
        addMessage('assistant', 'Thank you! Our career counselor will call you shortly.');
      }, 800);
    } else {
      addMessage('user', inputValue);
      setInputValue('');
      setTimeout(() => {
        addMessage('assistant', "I'm a virtual assistant. Let me connect you with our counselor. Please select 'Know about courses' to leave your contact number.");
      }, 800);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[9999] font-sans">
      {/* Floating Launcher Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="w-14 h-14 bg-brand-orange text-white rounded-full flex items-center justify-center shadow-[0_4px_20px_rgba(246,108,59,0.4)] hover:bg-brand-orange-hover hover:scale-105 transition-all cursor-pointer relative"
          aria-label="Open support chat"
        >
          <MessageSquare size={24} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-success border-2 border-surface-black rounded-full animate-ping" />
        </button>
      )}

      {/* Chat Window Panel */}
      {isOpen && (
        <div
          ref={widgetRef}
          className="w-[330px] sm:w-[350px] h-[450px] bg-surface-dark-2 border border-border-dark rounded-2xl shadow-2xl flex flex-col justify-between overflow-hidden"
        >
          {/* Header */}
          <div className="bg-surface-dark-3 border-b border-border-dark px-4 py-3 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-brand-orange/15 rounded-lg flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 40 40" fill="none">
                  <rect width="40" height="40" rx="8" fill="#F66C3B"/>
                  <path d="M12 15L18 20L12 25" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 25H28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                </svg>
              </div>
              <div>
                <h3 className="text-xs font-bold text-white">Ninja Assistant</h3>
                <span className="text-[9px] text-success font-semibold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-success rounded-full" /> Online
                </span>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-text-muted hover:text-white rounded-lg transition-colors cursor-pointer"
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 hide-scrollbar bg-surface-black/35">
            {messages.map((msg) => (
              <div key={msg.id} className="space-y-2">
                <div className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-3.5 py-2.5 rounded-2xl text-xs leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-brand-orange text-white rounded-tr-none'
                        : 'bg-surface-dark-3 border border-border-dark text-white rounded-tl-none'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>

                {/* Option Buttons */}
                {msg.options && (
                  <div className="flex flex-col gap-2 pl-2">
                    {msg.options.map((opt, i) => (
                      <button
                        key={i}
                        onClick={() => handleOptionClick(opt)}
                        className="self-start text-[11px] font-bold text-brand-orange bg-brand-orange/10 border border-brand-orange/20 px-3 py-2 rounded-full hover:bg-brand-orange/20 transition-colors text-left cursor-pointer"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Footer Input */}
          <form onSubmit={handleSubmit} className="p-3 border-t border-border-dark bg-surface-dark-3 flex gap-2">
            <input
              type={inputMode === 'phone' ? 'tel' : 'text'}
              placeholder={inputMode === 'phone' ? 'Enter phone number...' : 'Type your message...'}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 bg-surface-black border border-border-dark rounded-xl px-3 py-2.5 text-xs text-white placeholder-text-muted focus:outline-none focus:border-brand-orange transition-colors"
            />
            <button
              type="submit"
              className="w-10 h-10 bg-brand-orange text-white rounded-xl flex items-center justify-center hover:bg-brand-orange-hover active:scale-95 transition-all cursor-pointer"
              aria-label="Send message"
            >
              <Send size={14} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
