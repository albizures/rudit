import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прилизать: PerfectVerb = {
  name: Word('прилизать', 6),
  singular1stPerson: Word('прилижу', 6),
  singular2ndPerson: Word('прилижешь', 4),
  singular3rdPerson: Word('прилижет', 4),
  plural1stPerson: Word('прилижем', 4),
  plural2ndPerson: Word('прилижете', 4),
  plural3rdPerson: Word('прилижут', 4),
  masculinePast: Word('прилизал', 6),
  femininePast: Word('прилизала', 6),
  neuterPast: Word('прилизало', 6),
  pluralPast: Word('прилизали', 6),
  imperativeInformal: Word('прилижи', 6),
  imperativeFormal: Word('прилижите', 6),
  imperfect: [],
};

perfectVerbs.set(прилизать.name.text, прилизать);

export { прилизать };