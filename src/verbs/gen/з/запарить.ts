import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запарить: PerfectVerb = {
  name: Word('запарить', 3),
  singular1stPerson: Word('запарю', 3),
  singular2ndPerson: Word('запаришь', 3),
  singular3rdPerson: Word('запарит', 3),
  plural1stPerson: Word('запарим', 3),
  plural2ndPerson: Word('запарите', 3),
  plural3rdPerson: Word('запарят', 3),
  masculinePast: Word('запарил', 3),
  femininePast: Word('запарила', 3),
  neuterPast: Word('запарило', 3),
  pluralPast: Word('запарили', 3),
  imperativeInformal: Word('запарь', 3),
  imperativeFormal: Word('запарьте', 3),
  imperfect: [],
};

perfectVerbs.set(запарить.name.text, запарить);

export { запарить };