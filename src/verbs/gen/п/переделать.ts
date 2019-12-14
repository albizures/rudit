import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переделать: PerfectVerb = {
  name: Word('переделать', 5),
  singular1stPerson: Word('переделаю', 5),
  singular2ndPerson: Word('переделаешь', 5),
  singular3rdPerson: Word('переделает', 5),
  plural1stPerson: Word('переделаем', 5),
  plural2ndPerson: Word('переделаете', 5),
  plural3rdPerson: Word('переделают', 5),
  masculinePast: Word('переделал', 5),
  femininePast: Word('переделала', 5),
  neuterPast: Word('переделало', 5),
  pluralPast: Word('переделали', 5),
  imperativeInformal: Word('переделай', 5),
  imperativeFormal: Word('переделайте', 5),
  imperfect: ['переделывать'],
};

perfectVerbs.set(переделать.name.text, переделать);

export { переделать };