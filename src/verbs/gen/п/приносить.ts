import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приносить: PerfectVerb = {
  name: Word('приносить', 6),
  singular1stPerson: Word('приношу', 6),
  singular2ndPerson: Word('приносишь', 4),
  singular3rdPerson: Word('приносит', 4),
  plural1stPerson: Word('приносим', 4),
  plural2ndPerson: Word('приносите', 4),
  plural3rdPerson: Word('приносят', 4),
  masculinePast: Word('приносил', 6),
  femininePast: Word('приносила', 6),
  neuterPast: Word('приносило', 6),
  pluralPast: Word('приносили', 6),
  imperativeInformal: Word('приноси', 6),
  imperativeFormal: Word('приносите', 6),
  imperfect: ['принести'],
};

perfectVerbs.set(приносить.name.text, приносить);

export { приносить };