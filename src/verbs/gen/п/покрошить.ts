import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покрошить: PerfectVerb = {
  name: Word('покрошить', 6),
  singular1stPerson: Word('покрошу', 6),
  singular2ndPerson: Word('покрошишь', 4),
  singular3rdPerson: Word('покрошит', 4),
  plural1stPerson: Word('покрошим', 4),
  plural2ndPerson: Word('покрошите', 4),
  plural3rdPerson: Word('покрошат', 4),
  masculinePast: Word('покрошил', 6),
  femininePast: Word('покрошила', 6),
  neuterPast: Word('покрошило', 6),
  pluralPast: Word('покрошили', 6),
  imperativeInformal: Word('покроши', 6),
  imperativeFormal: Word('покрошите', 6),
  imperfect: [],
};

perfectVerbs.set(покрошить.name.text, покрошить);

export { покрошить };