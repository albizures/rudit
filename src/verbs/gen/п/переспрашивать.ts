import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переспрашивать: PerfectVerb = {
  name: Word('переспрашивать', 7),
  singular1stPerson: Word('переспрашиваю', 7),
  singular2ndPerson: Word('переспрашиваешь', 7),
  singular3rdPerson: Word('переспрашивает', 7),
  plural1stPerson: Word('переспрашиваем', 7),
  plural2ndPerson: Word('переспрашиваете', 7),
  plural3rdPerson: Word('переспрашивают', 7),
  masculinePast: Word('переспрашивал', 7),
  femininePast: Word('переспрашивала', 7),
  neuterPast: Word('переспрашивало', 7),
  pluralPast: Word('переспрашивали', 7),
  imperativeInformal: Word('переспрашивай', 7),
  imperativeFormal: Word('переспрашивайте', 7),
  imperfect: [],
};

perfectVerbs.set(переспрашивать.name.text, переспрашивать);

export { переспрашивать };