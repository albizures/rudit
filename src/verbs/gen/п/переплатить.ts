import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переплатить: PerfectVerb = {
  name: Word('переплатить', 8),
  singular1stPerson: Word('переплачу', 8),
  singular2ndPerson: Word('переплатишь', 6),
  singular3rdPerson: Word('переплатит', 6),
  plural1stPerson: Word('переплатим', 6),
  plural2ndPerson: Word('переплатите', 6),
  plural3rdPerson: Word('переплатят', 6),
  masculinePast: Word('переплатил', 8),
  femininePast: Word('переплатила', 8),
  neuterPast: Word('переплатило', 8),
  pluralPast: Word('переплатили', 8),
  imperativeInformal: Word('переплати', 8),
  imperativeFormal: Word('переплатите', 8),
  imperfect: [],
};

perfectVerbs.set(переплатить.name.text, переплатить);

export { переплатить };