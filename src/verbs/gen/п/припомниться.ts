import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const припомниться: PerfectVerb = {
  name: Word('припомниться', 4),
  singular1stPerson: Word('припомнюсь', 4),
  singular2ndPerson: Word('припомнишься', 4),
  singular3rdPerson: Word('припомнится', 4),
  plural1stPerson: Word('припомнимся', 4),
  plural2ndPerson: Word('припомнитесь', 4),
  plural3rdPerson: Word('припомнятся', 4),
  masculinePast: Word('припомнился', 4),
  femininePast: Word('припомнилась', 4),
  neuterPast: Word('припомнилось', 4),
  pluralPast: Word('припомнились', 4),
  imperativeInformal: Word('припомнись', 4),
  imperativeFormal: Word('припомнитесь', 4),
  imperfect: [],
};

perfectVerbs.set(припомниться.name.text, припомниться);

export { припомниться };