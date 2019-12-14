import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осложниться: PerfectVerb = {
  name: Word('осложниться', 6),
  singular1stPerson: Word('осложнюсь', 6),
  singular2ndPerson: Word('осложнишься', 6),
  singular3rdPerson: Word('осложнится', 6),
  plural1stPerson: Word('осложнимся', 6),
  plural2ndPerson: Word('осложнитесь', 6),
  plural3rdPerson: Word('осложнятся', 6),
  masculinePast: Word('осложнился', 6),
  femininePast: Word('осложнилась', 6),
  neuterPast: Word('осложнилось', 6),
  pluralPast: Word('осложнились', 6),
  imperativeInformal: Word('осложнись', 6),
  imperativeFormal: Word('осложнитесь', 6),
  imperfect: [],
};

perfectVerbs.set(осложниться.name.text, осложниться);

export { осложниться };