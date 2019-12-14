import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переизбирать: PerfectVerb = {
  name: Word('переизбирать', 9),
  singular1stPerson: Word('переизбираю', 9),
  singular2ndPerson: Word('переизбираешь', 9),
  singular3rdPerson: Word('переизбирает', 9),
  plural1stPerson: Word('переизбираем', 9),
  plural2ndPerson: Word('переизбираете', 9),
  plural3rdPerson: Word('переизбирают', 9),
  masculinePast: Word('переизбирал', 9),
  femininePast: Word('переизбирала', 9),
  neuterPast: Word('переизбирало', 9),
  pluralPast: Word('переизбирали', 9),
  imperativeInformal: Word('переизбирай', 9),
  imperativeFormal: Word('переизбирайте', 9),
  imperfect: [],
};

perfectVerbs.set(переизбирать.name.text, переизбирать);

export { переизбирать };