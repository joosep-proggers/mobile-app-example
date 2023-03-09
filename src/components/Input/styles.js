import { StyleSheet } from "react-native";
import { colors } from "../../utils/colors";

export const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  inputContainer: {
    borderWidth: 1,
    borderColor: colors.gray,
    borderRadius: 14,
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    width: "100%",
    flex: 1,
  },
  label: {
    marginBottom: 8,
    color: colors.blue,
    fontWeight: "500",
  },
  eye: {
    marginRight: 16,
  },
  arrow: {
    width: 16,
    height: 12,
    marginHorizontal: 16,
  },
  placeholder: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    flex: 1,
    color: colors.lightGray
  },
  modalWrapper: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  modalContent: {
    backgroundColor: colors.white,
    borderRadius: 8,
    padding: 16
  },
  optionTitle: {
    color: colors.black,
    marginBottom: 16,
    fontSize: 16
  },
  optionText: {
    color: colors.black,
    paddingVertical: 4,
    fontSize: 15
  },
  selectedOption: {
    color: colors.blue,
    fontWeight: 'bold'
  }
});
