import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const записать: PerfectVerb = {
  name: Word('записать', 5),
  singular1stPerson: Word('запишу', 5),
  singular2ndPerson: Word('запишешь', 3),
  singular3rdPerson: Word('запишет', 3),
  plural1stPerson: Word('запишем', 3),
  plural2ndPerson: Word('запишете', 3),
  plural3rdPerson: Word('запишут', 3),
  masculinePast: Word('записал', 5),
  femininePast: Word('записала', 5),
  neuterPast: Word('записало', 5),
  pluralPast: Word('записали', 5),
  imperativeInformal: Word('запиши', 5),
  imperativeFormal: Word('запишите', 5),
  imperfect: ['записывать'],
};

perfectVerbs.set(записать.name.text, записать);

export { записать };