import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отремонтировать: PerfectVerb = {
  name: Word('отремонтировать', 8),
  singular1stPerson: Word('отремонтирую', 8),
  singular2ndPerson: Word('отремонтируешь', 8),
  singular3rdPerson: Word('отремонтирует', 8),
  plural1stPerson: Word('отремонтируем', 8),
  plural2ndPerson: Word('отремонтируете', 8),
  plural3rdPerson: Word('отремонтируют', 8),
  masculinePast: Word('отремонтировал', 8),
  femininePast: Word('отремонтировала', 8),
  neuterPast: Word('отремонтировало', 8),
  pluralPast: Word('отремонтировали', 8),
  imperativeInformal: Word('отремонтируй', 8),
  imperativeFormal: Word('отремонтируйте', 8),
  imperfect: [],
};

perfectVerbs.set(отремонтировать.name.text, отремонтировать);

export { отремонтировать };