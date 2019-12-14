import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const опериться: PerfectVerb = {
  name: Word('опериться', 4),
  singular1stPerson: Word('оперюсь', 4),
  singular2ndPerson: Word('оперишься', 4),
  singular3rdPerson: Word('оперится', 4),
  plural1stPerson: Word('оперимся', 4),
  plural2ndPerson: Word('оперитесь', 4),
  plural3rdPerson: Word('оперятся', 4),
  masculinePast: Word('оперился', 4),
  femininePast: Word('оперилась', 4),
  neuterPast: Word('оперилось', 4),
  pluralPast: Word('оперились', 4),
  imperativeInformal: Word('оперись', 4),
  imperativeFormal: Word('оперитесь', 4),
  imperfect: [],
};

perfectVerbs.set(опериться.name.text, опериться);

export { опериться };