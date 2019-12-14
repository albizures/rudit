import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const продежурить: PerfectVerb = {
  name: Word('продежурить', 6),
  singular1stPerson: Word('продежурю', 6),
  singular2ndPerson: Word('продежуришь', 6),
  singular3rdPerson: Word('продежурит', 6),
  plural1stPerson: Word('продежурим', 6),
  plural2ndPerson: Word('продежурите', 6),
  plural3rdPerson: Word('продежурят', 6),
  masculinePast: Word('продежурил', 6),
  femininePast: Word('продежурила', 6),
  neuterPast: Word('продежурило', 6),
  pluralPast: Word('продежурили', 6),
  imperativeInformal: Word('продежурь', 6),
  imperativeFormal: Word('продежурьте', 6),
  imperfect: [],
};

perfectVerbs.set(продежурить.name.text, продежурить);

export { продежурить };