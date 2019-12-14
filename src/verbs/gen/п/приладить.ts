import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приладить: PerfectVerb = {
  name: Word('приладить', 4),
  singular1stPerson: Word('прилажу', 4),
  singular2ndPerson: Word('приладишь', 4),
  singular3rdPerson: Word('приладит', 4),
  plural1stPerson: Word('приладим', 4),
  plural2ndPerson: Word('приладите', 4),
  plural3rdPerson: Word('приладят', 4),
  masculinePast: Word('приладил', 4),
  femininePast: Word('приладила', 4),
  neuterPast: Word('приладило', 4),
  pluralPast: Word('приладили', 4),
  imperativeInformal: Word('приладь', 4),
  imperativeFormal: Word('приладьте', 4),
  imperfect: [],
};

perfectVerbs.set(приладить.name.text, приладить);

export { приладить };