import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорисовывать: PerfectVerb = {
  name: Word('прорисовывать', 6),
  singular1stPerson: Word('прорисовываю', 6),
  singular2ndPerson: Word('прорисовываешь', 6),
  singular3rdPerson: Word('прорисовывает', 6),
  plural1stPerson: Word('прорисовываем', 6),
  plural2ndPerson: Word('прорисовываете', 6),
  plural3rdPerson: Word('прорисовывают', 6),
  masculinePast: Word('прорисовывал', 6),
  femininePast: Word('прорисовывала', 6),
  neuterPast: Word('прорисовывало', 6),
  pluralPast: Word('прорисовывали', 6),
  imperativeInformal: Word('прорисовывай', 6),
  imperativeFormal: Word('прорисовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(прорисовывать.name.text, прорисовывать);

export { прорисовывать };