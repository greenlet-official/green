
// Open pack -> generate green -> save to Firestore -> display

async function openPack(packName) {
  const user = auth.currentUser;
  if (!user) {
    alert("Please sign in first.");
    return;
  }

  const greens = ["Leaflet", "Sprout", "Mossling", "Bloomlet", "Vinetip"];
  const reward = greens[Math.floor(Math.random() * greens.length)];

  await db
    .collection("users")
    .doc(user.uid)
    .set(
      { greens: { [packName]: firebase.firestore.FieldValue.arrayUnion(reward) } },
      { merge: true }
    );

  document.getElementById("result").innerText =
    "You unlocked: " + reward;
}
