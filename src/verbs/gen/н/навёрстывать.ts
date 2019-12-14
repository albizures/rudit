import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const навёрстывать: PerfectVerb = {
  name: Word('навёрстывать', 1),
  singular1stPerson: Word('навёрстываю', 1),
  singular2ndPerson: Word('навёрстываешь', 1),
  singular3rdPerson: Word('навёрстывает', 1),
  plural1stPerson: Word('навёрстываем', 1),
  plural2ndPerson: Word('навёрстываете', 1),
  plural3rdPerson: Word('навёрстывают', 1),
  masculinePast: Word('навёрстывал', 1),
  femininePast: Word('навёрстывала', 1),
  neuterPast: Word('навёрстывало', 1),
  pluralPast: Word('навёрстывали', 1),
  imperativeInformal: Word('навёрстывай', 1),
  imperativeFormal: Word('навёрстывайте', 1),
  imperfect: [],
};

perfectVerbs.set(навёрстывать.name.text, навёрстывать);

export { навёрстывать };