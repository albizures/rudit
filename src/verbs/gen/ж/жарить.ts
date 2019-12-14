import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жарить: PerfectVerb = {
  name: Word('жарить', 1),
  singular1stPerson: Word('жарю', 1),
  singular2ndPerson: Word('жаришь', 1),
  singular3rdPerson: Word('жарит', 1),
  plural1stPerson: Word('жарим', 1),
  plural2ndPerson: Word('жарите', 1),
  plural3rdPerson: Word('жарят', 1),
  masculinePast: Word('жарил', 1),
  femininePast: Word('жарила', 1),
  neuterPast: Word('жарило', 1),
  pluralPast: Word('жарили', 1),
  imperativeInformal: Word('жарь', 1),
  imperativeFormal: Word('жарьте', 1),
  imperfect: [],
};

perfectVerbs.set(жарить.name.text, жарить);

export { жарить };