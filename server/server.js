import express from "express";
import cors from "cors";
import nodemailer from "nodemailer";

const app = express();

// CORS настройки для фронтенда на 5173
app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());

// Тестовый маршрут
app.get("/test", (req, res) => {
  res.json({
    message: "Сервер работает!",
    timestamp: new Date().toISOString()
  });
});

// Основной маршрут для формы
app.post("/send", async (req, res) => {
  const {
    name,
    phone,
    info
  } = req.body;

  console.log("📧 Получены данные:", {
    name,
    phone,
    info
  });

  // Валидация
  if (!name || !phone) {
    return res.status(400).json({
      success: false,
      error: "Поля 'Имя' и 'Телефон' обязательны"
    });
  }

  try {
    // Настройка транспортера для Яндекс.Почты
    const transporter = nodemailer.createTransport({
      host: "smtp.yandex.ru",
      port: 465,
      secure: true, // true для порта 465
      auth: {
        user: "king.charles.spaniel.gomel@yandex.by",
        pass: "pyydtgsbvumccxio", // пароль приложения
      },
    });

    // Проверяем подключение к SMTP
    console.log("🔗 Проверяем подключение к SMTP...");
    await transporter.verify();
    console.log("✅ SMTP подключение успешно");

    // Настройки письма
    const mailOptions = {
      from: '"Cavaliers Belarus" <king.charles.spaniel.gomel@yandex.by>',
      to: "king.charles.spaniel.gomel@yandex.by", // Куда отправлять заявки
      subject: "🚀 Новая заявка с сайта Cavaliers Belarus",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #8C0303, #a10505); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">Новая заявка с сайта</h1>
          </div>
          
          <div style="padding: 20px; background: #f9f9f9;">
            <h2 style="color: #8C0303;">Данные клиента:</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: white; font-weight: bold; width: 150px;">Имя:</td>
                <td style="padding: 10px; border: 1px solid #ddd; background: white;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: white; font-weight: bold;">Телефон:</td>
                <td style="padding: 10px; border: 1px solid #ddd; background: white;">
                  <a href="tel:${phone}" style="color: #8C0303; text-decoration: none;">${phone}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px; border: 1px solid #ddd; background: white; font-weight: bold;">Доп. информация:</td>
                <td style="padding: 10px; border: 1px solid #ddd; background: white;">${info || "Не указана"}</td>
              </tr>
            </table>
          </div>
          
          <div style="padding: 15px; background: #e9e9e9; text-align: center; font-size: 12px; color: #666;">
            <p>Заявка отправлена с сайта <a href="http://cavaliers-belarus.by" style="color: #8C0303;">Cavaliers Belarus</a></p>
            <p>Время получения: ${new Date().toLocaleString('ru-RU')}</p>
          </div>
        </div>
      `,
    };

    console.log("📤 Отправляем письмо...");
    const result = await transporter.sendMail(mailOptions);
    console.log("✅ Письмо отправлено успешно. ID:", result.messageId);

    res.status(200).json({
      success: true,
      message: "Сообщение отправлено успешно! Мы свяжемся с вами в ближайшее время.",
      messageId: result.messageId
    });

  } catch (error) {
    console.error("❌ Ошибка при отправке:", error);

    let errorMessage = "Ошибка при отправке сообщения";
    let userMessage = "Произошла ошибка при отправке формы. Пожалуйста, попробуйте еще раз или свяжитесь с нами по телефону.";

    if (error.code === 'EAUTH') {
      errorMessage = "Ошибка аутентификации в почтовом сервисе";
      userMessage = "Ошибка настройки почтового сервиса. Пожалуйста, свяжитесь с нами по телефону.";
    } else if (error.code === 'ECONNECTION') {
      errorMessage = "Ошибка подключения к почтовому серверу";
      userMessage = "Проблемы с подключением. Пожалуйста, проверьте интернет-соединение и попробуйте еще раз.";
    } else if (error.code === 'ESOCKET') {
      errorMessage = "Ошибка сетевого соединения";
      userMessage = "Проблемы с сетью. Пожалуйста, попробуйте еще раз позже.";
    }

    res.status(500).json({
      success: false,
      error: userMessage,
      debug: errorMessage
    });
  }
});

// Дополнительный тестовый endpoint для формы
app.post("/test-form", (req, res) => {
  console.log("🧪 Тестовые данные:", req.body);

  res.status(200).json({
    success: true,
    message: "Тестовое сообщение получено! Форма работает корректно.",
    receivedData: req.body,
    timestamp: new Date().toISOString()
  });
});

// Запуск сервера на порту 3001
app.listen(3001, () => {
  console.log("✅ Сервер запущен на порту 3001");
  console.log("📍 Тест сервера: http://localhost:3001/test");
  console.log("📍 Фронтенд: http://localhost:5173");
  console.log("📍 Форма отправляет запросы на: http://localhost:3001/send");
});