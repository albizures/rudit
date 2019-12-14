import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сощурить: PerfectVerb = {
  name: Word('сощурить', 3),
  singular1stPerson: Word('сощурю', 3),
  singular2ndPerson: Word('сощуришь', 3),
  singular3rdPerson: Word('сощурит', 3),
  plural1stPerson: Word('сощурим', 3),
  plural2ndPerson: Word('сощурите', 3),
  plural3rdPerson: Word('сощурят', 3),
  masculinePast: Word('сощурил', 3),
  femininePast: Word('сощурила', 3),
  neuterPast: Word('сощурило', 3),
  pluralPast: Word('сощурили', 3),
  imperativeInformal: Word('сощурь', 3),
  imperativeFormal: Word('сощурьте', 3),
  imperfect: [],
};

perfectVerbs.set(сощурить.name.text, сощурить);

export { сощурить };