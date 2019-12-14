import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отэкзаменовать: PerfectVerb = {
  name: Word('отэкзаменовать', 11),
  singular1stPerson: Word('отэкзаменую', 9),
  singular2ndPerson: Word('отэкзаменуешь', 9),
  singular3rdPerson: Word('отэкзаменует', 9),
  plural1stPerson: Word('отэкзаменуем', 9),
  plural2ndPerson: Word('отэкзаменуете', 9),
  plural3rdPerson: Word('отэкзаменуют', 9),
  masculinePast: Word('отэкзаменовал', 11),
  femininePast: Word('отэкзаменовала', 11),
  neuterPast: Word('отэкзаменовало', 11),
  pluralPast: Word('отэкзаменовали', 11),
  imperativeInformal: Word('отэкзаменуй', 9),
  imperativeFormal: Word('отэкзаменуйте', 9),
  imperfect: [],
};

perfectVerbs.set(отэкзаменовать.name.text, отэкзаменовать);

export { отэкзаменовать };