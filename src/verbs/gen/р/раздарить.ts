import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздарить: PerfectVerb = {
  name: Word('раздарить', 6),
  singular1stPerson: Word('раздарю', 6),
  singular2ndPerson: Word('раздаришь', 4),
  singular3rdPerson: Word('раздарит', 4),
  plural1stPerson: Word('раздарим', 4),
  plural2ndPerson: Word('раздарите', 4),
  plural3rdPerson: Word('раздарят', 4),
  masculinePast: Word('раздарил', 6),
  femininePast: Word('раздарила', 6),
  neuterPast: Word('раздарило', 6),
  pluralPast: Word('раздарили', 6),
  imperativeInformal: Word('раздари', 6),
  imperativeFormal: Word('раздарите', 6),
  imperfect: [],
};

perfectVerbs.set(раздарить.name.text, раздарить);

export { раздарить };