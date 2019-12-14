import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выучить: PerfectVerb = {
  name: Word('выучить', 1),
  singular1stPerson: Word('выучу', 1),
  singular2ndPerson: Word('выучишь', 1),
  singular3rdPerson: Word('выучит', 1),
  plural1stPerson: Word('выучим', 1),
  plural2ndPerson: Word('выучите', 1),
  plural3rdPerson: Word('выучат', 1),
  masculinePast: Word('выучил', 1),
  femininePast: Word('выучила', 1),
  neuterPast: Word('выучило', 1),
  pluralPast: Word('выучили', 1),
  imperativeInformal: Word('выучи', 1),
  imperativeFormal: Word('выучите', 1),
  imperfect: [],
};

perfectVerbs.set(выучить.name.text, выучить);

export { выучить };