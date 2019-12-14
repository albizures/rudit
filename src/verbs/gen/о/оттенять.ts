import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const оттенять: PerfectVerb = {
  name: Word('оттенять', 5),
  singular1stPerson: Word('оттеняю', 5),
  singular2ndPerson: Word('оттеняешь', 5),
  singular3rdPerson: Word('оттеняет', 5),
  plural1stPerson: Word('оттеняем', 5),
  plural2ndPerson: Word('оттеняете', 5),
  plural3rdPerson: Word('оттеняют', 5),
  masculinePast: Word('оттенял', 5),
  femininePast: Word('оттеняла', 5),
  neuterPast: Word('оттеняло', 5),
  pluralPast: Word('оттеняли', 5),
  imperativeInformal: Word('оттеняй', 5),
  imperativeFormal: Word('оттеняйте', 5),
  imperfect: [],
};

perfectVerbs.set(оттенять.name.text, оттенять);

export { оттенять };