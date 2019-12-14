import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const накатить: PerfectVerb = {
  name: Word('накатить', 5),
  singular1stPerson: Word('накачу', 5),
  singular2ndPerson: Word('накатишь', 3),
  singular3rdPerson: Word('накатит', 3),
  plural1stPerson: Word('накатим', 3),
  plural2ndPerson: Word('накатите', 3),
  plural3rdPerson: Word('накатят', 3),
  masculinePast: Word('накатил', 5),
  femininePast: Word('накатила', 5),
  neuterPast: Word('накатило', 5),
  pluralPast: Word('накатили', 5),
  imperativeInformal: Word('накати', 5),
  imperativeFormal: Word('накатите', 5),
  imperfect: [],
};

perfectVerbs.set(накатить.name.text, накатить);

export { накатить };