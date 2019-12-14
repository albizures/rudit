import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переругать: PerfectVerb = {
  name: Word('переругать', 7),
  singular1stPerson: Word('переругаю', 7),
  singular2ndPerson: Word('переругаешь', 7),
  singular3rdPerson: Word('переругает', 7),
  plural1stPerson: Word('переругаем', 7),
  plural2ndPerson: Word('переругаете', 7),
  plural3rdPerson: Word('переругают', 7),
  masculinePast: Word('переругал', 7),
  femininePast: Word('переругала', 7),
  neuterPast: Word('переругало', 7),
  pluralPast: Word('переругали', 7),
  imperativeInformal: Word('переругай', 7),
  imperativeFormal: Word('переругайте', 7),
  imperfect: [],
};

perfectVerbs.set(переругать.name.text, переругать);

export { переругать };