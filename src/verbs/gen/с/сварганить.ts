import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сварганить: PerfectVerb = {
  name: Word('сварганить', 5),
  singular1stPerson: Word('сварганю', 5),
  singular2ndPerson: Word('сварганишь', 5),
  singular3rdPerson: Word('сварганит', 5),
  plural1stPerson: Word('сварганим', 5),
  plural2ndPerson: Word('сварганите', 5),
  plural3rdPerson: Word('сварганят', 5),
  masculinePast: Word('сварганил', 5),
  femininePast: Word('сварганила', 5),
  neuterPast: Word('сварганило', 5),
  pluralPast: Word('сварганили', 5),
  imperativeInformal: Word('сваргань', 5),
  imperativeFormal: Word('сварганьте', 5),
  imperfect: [],
};

perfectVerbs.set(сварганить.name.text, сварганить);

export { сварганить };