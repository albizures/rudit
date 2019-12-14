import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приживаться: PerfectVerb = {
  name: Word('приживаться', 6),
  singular1stPerson: Word('приживаюсь', 6),
  singular2ndPerson: Word('приживаешься', 6),
  singular3rdPerson: Word('приживается', 6),
  plural1stPerson: Word('приживаемся', 6),
  plural2ndPerson: Word('приживаетесь', 6),
  plural3rdPerson: Word('приживаются', 6),
  masculinePast: Word('приживался', 6),
  femininePast: Word('приживалась', 6),
  neuterPast: Word('приживалось', 6),
  pluralPast: Word('приживались', 6),
  imperativeInformal: Word('приживайся', 6),
  imperativeFormal: Word('приживайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(приживаться.name.text, приживаться);

export { приживаться };