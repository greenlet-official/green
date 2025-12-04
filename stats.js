
auth.onAuthStateChanged(async u=>{
  if(!u) return;
  const snap = await db.collection("users").doc(u.uid).get();
  if(!snap.exists){ return; }
  const data = snap.data().greens || {};
  const n = Object.values(data).flat().length;
  document.getElementById("count").innerText = n;
});
