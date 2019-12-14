import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переседлать: PerfectVerb = {
  name: Word('переседлать', 8),
  singular1stPerson: Word('переседлаю', 8),
  singular2ndPerson: Word('переседлаешь', 8),
  singular3rdPerson: Word('переседлает', 8),
  plural1stPerson: Word('переседлаем', 8),
  plural2ndPerson: Word('переседлаете', 8),
  plural3rdPerson: Word('переседлают', 8),
  masculinePast: Word('переседлал', 8),
  femininePast: Word('переседлала', 8),
  neuterPast: Word('переседлало', 8),
  pluralPast: Word('переседлали', 8),
  imperativeInformal: Word('переседлай', 8),
  imperativeFormal: Word('переседлайте', 8),
  imperfect: [],
};

perfectVerbs.set(переседлать.name.text, переседлать);

export { переседлать };