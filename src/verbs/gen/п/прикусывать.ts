import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прикусывать: PerfectVerb = {
  name: Word('прикусывать', 4),
  singular1stPerson: Word('прикусываю', 4),
  singular2ndPerson: Word('прикусываешь', 4),
  singular3rdPerson: Word('прикусывает', 4),
  plural1stPerson: Word('прикусываем', 4),
  plural2ndPerson: Word('прикусываете', 4),
  plural3rdPerson: Word('прикусывают', 4),
  masculinePast: Word('прикусывал', 4),
  femininePast: Word('прикусывала', 4),
  neuterPast: Word('прикусывало', 4),
  pluralPast: Word('прикусывали', 4),
  imperativeInformal: Word('прикусывай', 4),
  imperativeFormal: Word('прикусывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прикусывать.name.text, прикусывать);

export { прикусывать };