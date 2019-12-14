import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переименовывать: PerfectVerb = {
  name: Word('переименовывать', 8),
  singular1stPerson: Word('переименовываю', 8),
  singular2ndPerson: Word('переименовываешь', 8),
  singular3rdPerson: Word('переименовывает', 8),
  plural1stPerson: Word('переименовываем', 8),
  plural2ndPerson: Word('переименовываете', 8),
  plural3rdPerson: Word('переименовывают', 8),
  masculinePast: Word('переименовывал', 8),
  femininePast: Word('переименовывала', 8),
  neuterPast: Word('переименовывало', 8),
  pluralPast: Word('переименовывали', 8),
  imperativeInformal: Word('переименовывай', 8),
  imperativeFormal: Word('переименовывайте', 8),
  imperfect: [],
};

perfectVerbs.set(переименовывать.name.text, переименовывать);

export { переименовывать };