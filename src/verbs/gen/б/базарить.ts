import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const базарить: PerfectVerb = {
  name: Word('базарить', 3),
  singular1stPerson: Word('базарю', 3),
  singular2ndPerson: Word('базаришь', 3),
  singular3rdPerson: Word('базарит', 3),
  plural1stPerson: Word('базарим', 3),
  plural2ndPerson: Word('базарите', 3),
  plural3rdPerson: Word('базарят', 3),
  masculinePast: Word('базарил', 3),
  femininePast: Word('базарила', 3),
  neuterPast: Word('базарило', 3),
  pluralPast: Word('базарили', 3),
  imperativeInformal: Word('базарь', 3),
  imperativeFormal: Word('базарьте', 3),
  imperfect: [],
};

perfectVerbs.set(базарить.name.text, базарить);

export { базарить };