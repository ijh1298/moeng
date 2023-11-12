let placeObjectList = [];
const elementList = document.querySelector("#leftSection ul");
// 예제: Fetch API를 사용하여 데이터 받아오기
fetch('/moeng/main')
    .then(response => response.json())
    .then(data => {
        // 받아온 데이터를 처리하는 로직 작성
        // alert();
        placeObjectList = data;
        if(placeObjectList.length==0) return;
        placeObjectList.forEach((item) => {
            console.log(item);
            const newLister = document.createElement("li");
            const newButton = document.createElement("button");
            newLister.innerText = `Address: ${item.address}, Name: ${item.name}, Time: ${item.timezone}, Capacity: ${item.capacity}, Minimum Order: ${item.minimum} `;
            newLister.appendChild(newButton);
            newButton.innerText = "✅";
            newButton.value = item.name;
            newButton.addEventListener("click", (event) => {
                document.querySelector("#senderInput").value = event.target.value;
                document.querySelector("#senderInput").parentElement.submit();
            });
            elementList.appendChild(newLister);
        });
    })
    .catch(error => console.error('Error:', error));