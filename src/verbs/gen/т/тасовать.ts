import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const тасовать: PerfectVerb = {
  name: Word('тасовать', 5),
  singular1stPerson: Word('тасую', 3),
  singular2ndPerson: Word('тасуешь', 3),
  singular3rdPerson: Word('тасует', 3),
  plural1stPerson: Word('тасуем', 3),
  plural2ndPerson: Word('тасуете', 3),
  plural3rdPerson: Word('тасуют', 3),
  masculinePast: Word('тасовал', 5),
  femininePast: Word('тасовала', 5),
  neuterPast: Word('тасовало', 5),
  pluralPast: Word('тасовали', 5),
  imperativeInformal: Word('тасуй', 3),
  imperativeFormal: Word('тасуйте', 3),
  imperfect: ['перетасовать'],
};

perfectVerbs.set(тасовать.name.text, тасовать);

export { тасовать };