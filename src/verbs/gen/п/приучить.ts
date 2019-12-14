import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приучить: PerfectVerb = {
  name: Word('приучить', 5),
  singular1stPerson: Word('приучу', 5),
  singular2ndPerson: Word('приучишь', 3),
  singular3rdPerson: Word('приучит', 3),
  plural1stPerson: Word('приучим', 3),
  plural2ndPerson: Word('приучите', 3),
  plural3rdPerson: Word('приучат', 3),
  masculinePast: Word('приучил', 5),
  femininePast: Word('приучила', 5),
  neuterPast: Word('приучило', 5),
  pluralPast: Word('приучили', 5),
  imperativeInformal: Word('приучи', 5),
  imperativeFormal: Word('приучите', 5),
  imperfect: [],
};

perfectVerbs.set(приучить.name.text, приучить);

export { приучить };