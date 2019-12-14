import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const интимничать: PerfectVerb = {
  name: Word('интимничать', 3),
  singular1stPerson: Word('интимничаю', 3),
  singular2ndPerson: Word('интимничаешь', 3),
  singular3rdPerson: Word('интимничает', 3),
  plural1stPerson: Word('интимничаем', 3),
  plural2ndPerson: Word('интимничаете', 3),
  plural3rdPerson: Word('интимничают', 3),
  masculinePast: Word('интимничал', 3),
  femininePast: Word('интимничала', 3),
  neuterPast: Word('интимничало', 3),
  pluralPast: Word('интимничали', 3),
  imperativeInformal: Word('интимничай', 3),
  imperativeFormal: Word('интимничайте', 3),
  imperfect: [],
};

perfectVerbs.set(интимничать.name.text, интимничать);

export { интимничать };