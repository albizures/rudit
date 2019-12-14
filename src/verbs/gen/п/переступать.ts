import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переступать: PerfectVerb = {
  name: Word('переступать', 8),
  singular1stPerson: Word('переступаю', 8),
  singular2ndPerson: Word('переступаешь', 8),
  singular3rdPerson: Word('переступает', 8),
  plural1stPerson: Word('переступаем', 8),
  plural2ndPerson: Word('переступаете', 8),
  plural3rdPerson: Word('переступают', 8),
  masculinePast: Word('переступал', 8),
  femininePast: Word('переступала', 8),
  neuterPast: Word('переступало', 8),
  pluralPast: Word('переступали', 8),
  imperativeInformal: Word('переступай', 8),
  imperativeFormal: Word('переступайте', 8),
  imperfect: [],
};

perfectVerbs.set(переступать.name.text, переступать);

export { переступать };