import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикалывать: PerfectVerb = {
  name: Word('прикалывать', 4),
  singular1stPerson: Word('прикалываю', 4),
  singular2ndPerson: Word('прикалываешь', 4),
  singular3rdPerson: Word('прикалывает', 4),
  plural1stPerson: Word('прикалываем', 4),
  plural2ndPerson: Word('прикалываете', 4),
  plural3rdPerson: Word('прикалывают', 4),
  masculinePast: Word('прикалывал', 4),
  femininePast: Word('прикалывала', 4),
  neuterPast: Word('прикалывало', 4),
  pluralPast: Word('прикалывали', 4),
  imperativeInformal: Word('прикалывай', 4),
  imperativeFormal: Word('прикалывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прикалывать.name.text, прикалывать);

export { прикалывать };