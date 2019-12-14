import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обучаться: PerfectVerb = {
  name: Word('обучаться', 4),
  singular1stPerson: Word('обучаюсь', 4),
  singular2ndPerson: Word('обучаешься', 4),
  singular3rdPerson: Word('обучается', 4),
  plural1stPerson: Word('обучаемся', 4),
  plural2ndPerson: Word('обучаетесь', 4),
  plural3rdPerson: Word('обучаются', 4),
  masculinePast: Word('обучался', 4),
  femininePast: Word('обучалась', 4),
  neuterPast: Word('обучалось', 4),
  pluralPast: Word('обучались', 4),
  imperativeInformal: Word('обучайся', 4),
  imperativeFormal: Word('обучайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(обучаться.name.text, обучаться);

export { обучаться };