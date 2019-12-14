import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихлёбывать: PerfectVerb = {
  name: Word('прихлёбывать', 5),
  singular1stPerson: Word('прихлёбываю', 5),
  singular2ndPerson: Word('прихлёбываешь', 5),
  singular3rdPerson: Word('прихлёбывает', 5),
  plural1stPerson: Word('прихлёбываем', 5),
  plural2ndPerson: Word('прихлёбываете', 5),
  plural3rdPerson: Word('прихлёбывают', 5),
  masculinePast: Word('прихлёбывал', 5),
  femininePast: Word('прихлёбывала', 5),
  neuterPast: Word('прихлёбывало', 5),
  pluralPast: Word('прихлёбывали', 5),
  imperativeInformal: Word('прихлёбывай', 5),
  imperativeFormal: Word('прихлёбывайте', 5),
  imperfect: [],
};

perfectVerbs.set(прихлёбывать.name.text, прихлёбывать);

export { прихлёбывать };