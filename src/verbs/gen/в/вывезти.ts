import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вывезти: PerfectVerb = {
  name: Word('вывезти', 1),
  singular1stPerson: Word('вывезу', 1),
  singular2ndPerson: Word('вывезешь', 1),
  singular3rdPerson: Word('вывезет', 1),
  plural1stPerson: Word('вывезем', 1),
  plural2ndPerson: Word('вывезете', 1),
  plural3rdPerson: Word('вывезут', 1),
  masculinePast: Word('вывез', 1),
  femininePast: Word('вывезла', 1),
  neuterPast: Word('вывезло', 1),
  pluralPast: Word('вывезли', 1),
  imperativeInformal: Word('вывези', 1),
  imperativeFormal: Word('вывезите', 1),
  imperfect: [],
};

perfectVerbs.set(вывезти.name.text, вывезти);

export { вывезти };