import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const озорничать: PerfectVerb = {
  name: Word('озорничать', 7),
  singular1stPerson: Word('озорничаю', 7),
  singular2ndPerson: Word('озорничаешь', 7),
  singular3rdPerson: Word('озорничает', 7),
  plural1stPerson: Word('озорничаем', 7),
  plural2ndPerson: Word('озорничаете', 7),
  plural3rdPerson: Word('озорничают', 7),
  masculinePast: Word('озорничал', 7),
  femininePast: Word('озорничала', 7),
  neuterPast: Word('озорничало', 7),
  pluralPast: Word('озорничали', 7),
  imperativeInformal: Word('озорничай', 7),
  imperativeFormal: Word('озорничайте', 7),
  imperfect: [],
};

perfectVerbs.set(озорничать.name.text, озорничать);

export { озорничать };