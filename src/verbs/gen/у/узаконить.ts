import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const узаконить: PerfectVerb = {
  name: Word('узаконить', 4),
  singular1stPerson: Word('узаконю', 4),
  singular2ndPerson: Word('узаконишь', 4),
  singular3rdPerson: Word('узаконит', 4),
  plural1stPerson: Word('узаконим', 4),
  plural2ndPerson: Word('узаконите', 4),
  plural3rdPerson: Word('узаконят', 4),
  masculinePast: Word('узаконил', 4),
  femininePast: Word('узаконила', 4),
  neuterPast: Word('узаконило', 4),
  pluralPast: Word('узаконили', 4),
  imperativeInformal: Word('узаконь', 4),
  imperativeFormal: Word('узаконьте', 4),
  imperfect: [],
};

perfectVerbs.set(узаконить.name.text, узаконить);

export { узаконить };