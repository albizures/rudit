import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смежить: PerfectVerb = {
  name: Word('смежить', 4),
  singular1stPerson: Word('смежу', 4),
  singular2ndPerson: Word('смежишь', 4),
  singular3rdPerson: Word('смежит', 4),
  plural1stPerson: Word('смежим', 4),
  plural2ndPerson: Word('смежите', 4),
  plural3rdPerson: Word('смежат', 4),
  masculinePast: Word('смежил', 4),
  femininePast: Word('смежила', 4),
  neuterPast: Word('смежило', 4),
  pluralPast: Word('смежили', 4),
  imperativeInformal: Word('смежи', 4),
  imperativeFormal: Word('смежите', 4),
  imperfect: [],
};

perfectVerbs.set(смежить.name.text, смежить);

export { смежить };