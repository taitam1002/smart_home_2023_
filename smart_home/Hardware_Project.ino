#include <WiFi.h>
#include <HTTPClient.h>
#include <DHT.h>
#include <Adafruit_Sensor.h>

const char* ssid = "DS";
const char* password = "spdtlanphuong";
const char* FIREBASE_HOST = "project-3e089-default-rtdb.firebaseio.com";
const char* FIREBASE_AUTH = "db	AIzaSyDVwXmkxB6XgqhYuaLM5QQSTIxpernH3pQ";
const char* databaseURL = "https://project-3e089-default-rtdb.firebaseio.com/Sensor.json";
const char* url = "https://project-3e089-default-rtdb.firebaseio.com/Livingroom/Device.json";

#define DHT_PIN 15   // chân kết nối cảm biến DHT11
#define MQ_PIN 35
#define LDR_PIN 34

#define FAN_PIN 16
#define LIGHT_PIN 18
#define AIR_PIN 3
#define CUR_PIN 13

DHT dht(DHT_PIN, DHT11);

void setup(){

  Serial.begin(115200);
  WiFi.begin(ssid, password);
  Serial.println("Connected to WiFi");
  dht.begin();
  pinMode(LIGHT_PIN, OUTPUT);
  pinMode(FAN_PIN, OUTPUT);
  pinMode(AIR_PIN, OUTPUT);
  pinMode(CUR_PIN, OUTPUT);
  pinMode(MQ_PIN, INPUT);
  pinMode(LDR_PIN, INPUT);
}

void loop() {
  delay(1000); // đợi cảm biến ổn định
  HTTPClient http;
  http.begin(url);

  int httpResponseCode = http.GET();
  if (httpResponseCode == 200) {
    String response = http.getString();
    Serial.println("Firebase data: " + response);
    int Fan = -1;
    int Light = -1;
    int Air = -1;
    int Cur = -1;
    // Cắt và chuyển dữ liệu từ chuỗi thành số nguyên
    if (response.indexOf("\"Fan\":") != -1) {
        Fan = response.substring(response.indexOf("\"Fan\":") + 7, response.indexOf(",", response.indexOf("\"Fan\":"))).toInt();
      }
    if (response.indexOf("\"Light\":") != -1) {
        Light = response.substring(response.indexOf("\"Light\":") + 9, response.indexOf(",", response.indexOf("\"Light\":"))).toInt();
      }
    if (response.indexOf("\"Air\":") != -1) {
        Air = response.substring(response.indexOf("\"Air\":") + 7, response.indexOf(",", response.indexOf("\"Air\":"))).toInt();
      }
    if (response.indexOf("\"Curtain\":") != -1) {
        Cur = response.substring(response.indexOf("\"Curtain\":") + 11, response.indexOf(",", response.indexOf("\"Curtain\":"))).toInt();
      }
    // kiểm tra trạng thái thiết bị và bật nếu bằng 1, tắt nếu bằng 0
    if (Fan == 1) 
    {
      digitalWrite(FAN_PIN, HIGH); 
    } else {
      digitalWrite(FAN_PIN, LOW); 
    }
    if (Light == 1) {
      digitalWrite(LIGHT_PIN, HIGH); 
    } else {
      digitalWrite(LIGHT_PIN, LOW); 
    }
    if (Air == 1) {
      digitalWrite(AIR_PIN, HIGH); 
    } else {
      digitalWrite(AIR_PIN, LOW); 
    }
    analogWrite(CUR_PIN, Cur);
  } else {
    Serial.print("HTTP request failed, error code: ");
    Serial.println(httpResponseCode);
  }
  http.end();

  // đọc nhiệt độ và độ ẩm
  
  float humidity = dht.readHumidity();
  float temperature = dht.readTemperature();
  
  int percentage_air = map(analogRead(MQ_PIN), 0, 4095, 0, 100);
  int air_val = 100 - percentage_air;

  int percentage_light = map(analogRead(LDR_PIN), 0, 4095, 0, 100);
  int light_val = 100 - percentage_light;

  if (!isnan(humidity) && !isnan(temperature)) {
    Serial.printf("Humidity: %.2f%%, Temperature: %.2f°C\n", humidity, temperature);
  }   else {
    Serial.println("Failed to read from DHT sensor");
  }

  Serial.printf("Air: %d\n", air_val);
  Serial.printf("Light: %d\n",light_val);
  // Send data to Firebase
  String data = String("{\"temperature\": ") + String(temperature) + 
  String(", \"humidity\": ") + String(humidity) + 
  String(",\"air\": ") + String(air_val)+  
  String(",\"light\": ") + String(light_val) +String("}");
  
  HTTPClient httpput;
  httpput.begin(databaseURL);
  httpput.addHeader("Content-Type", "application/json");
  httpput.addHeader("Authorization", FIREBASE_AUTH);

  int ResponseCode = httpput.PUT(data);

  if (ResponseCode == 200) {
    Serial.print("Data sent successfully, response code: ");
    Serial.println(ResponseCode);
  } else {
    Serial.print("Error sending data, response code: ");
    Serial.println(ResponseCode);
  }
  httpput.end();
    
  delay(500); // Gửi dữ liệu mỗi 0.5 giây
}
