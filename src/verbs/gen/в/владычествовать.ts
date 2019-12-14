import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const владычествовать: PerfectVerb = {
  name: Word('владычествовать', 4),
  singular1stPerson: Word('владычествую', 4),
  singular2ndPerson: Word('владычествуешь', 4),
  singular3rdPerson: Word('владычествует', 4),
  plural1stPerson: Word('владычествуем', 4),
  plural2ndPerson: Word('владычествуете', 4),
  plural3rdPerson: Word('владычествуют', 4),
  masculinePast: Word('владычествовал', 4),
  femininePast: Word('владычествовала', 4),
  neuterPast: Word('владычествовало', 4),
  pluralPast: Word('владычествовали', 4),
  imperativeInformal: Word('владычествуй', 4),
  imperativeFormal: Word('владычествуйте', 4),
  imperfect: [],
};

perfectVerbs.set(владычествовать.name.text, владычествовать);

export { владычествовать };