import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надарить: PerfectVerb = {
  name: Word('надарить', 5),
  singular1stPerson: Word('надарю', 5),
  singular2ndPerson: Word('надаришь', 3),
  singular3rdPerson: Word('надарит', 3),
  plural1stPerson: Word('надарим', 3),
  plural2ndPerson: Word('надарите', 3),
  plural3rdPerson: Word('надарят', 3),
  masculinePast: Word('надарил', 5),
  femininePast: Word('надарила', 5),
  neuterPast: Word('надарило', 5),
  pluralPast: Word('надарили', 5),
  imperativeInformal: Word('надари', 5),
  imperativeFormal: Word('надарите', 5),
  imperfect: [],
};

perfectVerbs.set(надарить.name.text, надарить);

export { надарить };