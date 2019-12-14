import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выплатить: PerfectVerb = {
  name: Word('выплатить', 1),
  singular1stPerson: Word('выплачу', 1),
  singular2ndPerson: Word('выплатишь', 1),
  singular3rdPerson: Word('выплатит', 1),
  plural1stPerson: Word('выплатим', 1),
  plural2ndPerson: Word('выплатите', 1),
  plural3rdPerson: Word('выплатят', 1),
  masculinePast: Word('выплатил', 1),
  femininePast: Word('выплатила', 1),
  neuterPast: Word('выплатило', 1),
  pluralPast: Word('выплатили', 1),
  imperativeInformal: Word('выплати', 1),
  imperativeFormal: Word('выплатите', 1),
  imperfect: [],
};

perfectVerbs.set(выплатить.name.text, выплатить);

export { выплатить };