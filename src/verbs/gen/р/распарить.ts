import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распарить: PerfectVerb = {
  name: Word('распарить', 4),
  singular1stPerson: Word('распарю', 4),
  singular2ndPerson: Word('распаришь', 4),
  singular3rdPerson: Word('распарит', 4),
  plural1stPerson: Word('распарим', 4),
  plural2ndPerson: Word('распарите', 4),
  plural3rdPerson: Word('распарят', 4),
  masculinePast: Word('распарил', 4),
  femininePast: Word('распарила', 4),
  neuterPast: Word('распарило', 4),
  pluralPast: Word('распарили', 4),
  imperativeInformal: Word('распарь', 4),
  imperativeFormal: Word('распарьте', 4),
  imperfect: [],
};

perfectVerbs.set(распарить.name.text, распарить);

export { распарить };