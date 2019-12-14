import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навёрстывать: PerfectVerb = {
  name: Word('навёрстывать', 3),
  singular1stPerson: Word('навёрстываю', 3),
  singular2ndPerson: Word('навёрстываешь', 3),
  singular3rdPerson: Word('навёрстывает', 3),
  plural1stPerson: Word('навёрстываем', 3),
  plural2ndPerson: Word('навёрстываете', 3),
  plural3rdPerson: Word('навёрстывают', 3),
  masculinePast: Word('навёрстывал', 3),
  femininePast: Word('навёрстывала', 3),
  neuterPast: Word('навёрстывало', 3),
  pluralPast: Word('навёрстывали', 3),
  imperativeInformal: Word('навёрстывай', 3),
  imperativeFormal: Word('навёрстывайте', 3),
  imperfect: [],
};

perfectVerbs.set(навёрстывать.name.text, навёрстывать);

export { навёрстывать };