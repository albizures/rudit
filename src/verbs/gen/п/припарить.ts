import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припарить: PerfectVerb = {
  name: Word('припарить', 4),
  singular1stPerson: Word('припарю', 4),
  singular2ndPerson: Word('припаришь', 4),
  singular3rdPerson: Word('припарит', 4),
  plural1stPerson: Word('припарим', 4),
  plural2ndPerson: Word('припарите', 4),
  plural3rdPerson: Word('припарят', 4),
  masculinePast: Word('припарил', 4),
  femininePast: Word('припарила', 4),
  neuterPast: Word('припарило', 4),
  pluralPast: Word('припарили', 4),
  imperativeInformal: Word('припарь', 4),
  imperativeFormal: Word('припарьте', 4),
  imperfect: [],
};

perfectVerbs.set(припарить.name.text, припарить);

export { припарить };