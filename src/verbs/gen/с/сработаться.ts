import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сработаться: PerfectVerb = {
  name: Word('сработаться', 4),
  singular1stPerson: Word('сработаюсь', 4),
  singular2ndPerson: Word('сработаешься', 4),
  singular3rdPerson: Word('сработается', 4),
  plural1stPerson: Word('сработаемся', 4),
  plural2ndPerson: Word('сработаетесь', 4),
  plural3rdPerson: Word('сработаются', 4),
  masculinePast: Word('сработался', 4),
  femininePast: Word('сработалась', 4),
  neuterPast: Word('сработалось', 4),
  pluralPast: Word('сработались', 4),
  imperativeInformal: Word('сработайся', 4),
  imperativeFormal: Word('сработайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(сработаться.name.text, сработаться);

export { сработаться };