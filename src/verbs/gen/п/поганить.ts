import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поганить: PerfectVerb = {
  name: Word('поганить', 3),
  singular1stPerson: Word('поганю', 3),
  singular2ndPerson: Word('поганишь', 3),
  singular3rdPerson: Word('поганит', 3),
  plural1stPerson: Word('поганим', 3),
  plural2ndPerson: Word('поганите', 3),
  plural3rdPerson: Word('поганят', 3),
  masculinePast: Word('поганил', 3),
  femininePast: Word('поганила', 3),
  neuterPast: Word('поганило', 3),
  pluralPast: Word('поганили', 3),
  imperativeInformal: Word('погань', 3),
  imperativeFormal: Word('поганьте', 3),
  imperfect: [],
};

perfectVerbs.set(поганить.name.text, поганить);

export { поганить };