import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запомниться: PerfectVerb = {
  name: Word('запомниться', 3),
  singular1stPerson: Word('запомнюсь', 3),
  singular2ndPerson: Word('запомнишься', 3),
  singular3rdPerson: Word('запомнится', 3),
  plural1stPerson: Word('запомнимся', 3),
  plural2ndPerson: Word('запомнитесь', 3),
  plural3rdPerson: Word('запомнятся', 3),
  masculinePast: Word('запомнился', 3),
  femininePast: Word('запомнилась', 3),
  neuterPast: Word('запомнилось', 3),
  pluralPast: Word('запомнились', 3),
  imperativeInformal: Word('запомнись', 3),
  imperativeFormal: Word('запомнитесь', 3),
  imperfect: [],
};

perfectVerbs.set(запомниться.name.text, запомниться);

export { запомниться };