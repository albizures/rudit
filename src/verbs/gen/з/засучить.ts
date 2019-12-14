import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засучить: PerfectVerb = {
  name: Word('засучить', 5),
  singular1stPerson: Word('засучу', 5),
  singular2ndPerson: Word('засучишь', 3),
  singular3rdPerson: Word('засучит', 3),
  plural1stPerson: Word('засучим', 3),
  plural2ndPerson: Word('засучите', 3),
  plural3rdPerson: Word('засучат', 3),
  masculinePast: Word('засучил', 5),
  femininePast: Word('засучила', 5),
  neuterPast: Word('засучило', 5),
  pluralPast: Word('засучили', 5),
  imperativeInformal: Word('засучи', 5),
  imperativeFormal: Word('засучите', 5),
  imperfect: [],
};

perfectVerbs.set(засучить.name.text, засучить);

export { засучить };