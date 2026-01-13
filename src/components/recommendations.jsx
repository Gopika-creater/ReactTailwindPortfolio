import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  query,
  limit,
  orderBy
} from "firebase/firestore";

/* ---------------- Firebase Config ---------------- */
const firebaseConfig = {
  apiKey: "AIzaSyAi1nEjvdzRDwJ1SmkL5V0McKZNfGuFjbI",
  authDomain: "portfoliorecommendations-101cc.firebaseapp.com",
  projectId: "portfoliorecommendations-101cc",
  storageBucket: "portfoliorecommendations-101cc.firebasestorage.app",
  messagingSenderId: "659145837054",
  appId: "1:659145837054:web:81c944c0171b9fe154d8af",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

/* ------------------------------------------------ */

export default function Recommendations() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [showPopup, setShowPopup] = useState(false);

  async function loadRecommendations() {
  const q = query(
    collection(db, "recommendations"),
   
    limit(20)
  );

  const snap = await getDocs(q);

  const data = snap.docs.map(doc => ({
            
    ...doc.data()
  }));

  setRecommendations(data);
}


  useEffect(() => {
    loadRecommendations();
  }, []);

  async function submitRecommendation(e) {
    e.preventDefault();
    if (!name || !message) return;

    await addDoc(collection(db, "recommendations"), {
      Name: name,
      recommendations: message,
     
    });

    setName("");
    setMessage("");
    setShowPopup(true);
    loadRecommendations();
  }

  return (
    <section id="recommendations" className="py-20 bg-gradient-to-br from-lavender-50 to-purple-100 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-4xl font-bold text-purple-900 text-center mb-10">
          Recommendations
        </h2>

        {/* Horizontal Scroll Cards */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-6 px-6 snap-x snap-mandatory scrollbar-purple">
            {recommendations.map(rec => (
            <motion.div
              key={rec.id}
             whileHover={{ scale: 1.05 }}
            className="min-w-[300px]  snap-center bg-white p-6 rounded-xl shadow-lg"
             >
            <p className="italic text-gray-700 mb-4">
              “{rec.recommendations}”
            </p>
            <p className="text-right text-purple-700 font-semibold">
             — {rec.Name}
            </p>
            </motion.div>
         ))}
  </div>
</div>

       

        {/* Form */}
        <form
          onSubmit={submitRecommendation}
          className="mt-12 bg-white max-w-xl mx-auto p-8 rounded-xl shadow-lg space-y-4"
        >
          <h3 className="text-2xl font-bold text-purple-900 text-center mb-4">
            Leave a Recommendation
          </h3>

          <input
            type="text"
            placeholder="Your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full border-2 border-purple-200 rounded-lg p-3 focus:border-purple-600 outline-none"
            required
          />

          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            rows={4}
            className="w-full border-2 border-purple-200 rounded-lg p-3 focus:border-purple-600 outline-none resize-none"
            required
          />

          <button
            type="submit"
            className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition"
          >
            Submit Recommendation
          </button>
        </form>

        {/* Success Popup */}
        {showPopup && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white p-8 rounded-xl shadow-xl text-center">
              <h3 className="text-2xl font-bold text-purple-800 mb-4">
                Thank you! 💜
              </h3>
              <p className="text-gray-600 mb-6">
                Your recommendation has been submitted.
              </p>
              <button
                onClick={() => setShowPopup(false)}
                className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
              >
                Close
              </button>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
