import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const полниться: PerfectVerb = {
  name: Word('полниться', 1),
  singular1stPerson: Word('полнюсь', 1),
  singular2ndPerson: Word('полнишься', 1),
  singular3rdPerson: Word('полнится', 1),
  plural1stPerson: Word('полнимся', 1),
  plural2ndPerson: Word('полнитесь', 1),
  plural3rdPerson: Word('полнятся', 1),
  masculinePast: Word('полнился', 1),
  femininePast: Word('полнилась', 1),
  neuterPast: Word('полнилось', 1),
  pluralPast: Word('полнились', 1),
  imperativeInformal: Word('полнись', 1),
  imperativeFormal: Word('полнитесь', 1),
  imperfect: [],
};

perfectVerbs.set(полниться.name.text, полниться);

export { полниться };