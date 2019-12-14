import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прочитывать: PerfectVerb = {
  name: Word('прочитывать', 4),
  singular1stPerson: Word('прочитываю', 4),
  singular2ndPerson: Word('прочитываешь', 4),
  singular3rdPerson: Word('прочитывает', 4),
  plural1stPerson: Word('прочитываем', 4),
  plural2ndPerson: Word('прочитываете', 4),
  plural3rdPerson: Word('прочитывают', 4),
  masculinePast: Word('прочитывал', 4),
  femininePast: Word('прочитывала', 4),
  neuterPast: Word('прочитывало', 4),
  pluralPast: Word('прочитывали', 4),
  imperativeInformal: Word('прочитывай', 4),
  imperativeFormal: Word('прочитывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прочитывать.name.text, прочитывать);

export { прочитывать };