import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обломаться: PerfectVerb = {
  name: Word('обломаться', 5),
  singular1stPerson: Word('обломаюсь', 5),
  singular2ndPerson: Word('обломаешься', 5),
  singular3rdPerson: Word('обломается', 5),
  plural1stPerson: Word('обломаемся', 5),
  plural2ndPerson: Word('обломаетесь', 5),
  plural3rdPerson: Word('обломаются', 5),
  masculinePast: Word('обломался', 5),
  femininePast: Word('обломалась', 5),
  neuterPast: Word('обломалось', 5),
  pluralPast: Word('обломались', 5),
  imperativeInformal: Word('обломайся', 5),
  imperativeFormal: Word('обломайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обломаться.name.text, обломаться);

export { обломаться };