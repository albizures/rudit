import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откровенничать: PerfectVerb = {
  name: Word('откровенничать', 6),
  singular1stPerson: Word('откровенничаю', 6),
  singular2ndPerson: Word('откровенничаешь', 6),
  singular3rdPerson: Word('откровенничает', 6),
  plural1stPerson: Word('откровенничаем', 6),
  plural2ndPerson: Word('откровенничаете', 6),
  plural3rdPerson: Word('откровенничают', 6),
  masculinePast: Word('откровенничал', 6),
  femininePast: Word('откровенничала', 6),
  neuterPast: Word('откровенничало', 6),
  pluralPast: Word('откровенничали', 6),
  imperativeInformal: Word('откровенничай', 6),
  imperativeFormal: Word('откровенничайте', 6),
  imperfect: [],
};

perfectVerbs.set(откровенничать.name.text, откровенничать);

export { откровенничать };