import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разучить: PerfectVerb = {
  name: Word('разучить', 5),
  singular1stPerson: Word('разучу', 5),
  singular2ndPerson: Word('разучишь', 3),
  singular3rdPerson: Word('разучит', 3),
  plural1stPerson: Word('разучим', 3),
  plural2ndPerson: Word('разучите', 3),
  plural3rdPerson: Word('разучат', 3),
  masculinePast: Word('разучил', 5),
  femininePast: Word('разучила', 5),
  neuterPast: Word('разучило', 5),
  pluralPast: Word('разучили', 5),
  imperativeInformal: Word('разучи', 5),
  imperativeFormal: Word('разучите', 5),
  imperfect: [],
};

perfectVerbs.set(разучить.name.text, разучить);

export { разучить };