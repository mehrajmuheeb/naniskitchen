import 'package:flutter/material.dart';
import 'package:nanis_kitchen_web/ui/common/app_colors.dart';

class RoundArrowWidget extends StatelessWidget {
  final Color bgColor;
  final Color arrowColor;
  final bool backArrow;
  final Function onClick;

  const RoundArrowWidget(
      {super.key,
      this.bgColor = primaryColor,
      this.arrowColor = Colors.black,
      required this.backArrow,
      required this.onClick});

  @override
  Widget build(BuildContext context) {
    return Container(
      decoration: BoxDecoration(shape: BoxShape.circle, color: bgColor),
      child: FloatingActionButton.small(
        backgroundColor: bgColor,
        shape: const RoundedRectangleBorder(
            borderRadius: BorderRadius.all(Radius.circular(20))),
        onPressed: () {
          onClick();
        },
        child: Center(
          child: Padding(
            padding: const EdgeInsets.all(8.0),
            child: Icon(
              backArrow
                  ? Icons.arrow_back_ios_new_rounded
                  : Icons.arrow_forward_ios_rounded,
              size: 16,
              color: arrowColor,
            ),
          ),
        ),
      ),
    );
  }
}
