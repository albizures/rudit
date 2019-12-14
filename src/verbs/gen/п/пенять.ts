import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пенять: PerfectVerb = {
  name: Word('пенять', 3),
  singular1stPerson: Word('пеняю', 3),
  singular2ndPerson: Word('пеняешь', 3),
  singular3rdPerson: Word('пеняет', 3),
  plural1stPerson: Word('пеняем', 3),
  plural2ndPerson: Word('пеняете', 3),
  plural3rdPerson: Word('пеняют', 3),
  masculinePast: Word('пенял', 3),
  femininePast: Word('пеняла', 3),
  neuterPast: Word('пеняло', 3),
  pluralPast: Word('пеняли', 3),
  imperativeInformal: Word('пеняй', 3),
  imperativeFormal: Word('пеняйте', 3),
  imperfect: [],
};

perfectVerbs.set(пенять.name.text, пенять);

export { пенять };