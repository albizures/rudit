import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поучить: PerfectVerb = {
  name: Word('поучить', 4),
  singular1stPerson: Word('поучу', 4),
  singular2ndPerson: Word('поучишь', 2),
  singular3rdPerson: Word('поучит', 2),
  plural1stPerson: Word('поучим', 2),
  plural2ndPerson: Word('поучите', 2),
  plural3rdPerson: Word('поучат', 2),
  masculinePast: Word('поучил', 4),
  femininePast: Word('поучила', 4),
  neuterPast: Word('поучило', 4),
  pluralPast: Word('поучили', 4),
  imperativeInformal: Word('поучи', 4),
  imperativeFormal: Word('поучите', 4),
  imperfect: [],
};

perfectVerbs.set(поучить.name.text, поучить);

export { поучить };