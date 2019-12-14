import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прокатить: PerfectVerb = {
  name: Word('прокатить', 6),
  singular1stPerson: Word('прокачу', 6),
  singular2ndPerson: Word('прокатишь', 4),
  singular3rdPerson: Word('прокатит', 4),
  plural1stPerson: Word('прокатим', 4),
  plural2ndPerson: Word('прокатите', 4),
  plural3rdPerson: Word('прокатят', 4),
  masculinePast: Word('прокатил', 6),
  femininePast: Word('прокатила', 6),
  neuterPast: Word('прокатило', 6),
  pluralPast: Word('прокатили', 6),
  imperativeInformal: Word('прокати', 6),
  imperativeFormal: Word('прокатите', 6),
  imperfect: [],
};

perfectVerbs.set(прокатить.name.text, прокатить);

export { прокатить };