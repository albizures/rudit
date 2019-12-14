import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ангажировать: PerfectVerb = {
  name: Word('ангажировать', 5),
  singular1stPerson: Word('ангажирую', 5),
  singular2ndPerson: Word('ангажируешь', 5),
  singular3rdPerson: Word('ангажирует', 5),
  plural1stPerson: Word('ангажируем', 5),
  plural2ndPerson: Word('ангажируете', 5),
  plural3rdPerson: Word('ангажируют', 5),
  masculinePast: Word('ангажировал', 5),
  femininePast: Word('ангажировала', 5),
  neuterPast: Word('ангажировало', 5),
  pluralPast: Word('ангажировали', 5),
  imperativeInformal: Word('ангажируй', 5),
  imperativeFormal: Word('ангажируйте', 5),
  imperfect: [],
};

perfectVerbs.set(ангажировать.name.text, ангажировать);

export { ангажировать };