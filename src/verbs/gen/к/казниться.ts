import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const казниться: PerfectVerb = {
  name: Word('казниться', 4),
  singular1stPerson: Word('казнюсь', 4),
  singular2ndPerson: Word('казнишься', 4),
  singular3rdPerson: Word('казнится', 4),
  plural1stPerson: Word('казнимся', 4),
  plural2ndPerson: Word('казнитесь', 4),
  plural3rdPerson: Word('казнятся', 4),
  masculinePast: Word('казнился', 4),
  femininePast: Word('казнилась', 4),
  neuterPast: Word('казнилось', 4),
  pluralPast: Word('казнились', 4),
  imperativeInformal: Word('казнись', 4),
  imperativeFormal: Word('казнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(казниться.name.text, казниться);

export { казниться };