const jsonString = '{"name": "Сервиз София", "city": "София", "capacity": 50}';
const parsedData = JSON.parse(jsonString);
console.log(parsedData.name); // Сервиз София
// Функция за създаване на автомобил
async function createCar(carData) {
    const url = 'C:\\Users\\user\\OneDrive\\Работен плот\\car-management-frontend';

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(carData), // Преобразуваме carData в JSON string
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const result = await response.json();
        console.log('Car created successfully:', result);
        return result;
    } catch (error) {
        console.error('Error creating car:', error);
    }
}

// Данни за автомобила
const carData = {
    brand: "Toyota",
    model: "Corolla",
    year: 2020,
    workshops: [1, 2],
};

// Извикване на функцията
createCar(carData);