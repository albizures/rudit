import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взбунтовать: PerfectVerb = {
  name: Word('взбунтовать', 8),
  singular1stPerson: Word('взбунтую', 6),
  singular2ndPerson: Word('взбунтуешь', 6),
  singular3rdPerson: Word('взбунтует', 6),
  plural1stPerson: Word('взбунтуем', 6),
  plural2ndPerson: Word('взбунтуете', 6),
  plural3rdPerson: Word('взбунтуют', 6),
  masculinePast: Word('взбунтовал', 8),
  femininePast: Word('взбунтовала', 8),
  neuterPast: Word('взбунтовало', 8),
  pluralPast: Word('взбунтовали', 8),
  imperativeInformal: Word('взбунтуй', 6),
  imperativeFormal: Word('взбунтуйте', 6),
  imperfect: [],
};

perfectVerbs.set(взбунтовать.name.text, взбунтовать);

export { взбунтовать };