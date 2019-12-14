import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выпучить: PerfectVerb = {
  name: Word('выпучить', 1),
  singular1stPerson: Word('выпучу', 1),
  singular2ndPerson: Word('выпучишь', 1),
  singular3rdPerson: Word('выпучит', 1),
  plural1stPerson: Word('выпучим', 1),
  plural2ndPerson: Word('выпучите', 1),
  plural3rdPerson: Word('выпучат', 1),
  masculinePast: Word('выпучил', 1),
  femininePast: Word('выпучила', 1),
  neuterPast: Word('выпучило', 1),
  pluralPast: Word('выпучили', 1),
  imperativeInformal: Word('выпучи', 1),
  imperativeFormal: Word('выпучьте', 1),
  imperfect: [],
};

perfectVerbs.set(выпучить.name.text, выпучить);

export { выпучить };