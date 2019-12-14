import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const впериться: PerfectVerb = {
  name: Word('впериться', 4),
  singular1stPerson: Word('вперюсь', 4),
  singular2ndPerson: Word('вперишься', 4),
  singular3rdPerson: Word('вперится', 4),
  plural1stPerson: Word('вперимся', 4),
  plural2ndPerson: Word('вперитесь', 4),
  plural3rdPerson: Word('вперятся', 4),
  masculinePast: Word('вперился', 4),
  femininePast: Word('вперилась', 4),
  neuterPast: Word('вперилось', 4),
  pluralPast: Word('вперились', 4),
  imperativeInformal: Word('вперись', 4),
  imperativeFormal: Word('вперитесь', 4),
  imperfect: [],
};

perfectVerbs.set(впериться.name.text, впериться);

export { впериться };