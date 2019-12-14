import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прихлёбывать: PerfectVerb = {
  name: Word('прихлёбывать', 9),
  singular1stPerson: Word('прихлёбываю', 9),
  singular2ndPerson: Word('прихлёбываешь', 9),
  singular3rdPerson: Word('прихлёбывает', 9),
  plural1stPerson: Word('прихлёбываем', 9),
  plural2ndPerson: Word('прихлёбываете', 9),
  plural3rdPerson: Word('прихлёбывают', 9),
  masculinePast: Word('прихлёбывал', 9),
  femininePast: Word('прихлёбывала', 9),
  neuterPast: Word('прихлёбывало', 9),
  pluralPast: Word('прихлёбывали', 9),
  imperativeInformal: Word('прихлёбывай', 9),
  imperativeFormal: Word('прихлёбывайте', 9),
  imperfect: [],
};

perfectVerbs.set(прихлёбывать.name.text, прихлёбывать);

export { прихлёбывать };