import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сучить: PerfectVerb = {
  name: Word('сучить', 3),
  singular1stPerson: Word('сучу', 3),
  singular2ndPerson: Word('сучишь', 1),
  singular3rdPerson: Word('сучит', 1),
  plural1stPerson: Word('сучим', 1),
  plural2ndPerson: Word('сучите', 1),
  plural3rdPerson: Word('сучат', 1),
  masculinePast: Word('сучил', 3),
  femininePast: Word('сучила', 3),
  neuterPast: Word('сучило', 3),
  pluralPast: Word('сучили', 3),
  imperativeInformal: Word('сучи', 3),
  imperativeFormal: Word('сучите', 3),
  imperfect: [],
};

perfectVerbs.set(сучить.name.text, сучить);

export { сучить };