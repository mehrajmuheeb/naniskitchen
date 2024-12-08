import 'package:flutter/material.dart';
import 'package:gap/gap.dart';
import 'package:nanis_kitchen_web/ui/common/app_colors.dart';
import 'package:nanis_kitchen_web/ui/common/app_images.dart';
import 'package:nanis_kitchen_web/ui/common/app_strings.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/image_view.dart';
import 'package:nanis_kitchen_web/ui/widgets/common/text_view.dart';

class BannerSection extends StatelessWidget {
  const BannerSection({super.key});

  @override
  Widget build(BuildContext context) {
    return SizedBox(
      height: MediaQuery.sizeOf(context).height,
      child: Stack(
        children: [
          Align(
            alignment: Alignment.center,
            child: Opacity(
              opacity: 0.5,
              child: ImageView(
                path: AppImages.imgDashboard,
                height: MediaQuery.sizeOf(context).height,
              ),
            ),
          ),
          Align(
            alignment: Alignment.center,
            child: Column(
              mainAxisSize: MainAxisSize.min,
              children: [
                const TextView(
                  text: bannerTitle,
                  weight: FontWeight.w700,
                  size: 50,
                  textAlign: TextAlign.center,
                ),
                const TextView(
                  text: bannerSubTitle,
                  size: 14,
                  color: textSecondaryColor,
                  textAlign: TextAlign.center,
                ),
                const Gap(20),
                Row(
                  mainAxisAlignment: MainAxisAlignment.center,
                  children: [
                    MaterialButton(
                        shape: const RoundedRectangleBorder(
                            borderRadius: BorderRadius.all(Radius.circular(5))),
                        color: primaryColor,
                        onPressed: () {},
                        child: const Padding(
                          padding: EdgeInsets.symmetric(horizontal: 16.0),
                          child: TextView(
                            text: "Order Now",
                            size: 12,
                            color: Colors.white,
                          ),
                        )),
                    SizedBox(width: 10,),
                    MaterialButton(
                        shape: const RoundedRectangleBorder(
                            borderRadius: BorderRadius.all(Radius.circular(5))),
                        color: Colors.black,
                        onPressed: () {},
                        child: const Padding(
                          padding: EdgeInsets.symmetric(horizontal: 16.0),
                          child: TextView(
                            text: "See menus",
                            size: 12,
                            color: Colors.white,
                          ),
                        ))
                  ],
                )
              ],
            ),
          )
        ],
      ),
    );
  }
}
