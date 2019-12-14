import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const налаживаться: PerfectVerb = {
  name: Word('налаживаться', 3),
  singular1stPerson: Word('налаживаюсь', 3),
  singular2ndPerson: Word('налаживаешься', 3),
  singular3rdPerson: Word('налаживается', 3),
  plural1stPerson: Word('налаживаемся', 3),
  plural2ndPerson: Word('налаживаетесь', 3),
  plural3rdPerson: Word('налаживаются', 3),
  masculinePast: Word('налаживался', 3),
  femininePast: Word('налаживалась', 3),
  neuterPast: Word('налаживалось', 3),
  pluralPast: Word('налаживались', 3),
  imperativeInformal: Word('налаживайся', 3),
  imperativeFormal: Word('налаживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(налаживаться.name.text, налаживаться);

export { налаживаться };