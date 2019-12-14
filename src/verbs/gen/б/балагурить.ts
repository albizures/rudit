import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const балагурить: PerfectVerb = {
  name: Word('балагурить', 5),
  singular1stPerson: Word('балагурю', 5),
  singular2ndPerson: Word('балагуришь', 5),
  singular3rdPerson: Word('балагурит', 5),
  plural1stPerson: Word('балагурим', 5),
  plural2ndPerson: Word('балагурите', 5),
  plural3rdPerson: Word('балагурят', 5),
  masculinePast: Word('балагурил', 5),
  femininePast: Word('балагурила', 5),
  neuterPast: Word('балагурило', 5),
  pluralPast: Word('балагурили', 5),
  imperativeInformal: Word('балагурь', 5),
  imperativeFormal: Word('балагурьте', 5),
  imperfect: [],
};

perfectVerbs.set(балагурить.name.text, балагурить);

export { балагурить };