import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const испарить: PerfectVerb = {
  name: Word('испарить', 5),
  singular1stPerson: Word('испарю', 5),
  singular2ndPerson: Word('испаришь', 5),
  singular3rdPerson: Word('испарит', 5),
  plural1stPerson: Word('испарим', 5),
  plural2ndPerson: Word('испарите', 5),
  plural3rdPerson: Word('испарят', 5),
  masculinePast: Word('испарил', 5),
  femininePast: Word('испарила', 5),
  neuterPast: Word('испарило', 5),
  pluralPast: Word('испарили', 5),
  imperativeInformal: Word('испари', 5),
  imperativeFormal: Word('испарите', 5),
  imperfect: [],
};

perfectVerbs.set(испарить.name.text, испарить);

export { испарить };