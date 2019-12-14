import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const омолаживаться: PerfectVerb = {
  name: Word('омолаживаться', 4),
  singular1stPerson: Word('омолаживаюсь', 4),
  singular2ndPerson: Word('омолаживаешься', 4),
  singular3rdPerson: Word('омолаживается', 4),
  plural1stPerson: Word('омолаживаемся', 4),
  plural2ndPerson: Word('омолаживаетесь', 4),
  plural3rdPerson: Word('омолаживаются', 4),
  masculinePast: Word('омолаживался', 4),
  femininePast: Word('омолаживалась', 4),
  neuterPast: Word('омолаживалось', 4),
  pluralPast: Word('омолаживались', 4),
  imperativeInformal: Word('омолаживайся', 4),
  imperativeFormal: Word('омолаживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(омолаживаться.name.text, омолаживаться);

export { омолаживаться };