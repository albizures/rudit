import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const идеализировать: PerfectVerb = {
  name: Word('идеализировать', 7),
  singular1stPerson: Word('идеализирую', 7),
  singular2ndPerson: Word('идеализируешь', 7),
  singular3rdPerson: Word('идеализирует', 7),
  plural1stPerson: Word('идеализируем', 7),
  plural2ndPerson: Word('идеализируете', 7),
  plural3rdPerson: Word('идеализируют', 7),
  masculinePast: Word('идеализировал', 7),
  femininePast: Word('идеализировала', 7),
  neuterPast: Word('идеализировало', 7),
  pluralPast: Word('идеализировали', 7),
  imperativeInformal: Word('идеализируй', 7),
  imperativeFormal: Word('идеализируйте', 7),
  imperfect: [],
};

perfectVerbs.set(идеализировать.name.text, идеализировать);

export { идеализировать };