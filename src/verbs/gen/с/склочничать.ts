import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const склочничать: PerfectVerb = {
  name: Word('склочничать', 3),
  singular1stPerson: Word('склочничаю', 3),
  singular2ndPerson: Word('склочничаешь', 3),
  singular3rdPerson: Word('склочничает', 3),
  plural1stPerson: Word('склочничаем', 3),
  plural2ndPerson: Word('склочничаете', 3),
  plural3rdPerson: Word('склочничают', 3),
  masculinePast: Word('склочничал', 3),
  femininePast: Word('склочничала', 3),
  neuterPast: Word('склочничало', 3),
  pluralPast: Word('склочничали', 3),
  imperativeInformal: Word('склочничай', 3),
  imperativeFormal: Word('склочничайте', 3),
  imperfect: [],
};

perfectVerbs.set(склочничать.name.text, склочничать);

export { склочничать };