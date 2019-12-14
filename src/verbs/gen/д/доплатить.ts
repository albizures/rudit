import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const доплатить: PerfectVerb = {
  name: Word('доплатить', 6),
  singular1stPerson: Word('доплачу', 6),
  singular2ndPerson: Word('доплатишь', 4),
  singular3rdPerson: Word('доплатит', 4),
  plural1stPerson: Word('доплатим', 4),
  plural2ndPerson: Word('доплатите', 4),
  plural3rdPerson: Word('доплатят', 4),
  masculinePast: Word('доплатил', 6),
  femininePast: Word('доплатила', 6),
  neuterPast: Word('доплатило', 6),
  pluralPast: Word('доплатили', 6),
  imperativeInformal: Word('доплати', 6),
  imperativeFormal: Word('доплатите', 6),
  imperfect: [],
};

perfectVerbs.set(доплатить.name.text, доплатить);

export { доплатить };