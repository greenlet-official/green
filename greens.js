
async function openPack(pack) {
  const user = auth.currentUser;
  if(!user){ alert("Sign in first"); return; }

  const list = ["Sprout","Leafling","Buddo","Emeraldip","Mossbit"];
  const drop = list[Math.floor(Math.random()*list.length)];

  await db.collection("users").doc(user.uid)
    .set({greens:{[pack]: firebase.firestore.FieldValue.arrayUnion(drop)}}, {merge:true});

  document.getElementById("result").innerText = "Unlocked: " + drop;
}
