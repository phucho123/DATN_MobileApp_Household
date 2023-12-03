import { StyleSheet } from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    paddingVertical: 20,
  },
  infoGroup: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 12,
    gap: 4,
  },
  avatar: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: "#0F9D58",
    borderRadius: 999,
  },
  wrapper: {
    paddingHorizontal: 12,
    zIndex: 12,
  },
  infoItem: {
    fontSize: 24,
    color: "#0F9D58",
    fontWeight: "bold",
  },
  fullName: {
    fontWeight: "normal",
  },
  section: {
    marginVertical: 4,
  },
  heading: {
    backgroundColor: "#DFEAFF",
    width: "50%",
    borderRadius: 8,
    marginBottom: 8,
    flexDirection: "row",
    alignItems: "center",
    gap: 2,
    marginVertical: 8,
  },
  iconWrapper: {
    backgroundColor: "#C8DBFF",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    padding: 4,
  },
  headingText: {
    color: "#4285F4",
    fontSize: 18,
    fontWeight: "bold",
  },
  flowRateGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
  },
  flowRateItem: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#294B83",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    gap: 8,
    width: "40%",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 3,
    elevation: 5,
  },
  flowRateTitle: {
    fontSize: 16,
    fontWeight: "300",
  },
  flowRateValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F4B400",
  },
  flowRateUnit: {
    fontSize: 16,
    fontWeight: "300",
  },
  waterMeterGroup: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 12,
    marginTop: 20,
  },
  waterMeterItem: {
    backgroundColor: "#FFF",
    borderWidth: 1,
    borderColor: "#294B83",
    borderRadius: 12,
    padding: 12,
    alignItems: "center",
    gap: 8,
    width: 160,
    position: "relative",
    marginTop: 4,
  },
  waterMeterTitle: {
    fontSize: 16,
    color: "#DB4437",
    backgroundColor: "#BEFBC8",
    fontWeight: "500",
    position: "absolute",
    width: "100%",
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    height: 40,
    paddingHorizontal: 4,
    top: -20,
    left: 12,
  },
  waterMeterBox: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
  },
  waterMeterValue: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#F4B400",
  },
  waterMeterUnit: {
    fontSize: 16,
    fontWeight: "300",
  },
});
