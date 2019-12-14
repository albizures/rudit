import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отрекаться: PerfectVerb = {
  name: Word('отрекаться', 5),
  singular1stPerson: Word('отрекаюсь', 5),
  singular2ndPerson: Word('отрекаешься', 5),
  singular3rdPerson: Word('отрекается', 5),
  plural1stPerson: Word('отрекаемся', 5),
  plural2ndPerson: Word('отрекаетесь', 5),
  plural3rdPerson: Word('отрекаются', 5),
  masculinePast: Word('отрекался', 5),
  femininePast: Word('отрекалась', 5),
  neuterPast: Word('отрекалось', 5),
  pluralPast: Word('отрекались', 5),
  imperativeInformal: Word('отрекайся', 5),
  imperativeFormal: Word('отрекайтесь', 5),
  imperfect: ['отречься'],
};

perfectVerbs.set(отрекаться.name.text, отрекаться);

export { отрекаться };