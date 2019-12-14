import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отплатить: PerfectVerb = {
  name: Word('отплатить', 6),
  singular1stPerson: Word('отплачу', 6),
  singular2ndPerson: Word('отплатишь', 4),
  singular3rdPerson: Word('отплатит', 4),
  plural1stPerson: Word('отплатим', 4),
  plural2ndPerson: Word('отплатите', 4),
  plural3rdPerson: Word('отплатят', 4),
  masculinePast: Word('отплатил', 6),
  femininePast: Word('отплатила', 6),
  neuterPast: Word('отплатило', 6),
  pluralPast: Word('отплатили', 6),
  imperativeInformal: Word('отплати', 6),
  imperativeFormal: Word('отплатите', 6),
  imperfect: [],
};

perfectVerbs.set(отплатить.name.text, отплатить);

export { отплатить };