import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прищучить: PerfectVerb = {
  name: Word('прищучить', 4),
  singular1stPerson: Word('прищучу', 4),
  singular2ndPerson: Word('прищучишь', 4),
  singular3rdPerson: Word('прищучит', 4),
  plural1stPerson: Word('прищучим', 4),
  plural2ndPerson: Word('прищучите', 4),
  plural3rdPerson: Word('прищучат', 4),
  masculinePast: Word('прищучил', 4),
  femininePast: Word('прищучила', 4),
  neuterPast: Word('прищучило', 4),
  pluralPast: Word('прищучили', 4),
  imperativeInformal: Word('прищучь', 4),
  imperativeFormal: Word('прищучьте', 4),
  imperfect: [],
};

perfectVerbs.set(прищучить.name.text, прищучить);

export { прищучить };