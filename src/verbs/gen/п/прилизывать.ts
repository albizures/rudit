import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилизывать: PerfectVerb = {
  name: Word('прилизывать', 4),
  singular1stPerson: Word('прилизываю', 4),
  singular2ndPerson: Word('прилизываешь', 4),
  singular3rdPerson: Word('прилизывает', 4),
  plural1stPerson: Word('прилизываем', 4),
  plural2ndPerson: Word('прилизываете', 4),
  plural3rdPerson: Word('прилизывают', 4),
  masculinePast: Word('прилизывал', 4),
  femininePast: Word('прилизывала', 4),
  neuterPast: Word('прилизывало', 4),
  pluralPast: Word('прилизывали', 4),
  imperativeInformal: Word('прилизывай', 4),
  imperativeFormal: Word('прилизывайте', 4),
  imperfect: [],
};

perfectVerbs.set(прилизывать.name.text, прилизывать);

export { прилизывать };