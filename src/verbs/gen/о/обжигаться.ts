import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обжигаться: PerfectVerb = {
  name: Word('обжигаться', 5),
  singular1stPerson: Word('обжигаюсь', 5),
  singular2ndPerson: Word('обжигаешься', 5),
  singular3rdPerson: Word('обжигается', 5),
  plural1stPerson: Word('обжигаемся', 5),
  plural2ndPerson: Word('обжигаетесь', 5),
  plural3rdPerson: Word('обжигаются', 5),
  masculinePast: Word('обжигался', 5),
  femininePast: Word('обжигалась', 5),
  neuterPast: Word('обжигалось', 5),
  pluralPast: Word('обжигались', 5),
  imperativeInformal: Word('обжигайся', 5),
  imperativeFormal: Word('обжигайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обжигаться.name.text, обжигаться);

export { обжигаться };