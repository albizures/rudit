import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посрамлять: PerfectVerb = {
  name: Word('посрамлять', 7),
  singular1stPerson: Word('посрамляю', 7),
  singular2ndPerson: Word('посрамляешь', 7),
  singular3rdPerson: Word('посрамляет', 7),
  plural1stPerson: Word('посрамляем', 7),
  plural2ndPerson: Word('посрамляете', 7),
  plural3rdPerson: Word('посрамляют', 7),
  masculinePast: Word('посрамлял', 7),
  femininePast: Word('посрамляла', 7),
  neuterPast: Word('посрамляло', 7),
  pluralPast: Word('посрамляли', 7),
  imperativeInformal: Word('посрамляй', 7),
  imperativeFormal: Word('посрамляйте', 7),
  imperfect: [],
};

perfectVerbs.set(посрамлять.name.text, посрамлять);

export { посрамлять };