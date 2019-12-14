import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const заплатить: PerfectVerb = {
  name: Word('заплатить', 6),
  singular1stPerson: Word('заплачу', 6),
  singular2ndPerson: Word('заплатишь', 4),
  singular3rdPerson: Word('заплатит', 4),
  plural1stPerson: Word('заплатим', 4),
  plural2ndPerson: Word('заплатите', 4),
  plural3rdPerson: Word('заплатят', 4),
  masculinePast: Word('заплатил', 6),
  femininePast: Word('заплатила', 6),
  neuterPast: Word('заплатило', 6),
  pluralPast: Word('заплатили', 6),
  imperativeInformal: Word('заплати', 6),
  imperativeFormal: Word('заплатите', 6),
  imperfect: [],
};

perfectVerbs.set(заплатить.name.text, заплатить);

export { заплатить };