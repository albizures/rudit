import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const укатить: PerfectVerb = {
  name: Word('укатить', 4),
  singular1stPerson: Word('укачу', 4),
  singular2ndPerson: Word('укатишь', 2),
  singular3rdPerson: Word('укатит', 2),
  plural1stPerson: Word('укатим', 2),
  plural2ndPerson: Word('укатите', 2),
  plural3rdPerson: Word('укатят', 2),
  masculinePast: Word('укатил', 4),
  femininePast: Word('укатила', 4),
  neuterPast: Word('укатило', 4),
  pluralPast: Word('укатили', 4),
  imperativeInformal: Word('укати', 4),
  imperativeFormal: Word('укатите', 4),
  imperfect: [],
};

perfectVerbs.set(укатить.name.text, укатить);

export { укатить };