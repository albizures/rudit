import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const конопатить: PerfectVerb = {
  name: Word('конопатить', 5),
  singular1stPerson: Word('конопачу', 5),
  singular2ndPerson: Word('конопатишь', 5),
  singular3rdPerson: Word('конопатит', 5),
  plural1stPerson: Word('конопатим', 5),
  plural2ndPerson: Word('конопатите', 5),
  plural3rdPerson: Word('конопатят', 5),
  masculinePast: Word('конопатил', 5),
  femininePast: Word('конопатила', 5),
  neuterPast: Word('конопатило', 5),
  pluralPast: Word('конопатили', 5),
  imperativeInformal: Word('конопать', 5),
  imperativeFormal: Word('конопатьте', 5),
  imperfect: [],
};

perfectVerbs.set(конопатить.name.text, конопатить);

export { конопатить };