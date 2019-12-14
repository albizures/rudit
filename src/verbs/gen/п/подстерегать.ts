import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подстерегать: PerfectVerb = {
  name: Word('подстерегать', 9),
  singular1stPerson: Word('подстерегаю', 9),
  singular2ndPerson: Word('подстерегаешь', 9),
  singular3rdPerson: Word('подстерегает', 9),
  plural1stPerson: Word('подстерегаем', 9),
  plural2ndPerson: Word('подстерегаете', 9),
  plural3rdPerson: Word('подстерегают', 9),
  masculinePast: Word('подстерегал', 9),
  femininePast: Word('подстерегала', 9),
  neuterPast: Word('подстерегало', 9),
  pluralPast: Word('подстерегали', 9),
  imperativeInformal: Word('подстерегай', 9),
  imperativeFormal: Word('подстерегайте', 9),
  imperfect: [],
};

perfectVerbs.set(подстерегать.name.text, подстерегать);

export { подстерегать };