import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const жучить: PerfectVerb = {
  name: Word('жучить', 1),
  singular1stPerson: Word('жучу', 1),
  singular2ndPerson: Word('жучишь', 1),
  singular3rdPerson: Word('жучит', 1),
  plural1stPerson: Word('жучим', 1),
  plural2ndPerson: Word('жучите', 1),
  plural3rdPerson: Word('жучат', 1),
  masculinePast: Word('жучил', 1),
  femininePast: Word('жучила', 1),
  neuterPast: Word('жучило', 1),
  pluralPast: Word('жучили', 1),
  imperativeInformal: Word('жучь', 1),
  imperativeFormal: Word('жучьте', 1),
  imperfect: [],
};

perfectVerbs.set(жучить.name.text, жучить);

export { жучить };