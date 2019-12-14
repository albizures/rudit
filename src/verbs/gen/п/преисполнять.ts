import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const преисполнять: PerfectVerb = {
  name: Word('преисполнять', 9),
  singular1stPerson: Word('преисполняю', 9),
  singular2ndPerson: Word('преисполняешь', 9),
  singular3rdPerson: Word('преисполняет', 9),
  plural1stPerson: Word('преисполняем', 9),
  plural2ndPerson: Word('преисполняете', 9),
  plural3rdPerson: Word('преисполняют', 9),
  masculinePast: Word('преисполнял', 9),
  femininePast: Word('преисполняла', 9),
  neuterPast: Word('преисполняло', 9),
  pluralPast: Word('преисполняли', 9),
  imperativeInformal: Word('преисполняй', 9),
  imperativeFormal: Word('преисполняйте', 9),
  imperfect: [],
};

perfectVerbs.set(преисполнять.name.text, преисполнять);

export { преисполнять };