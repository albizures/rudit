import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помучить: PerfectVerb = {
  name: Word('помучить', 3),
  singular1stPerson: Word('помучу', 3),
  singular2ndPerson: Word('помучишь', 3),
  singular3rdPerson: Word('помучит', 3),
  plural1stPerson: Word('помучим', 3),
  plural2ndPerson: Word('помучите', 3),
  plural3rdPerson: Word('помучат', 3),
  masculinePast: Word('помучил', 3),
  femininePast: Word('помучила', 3),
  neuterPast: Word('помучило', 3),
  pluralPast: Word('помучили', 3),
  imperativeInformal: Word('помучь', 3),
  imperativeFormal: Word('помучьте', 3),
  imperfect: [],
};

perfectVerbs.set(помучить.name.text, помучить);

export { помучить };