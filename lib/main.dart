import 'package:flutter/material.dart';
import 'package:nanis_kitchen_web/ui/common/app_colors.dart';
import 'package:responsive_builder/responsive_builder.dart';
import 'package:nanis_kitchen_web/app/app.bottomsheets.dart';
import 'package:nanis_kitchen_web/app/app.dialogs.dart';
import 'package:nanis_kitchen_web/app/app.locator.dart';
import 'package:nanis_kitchen_web/app/app.router.dart';
import 'package:url_strategy/url_strategy.dart';
import 'package:flutter_animate/flutter_animate.dart';

Future<void> main() async {
  WidgetsFlutterBinding.ensureInitialized();
  setPathUrlStrategy();
  await setupLocator(stackedRouter: stackedRouter);
  setupDialogUi();
  setupBottomSheetUi();
  runApp(const MainApp());
}

class MainApp extends StatelessWidget {
  const MainApp({super.key});

  @override
  Widget build(BuildContext context) {
    return ResponsiveApp(
      builder: (_) => MaterialApp.router(
        color: Colors.white,
        routerDelegate: stackedRouter.delegate(),
        routeInformationParser: stackedRouter.defaultRouteParser(),
      ),
    ).animate().fadeIn(
          delay: const Duration(milliseconds: 50),
          duration: const Duration(milliseconds: 400),
        );
  }
}
