import 'package:flutter_test/flutter_test.dart';
import 'package:nanis_kitchen_web/app/app.locator.dart';

import '../helpers/test_helpers.dart';

void main() {
  group('AppBarWebModel Tests -', () {
    setUp(() => registerServices());
    tearDown(() => locator.reset());
  });
}
