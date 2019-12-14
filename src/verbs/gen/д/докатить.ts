import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докатить: PerfectVerb = {
  name: Word('докатить', 5),
  singular1stPerson: Word('докачу', 5),
  singular2ndPerson: Word('докатишь', 3),
  singular3rdPerson: Word('докатит', 3),
  plural1stPerson: Word('докатим', 3),
  plural2ndPerson: Word('докатите', 3),
  plural3rdPerson: Word('докатят', 3),
  masculinePast: Word('докатил', 5),
  femininePast: Word('докатила', 5),
  neuterPast: Word('докатило', 5),
  pluralPast: Word('докатили', 5),
  imperativeInformal: Word('докати', 5),
  imperativeFormal: Word('докатите', 5),
  imperfect: [],
};

perfectVerbs.set(докатить.name.text, докатить);

export { докатить };