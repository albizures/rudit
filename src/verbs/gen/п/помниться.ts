import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помниться: PerfectVerb = {
  name: Word('помниться', 1),
  singular1stPerson: Word('помнюсь', 1),
  singular2ndPerson: Word('помнишься', 1),
  singular3rdPerson: Word('помнится', 1),
  plural1stPerson: Word('помнимся', 1),
  plural2ndPerson: Word('помнитесь', 1),
  plural3rdPerson: Word('помнятся', 1),
  masculinePast: Word('помнился', 1),
  femininePast: Word('помнилась', 1),
  neuterPast: Word('помнилось', 1),
  pluralPast: Word('помнились', 1),
  imperativeInformal: Word('помнись', 1),
  imperativeFormal: Word('помнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(помниться.name.text, помниться);

export { помниться };