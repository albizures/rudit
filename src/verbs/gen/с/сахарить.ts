import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сахарить: PerfectVerb = {
  name: Word('сахарить', 1),
  singular1stPerson: Word('сахарю', 1),
  singular2ndPerson: Word('сахаришь', 1),
  singular3rdPerson: Word('сахарит', 1),
  plural1stPerson: Word('сахарим', 1),
  plural2ndPerson: Word('сахарите', 1),
  plural3rdPerson: Word('сахарят', 1),
  masculinePast: Word('сахарил', 1),
  femininePast: Word('сахарила', 1),
  neuterPast: Word('сахарило', 1),
  pluralPast: Word('сахарили', 1),
  imperativeInformal: Word('сахари', 1),
  imperativeFormal: Word('сахарьте', 1),
  imperfect: [],
};

perfectVerbs.set(сахарить.name.text, сахарить);

export { сахарить };