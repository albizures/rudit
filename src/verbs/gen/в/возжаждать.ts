import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const возжаждать: PerfectVerb = {
  name: Word('возжаждать', 4),
  singular1stPerson: Word('возжажду', 4),
  singular2ndPerson: Word('возжаждешь', 4),
  singular3rdPerson: Word('возжаждет', 4),
  plural1stPerson: Word('возжаждем', 4),
  plural2ndPerson: Word('возжаждете', 4),
  plural3rdPerson: Word('возжаждут', 4),
  masculinePast: Word('возжаждал', 4),
  femininePast: Word('возжаждала', 4),
  neuterPast: Word('возжаждало', 4),
  pluralPast: Word('возжаждали', 4),
  imperativeInformal: Word('возжажди', 4),
  imperativeFormal: Word('возжаждите', 4),
  imperfect: [],
};

perfectVerbs.set(возжаждать.name.text, возжаждать);

export { возжаждать };