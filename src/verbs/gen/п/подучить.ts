import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подучить: PerfectVerb = {
  name: Word('подучить', 5),
  singular1stPerson: Word('подучу', 5),
  singular2ndPerson: Word('подучишь', 3),
  singular3rdPerson: Word('подучит', 3),
  plural1stPerson: Word('подучим', 3),
  plural2ndPerson: Word('подучите', 3),
  plural3rdPerson: Word('подучат', 3),
  masculinePast: Word('подучил', 5),
  femininePast: Word('подучила', 5),
  neuterPast: Word('подучило', 5),
  pluralPast: Word('подучили', 5),
  imperativeInformal: Word('подучи', 5),
  imperativeFormal: Word('подучите', 5),
  imperfect: [],
};

perfectVerbs.set(подучить.name.text, подучить);

export { подучить };