
auth.onAuthStateChanged(async (user) => {
  if (!user) return;

  const docRef = db.collection("users").doc(user.uid);
  const snap = await docRef.get();

  if (snap.exists) {
    const data = snap.data();
    const count = data.greens
      ? Object.values(data.greens).flat().length
      : 0;

    document.getElementById("greensCount").innerText = count;
  }
});
