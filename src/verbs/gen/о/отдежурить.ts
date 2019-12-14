import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отдежурить: PerfectVerb = {
  name: Word('отдежурить', 5),
  singular1stPerson: Word('отдежурю', 5),
  singular2ndPerson: Word('отдежуришь', 5),
  singular3rdPerson: Word('отдежурит', 5),
  plural1stPerson: Word('отдежурим', 5),
  plural2ndPerson: Word('отдежурите', 5),
  plural3rdPerson: Word('отдежурят', 5),
  masculinePast: Word('отдежурил', 5),
  femininePast: Word('отдежурила', 5),
  neuterPast: Word('отдежурило', 5),
  pluralPast: Word('отдежурили', 5),
  imperativeInformal: Word('отдежурь', 5),
  imperativeFormal: Word('отдежурьте', 5),
  imperfect: [],
};

perfectVerbs.set(отдежурить.name.text, отдежурить);

export { отдежурить };