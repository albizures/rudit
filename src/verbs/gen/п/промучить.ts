import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промучить: PerfectVerb = {
  name: Word('промучить', 4),
  singular1stPerson: Word('промучу', 4),
  singular2ndPerson: Word('промучишь', 4),
  singular3rdPerson: Word('промучит', 4),
  plural1stPerson: Word('промучим', 4),
  plural2ndPerson: Word('промучите', 4),
  plural3rdPerson: Word('промучат', 4),
  masculinePast: Word('промучил', 4),
  femininePast: Word('промучила', 4),
  neuterPast: Word('промучило', 4),
  pluralPast: Word('промучили', 4),
  imperativeInformal: Word('промучь', 4),
  imperativeFormal: Word('промучьте', 4),
  imperfect: [],
};

perfectVerbs.set(промучить.name.text, промучить);

export { промучить };