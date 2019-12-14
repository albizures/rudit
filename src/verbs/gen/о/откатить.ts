import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откатить: PerfectVerb = {
  name: Word('откатить', 5),
  singular1stPerson: Word('откачу', 5),
  singular2ndPerson: Word('откатишь', 3),
  singular3rdPerson: Word('откатит', 3),
  plural1stPerson: Word('откатим', 3),
  plural2ndPerson: Word('откатите', 3),
  plural3rdPerson: Word('откатят', 3),
  masculinePast: Word('откатил', 5),
  femininePast: Word('откатила', 5),
  neuterPast: Word('откатило', 5),
  pluralPast: Word('откатили', 5),
  imperativeInformal: Word('откати', 5),
  imperativeFormal: Word('откатите', 5),
  imperfect: [],
};

perfectVerbs.set(откатить.name.text, откатить);

export { откатить };