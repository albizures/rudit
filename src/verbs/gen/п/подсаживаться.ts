import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подсаживаться: PerfectVerb = {
  name: Word('подсаживаться', 4),
  singular1stPerson: Word('подсаживаюсь', 4),
  singular2ndPerson: Word('подсаживаешься', 4),
  singular3rdPerson: Word('подсаживается', 4),
  plural1stPerson: Word('подсаживаемся', 4),
  plural2ndPerson: Word('подсаживаетесь', 4),
  plural3rdPerson: Word('подсаживаются', 4),
  masculinePast: Word('подсаживался', 4),
  femininePast: Word('подсаживалась', 4),
  neuterPast: Word('подсаживалось', 4),
  pluralPast: Word('подсаживались', 4),
  imperativeInformal: Word('подсаживайся', 4),
  imperativeFormal: Word('подсаживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(подсаживаться.name.text, подсаживаться);

export { подсаживаться };