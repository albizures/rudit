import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отучить: PerfectVerb = {
  name: Word('отучить', 4),
  singular1stPerson: Word('отучу', 4),
  singular2ndPerson: Word('отучишь', 2),
  singular3rdPerson: Word('отучит', 2),
  plural1stPerson: Word('отучим', 2),
  plural2ndPerson: Word('отучите', 2),
  plural3rdPerson: Word('отучат', 2),
  masculinePast: Word('отучил', 4),
  femininePast: Word('отучила', 4),
  neuterPast: Word('отучило', 4),
  pluralPast: Word('отучили', 4),
  imperativeInformal: Word('отучи', 4),
  imperativeFormal: Word('отучите', 4),
  imperfect: [],
};

perfectVerbs.set(отучить.name.text, отучить);

export { отучить };