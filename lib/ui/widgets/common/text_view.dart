import 'dart:ui';

import 'package:flutter/cupertino.dart';
import 'package:flutter/material.dart';
import 'package:flutter/painting.dart';
import 'package:nanis_kitchen_web/ui/common/app_colors.dart';

class TextView extends StatelessWidget {
  final String text;
  final Color color;
  final double size;
  final TextAlign? textAlign;
  final FontWeight weight;

  const TextView({
    super.key,
    required this.text,
    this.color = textPrimaryColor,
    this.size = 16,
    this.weight = FontWeight.w400, this.textAlign,
  });

  @override
  Widget build(BuildContext context) {
    return Text(
      text,
      textAlign: textAlign,
      style: TextStyle(
        fontSize: size,
        color: color,
        fontWeight: weight,
      ),
    );
  }
}
