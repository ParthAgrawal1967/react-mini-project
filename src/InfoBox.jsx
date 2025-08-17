import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SunnyIcon from '@mui/icons-material/Sunny';
import "./InfoBox.css";

export default function InfoBox({ info }) {
  const HOT_URL =
    "https://images.unsplash.com/photo-1524594081293-190a2fe0baae?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0";
  const COLD_URL =
    "https://images.unsplash.com/photo-1612208695882-02f2322b7fee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0";
  const RAIN_URL =
    "https://images.unsplash.com/photo-1635823288719-93f2c8ac7f3f?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0";

  // Pick image
  const backgroundImg =
    info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL;

  // Pick icon
  const weatherIcon =
    info.humidity > 80 ? (
      <ThunderstormIcon />
    ) : info.temp > 15 ? (
      <SunnyIcon />
    ) : (
      <AcUnitIcon />
    );

  return (
    <div className="InfoBox">
      <div className="cardContainer">
        <Card
          sx={{
            maxWidth: 345,
            height: 300,
            position: "relative",
            backgroundImage: `url(${backgroundImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            color: "white",
            borderRadius: 2,
            boxShadow: 3,
          }}
        >
          {/* Dark overlay for readability */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(0,0,0,0.4)",
              borderRadius: "inherit",
            }}
          ></div>

          <CardContent
            sx={{
              position: "relative", // ensures text stays above overlay
              zIndex: 1,
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {info.city} {weatherIcon}
            </Typography>
            <Typography
              variant="body2"
              component={"span"}
              sx={{ display: "block", lineHeight: 1.6 }}
            >
              <p>Temperature = {info.temp}&deg;C</p>
              <p>Humidity = {info.humidity}</p>
              <p>Temp Min = {info.tempMin}&deg;C</p>
              <p>Temp Max = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <i>{info.weather}</i> and feels
                like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
