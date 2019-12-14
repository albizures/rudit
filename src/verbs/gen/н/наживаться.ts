import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наживаться: PerfectVerb = {
  name: Word('наживаться', 3),
  singular1stPerson: Word('наживаюсь', 3),
  singular2ndPerson: Word('наживаешься', 3),
  singular3rdPerson: Word('наживается', 3),
  plural1stPerson: Word('наживаемся', 3),
  plural2ndPerson: Word('наживаетесь', 3),
  plural3rdPerson: Word('наживаются', 3),
  masculinePast: Word('наживался', 3),
  femininePast: Word('наживалась', 3),
  neuterPast: Word('наживалось', 3),
  pluralPast: Word('наживались', 3),
  imperativeInformal: Word('наживайся', 3),
  imperativeFormal: Word('наживайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наживаться.name.text, наживаться);

export { наживаться };