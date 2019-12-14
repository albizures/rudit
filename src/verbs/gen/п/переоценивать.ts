import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переоценивать: PerfectVerb = {
  name: Word('переоценивать', 6),
  singular1stPerson: Word('переоцениваю', 6),
  singular2ndPerson: Word('переоцениваешь', 6),
  singular3rdPerson: Word('переоценивает', 6),
  plural1stPerson: Word('переоцениваем', 6),
  plural2ndPerson: Word('переоцениваете', 6),
  plural3rdPerson: Word('переоценивают', 6),
  masculinePast: Word('переоценивал', 6),
  femininePast: Word('переоценивала', 6),
  neuterPast: Word('переоценивало', 6),
  pluralPast: Word('переоценивали', 6),
  imperativeInformal: Word('переоценивай', 6),
  imperativeFormal: Word('переоценивайте', 6),
  imperfect: [],
};

perfectVerbs.set(переоценивать.name.text, переоценивать);

export { переоценивать };