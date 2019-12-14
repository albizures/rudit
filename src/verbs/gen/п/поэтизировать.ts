import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поэтизировать: PerfectVerb = {
  name: Word('поэтизировать', 6),
  singular1stPerson: Word('поэтизирую', 6),
  singular2ndPerson: Word('поэтизируешь', 6),
  singular3rdPerson: Word('поэтизирует', 6),
  plural1stPerson: Word('поэтизируем', 6),
  plural2ndPerson: Word('поэтизируете', 6),
  plural3rdPerson: Word('поэтизируют', 6),
  masculinePast: Word('поэтизировал', 6),
  femininePast: Word('поэтизировала', 6),
  neuterPast: Word('поэтизировало', 6),
  pluralPast: Word('поэтизировали', 6),
  imperativeInformal: Word('поэтизируй', 6),
  imperativeFormal: Word('поэтизируйте', 6),
  imperfect: [],
};

perfectVerbs.set(поэтизировать.name.text, поэтизировать);

export { поэтизировать };