import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const высаживаться: PerfectVerb = {
  name: Word('высаживаться', 3),
  singular1stPerson: Word('высаживаюсь', 3),
  singular2ndPerson: Word('высаживаешься', 3),
  singular3rdPerson: Word('высаживается', 3),
  plural1stPerson: Word('высаживаемся', 3),
  plural2ndPerson: Word('высаживаетесь', 3),
  plural3rdPerson: Word('высаживаются', 3),
  masculinePast: Word('высаживался', 3),
  femininePast: Word('высаживалась', 3),
  neuterPast: Word('высаживалось', 3),
  pluralPast: Word('высаживались', 3),
  imperativeInformal: Word('высаживайся', 3),
  imperativeFormal: Word('высаживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(высаживаться.name.text, высаживаться);

export { высаживаться };