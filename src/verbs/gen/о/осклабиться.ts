import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осклабиться: PerfectVerb = {
  name: Word('осклабиться', 4),
  singular1stPerson: Word('осклаблюсь', 4),
  singular2ndPerson: Word('осклабишься', 4),
  singular3rdPerson: Word('осклабится', 4),
  plural1stPerson: Word('осклабимся', 4),
  plural2ndPerson: Word('осклабитесь', 4),
  plural3rdPerson: Word('осклабятся', 4),
  masculinePast: Word('осклабился', 4),
  femininePast: Word('осклабилась', 4),
  neuterPast: Word('осклабилось', 4),
  pluralPast: Word('осклабились', 4),
  imperativeInformal: Word('осклабься', 4),
  imperativeFormal: Word('осклабьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(осклабиться.name.text, осклабиться);

export { осклабиться };