import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const организовать: PerfectVerb = {
  name: Word('организовать', 9),
  singular1stPerson: Word('организую', 7),
  singular2ndPerson: Word('организуешь', 7),
  singular3rdPerson: Word('организует', 7),
  plural1stPerson: Word('организуем', 7),
  plural2ndPerson: Word('организуете', 7),
  plural3rdPerson: Word('организуют', 7),
  masculinePast: Word('организовал', 9),
  femininePast: Word('организовала', 9),
  neuterPast: Word('организовало', 9),
  pluralPast: Word('организовали', 9),
  imperativeInformal: Word('организуй', 7),
  imperativeFormal: Word('организуйте', 7),
  imperfect: ['организовывать'],
};

perfectVerbs.set(организовать.name.text, организовать);

export { организовать };