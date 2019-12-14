import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переуступать: PerfectVerb = {
  name: Word('переуступать', 9),
  singular1stPerson: Word('переуступаю', 9),
  singular2ndPerson: Word('переуступаешь', 9),
  singular3rdPerson: Word('переуступает', 9),
  plural1stPerson: Word('переуступаем', 9),
  plural2ndPerson: Word('переуступаете', 9),
  plural3rdPerson: Word('переуступают', 9),
  masculinePast: Word('переуступал', 9),
  femininePast: Word('переуступала', 9),
  neuterPast: Word('переуступало', 9),
  pluralPast: Word('переуступали', 9),
  imperativeInformal: Word('переуступай', 9),
  imperativeFormal: Word('переуступайте', 9),
  imperfect: [],
};

perfectVerbs.set(переуступать.name.text, переуступать);

export { переуступать };