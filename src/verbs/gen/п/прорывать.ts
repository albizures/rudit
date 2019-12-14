import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорывать: PerfectVerb = {
  name: Word('прорывать', 6),
  singular1stPerson: Word('прорываю', 6),
  singular2ndPerson: Word('прорываешь', 6),
  singular3rdPerson: Word('прорывает', 6),
  plural1stPerson: Word('прорываем', 6),
  plural2ndPerson: Word('прорываете', 6),
  plural3rdPerson: Word('прорывают', 6),
  masculinePast: Word('прорывал', 6),
  femininePast: Word('прорывала', 6),
  neuterPast: Word('прорывало', 6),
  pluralPast: Word('прорывали', 6),
  imperativeInformal: Word('прорывай', 6),
  imperativeFormal: Word('прорывайте', 6),
  imperfect: ['прорвать'],
};

perfectVerbs.set(прорывать.name.text, прорывать);

export { прорывать };