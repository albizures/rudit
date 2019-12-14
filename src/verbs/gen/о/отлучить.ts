import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлучить: PerfectVerb = {
  name: Word('отлучить', 5),
  singular1stPerson: Word('отлучу', 5),
  singular2ndPerson: Word('отлучишь', 5),
  singular3rdPerson: Word('отлучит', 5),
  plural1stPerson: Word('отлучим', 5),
  plural2ndPerson: Word('отлучите', 5),
  plural3rdPerson: Word('отлучат', 5),
  masculinePast: Word('отлучил', 5),
  femininePast: Word('отлучила', 5),
  neuterPast: Word('отлучило', 5),
  pluralPast: Word('отлучили', 5),
  imperativeInformal: Word('отлучи', 5),
  imperativeFormal: Word('отлучите', 5),
  imperfect: [],
};

perfectVerbs.set(отлучить.name.text, отлучить);

export { отлучить };