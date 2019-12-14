import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const научаться: PerfectVerb = {
  name: Word('научаться', 4),
  singular1stPerson: Word('научаюсь', 4),
  singular2ndPerson: Word('научаешься', 4),
  singular3rdPerson: Word('научается', 4),
  plural1stPerson: Word('научаемся', 4),
  plural2ndPerson: Word('научаетесь', 4),
  plural3rdPerson: Word('научаются', 4),
  masculinePast: Word('научался', 4),
  femininePast: Word('научалась', 4),
  neuterPast: Word('научалось', 4),
  pluralPast: Word('научались', 4),
  imperativeInformal: Word('научайся', 4),
  imperativeFormal: Word('научайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(научаться.name.text, научаться);

export { научаться };