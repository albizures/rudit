import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присаживаться: PerfectVerb = {
  name: Word('присаживаться', 4),
  singular1stPerson: Word('присаживаюсь', 4),
  singular2ndPerson: Word('присаживаешься', 4),
  singular3rdPerson: Word('присаживается', 4),
  plural1stPerson: Word('присаживаемся', 4),
  plural2ndPerson: Word('присаживаетесь', 4),
  plural3rdPerson: Word('присаживаются', 4),
  masculinePast: Word('присаживался', 4),
  femininePast: Word('присаживалась', 4),
  neuterPast: Word('присаживалось', 4),
  pluralPast: Word('присаживались', 4),
  imperativeInformal: Word('присаживайся', 4),
  imperativeFormal: Word('присаживайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(присаживаться.name.text, присаживаться);

export { присаживаться };