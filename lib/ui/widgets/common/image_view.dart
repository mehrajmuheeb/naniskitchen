import 'package:flutter/material.dart';

class ImageView extends StatelessWidget {
  final String path;
  final bool fromNetwork;
  final double? width;
  final double? height;
  final BoxFit? fit;

  const ImageView(
      {super.key,
      required this.path,
      this.fromNetwork = false,
      this.width,
      this.height,
      this.fit});

  @override
  Widget build(BuildContext context) {
    return fromNetwork
        ? Image.network(
            path,
            width: width,
            height: height,
            fit: fit,
          )
        : Image.asset(
            "assets/images/$path",
            width: width,
            height: height,
            fit: fit,
          );
  }
}
