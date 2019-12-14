import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сровнять: PerfectVerb = {
  name: Word('сровнять', 5),
  singular1stPerson: Word('сровняю', 5),
  singular2ndPerson: Word('сровняешь', 5),
  singular3rdPerson: Word('сровняет', 5),
  plural1stPerson: Word('сровняем', 5),
  plural2ndPerson: Word('сровняете', 5),
  plural3rdPerson: Word('сровняют', 5),
  masculinePast: Word('сровнял', 5),
  femininePast: Word('сровняла', 5),
  neuterPast: Word('сровняло', 5),
  pluralPast: Word('сровняли', 5),
  imperativeInformal: Word('сровняй', 5),
  imperativeFormal: Word('сровняйте', 5),
  imperfect: [],
};

perfectVerbs.set(сровнять.name.text, сровнять);

export { сровнять };