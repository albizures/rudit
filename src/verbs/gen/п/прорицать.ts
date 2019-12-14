import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прорицать: PerfectVerb = {
  name: Word('прорицать', 6),
  singular1stPerson: Word('прорицаю', 6),
  singular2ndPerson: Word('прорицаешь', 6),
  singular3rdPerson: Word('прорицает', 6),
  plural1stPerson: Word('прорицаем', 6),
  plural2ndPerson: Word('прорицаете', 6),
  plural3rdPerson: Word('прорицают', 6),
  masculinePast: Word('прорицал', 6),
  femininePast: Word('прорицала', 6),
  neuterPast: Word('прорицало', 6),
  pluralPast: Word('прорицали', 6),
  imperativeInformal: Word('прорицай', 6),
  imperativeFormal: Word('прорицайте', 6),
  imperfect: [],
};

perfectVerbs.set(прорицать.name.text, прорицать);

export { прорицать };