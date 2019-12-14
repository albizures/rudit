import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсахарить: PerfectVerb = {
  name: Word('подсахарить', 4),
  singular1stPerson: Word('подсахарю', 4),
  singular2ndPerson: Word('подсахаришь', 4),
  singular3rdPerson: Word('подсахарит', 4),
  plural1stPerson: Word('подсахарим', 4),
  plural2ndPerson: Word('подсахарите', 4),
  plural3rdPerson: Word('подсахарят', 4),
  masculinePast: Word('подсахарил', 4),
  femininePast: Word('подсахарила', 4),
  neuterPast: Word('подсахарило', 4),
  pluralPast: Word('подсахарили', 4),
  imperativeInformal: Word('подсахари', 4),
  imperativeFormal: Word('подсахарьте', 4),
  imperfect: [],
};

perfectVerbs.set(подсахарить.name.text, подсахарить);

export { подсахарить };