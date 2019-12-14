import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обработаться: PerfectVerb = {
  name: Word('обработаться', 5),
  singular1stPerson: Word('обработаюсь', 5),
  singular2ndPerson: Word('обработаешься', 5),
  singular3rdPerson: Word('обработается', 5),
  plural1stPerson: Word('обработаемся', 5),
  plural2ndPerson: Word('обработаетесь', 5),
  plural3rdPerson: Word('обработаются', 5),
  masculinePast: Word('обработался', 5),
  femininePast: Word('обработалась', 5),
  neuterPast: Word('обработалось', 5),
  pluralPast: Word('обработались', 5),
  imperativeInformal: Word('обработайся', 5),
  imperativeFormal: Word('обработайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обработаться.name.text, обработаться);

export { обработаться };