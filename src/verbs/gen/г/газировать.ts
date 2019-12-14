import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const газировать: PerfectVerb = {
  name: Word('газировать', 3),
  singular1stPerson: Word('газирую', 3),
  singular2ndPerson: Word('газируешь', 3),
  singular3rdPerson: Word('газирует', 3),
  plural1stPerson: Word('газируем', 3),
  plural2ndPerson: Word('газируете', 3),
  plural3rdPerson: Word('газируют', 3),
  masculinePast: Word('газировал', 3),
  femininePast: Word('газировала', 3),
  neuterPast: Word('газировало', 3),
  pluralPast: Word('газировали', 3),
  imperativeInformal: Word('газируй', 3),
  imperativeFormal: Word('газируйте', 3),
  imperfect: [],
};

perfectVerbs.set(газировать.name.text, газировать);

export { газировать };