import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const балаганить: PerfectVerb = {
  name: Word('балаганить', 5),
  singular1stPerson: Word('балаганю', 5),
  singular2ndPerson: Word('балаганишь', 5),
  singular3rdPerson: Word('балаганит', 5),
  plural1stPerson: Word('балаганим', 5),
  plural2ndPerson: Word('балаганите', 5),
  plural3rdPerson: Word('балаганят', 5),
  masculinePast: Word('балаганил', 5),
  femininePast: Word('балаганила', 5),
  neuterPast: Word('балаганило', 5),
  pluralPast: Word('балаганили', 5),
  imperativeInformal: Word('балагань', 5),
  imperativeFormal: Word('балаганьте', 5),
  imperfect: [],
};

perfectVerbs.set(балаганить.name.text, балаганить);

export { балаганить };