import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пополнять: PerfectVerb = {
  name: Word('пополнять', 6),
  singular1stPerson: Word('пополняю', 6),
  singular2ndPerson: Word('пополняешь', 6),
  singular3rdPerson: Word('пополняет', 6),
  plural1stPerson: Word('пополняем', 6),
  plural2ndPerson: Word('пополняете', 6),
  plural3rdPerson: Word('пополняют', 6),
  masculinePast: Word('пополнял', 6),
  femininePast: Word('пополняла', 6),
  neuterPast: Word('пополняло', 6),
  pluralPast: Word('пополняли', 6),
  imperativeInformal: Word('пополняй', 6),
  imperativeFormal: Word('пополняйте', 6),
  imperfect: [],
};

perfectVerbs.set(пополнять.name.text, пополнять);

export { пополнять };