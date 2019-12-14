import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подежурить: PerfectVerb = {
  name: Word('подежурить', 5),
  singular1stPerson: Word('подежурю', 5),
  singular2ndPerson: Word('подежуришь', 5),
  singular3rdPerson: Word('подежурит', 5),
  plural1stPerson: Word('подежурим', 5),
  plural2ndPerson: Word('подежурите', 5),
  plural3rdPerson: Word('подежурят', 5),
  masculinePast: Word('подежурил', 5),
  femininePast: Word('подежурила', 5),
  neuterPast: Word('подежурило', 5),
  pluralPast: Word('подежурили', 5),
  imperativeInformal: Word('подежурь', 5),
  imperativeFormal: Word('подежурьте', 5),
  imperfect: [],
};

perfectVerbs.set(подежурить.name.text, подежурить);

export { подежурить };