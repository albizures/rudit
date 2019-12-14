import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переэкзаменовать: PerfectVerb = {
  name: Word('переэкзаменовать', 13),
  singular1stPerson: Word('переэкзаменую', 11),
  singular2ndPerson: Word('переэкзаменуешь', 11),
  singular3rdPerson: Word('переэкзаменует', 11),
  plural1stPerson: Word('переэкзаменуем', 11),
  plural2ndPerson: Word('переэкзаменуете', 11),
  plural3rdPerson: Word('переэкзаменуют', 11),
  masculinePast: Word('переэкзаменовал', 13),
  femininePast: Word('переэкзаменовала', 13),
  neuterPast: Word('переэкзаменовало', 13),
  pluralPast: Word('переэкзаменовали', 13),
  imperativeInformal: Word('переэкзаменуй', 11),
  imperativeFormal: Word('переэкзаменуйте', 11),
  imperfect: [],
};

perfectVerbs.set(переэкзаменовать.name.text, переэкзаменовать);

export { переэкзаменовать };