import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обрезаться: PerfectVerb = {
  name: Word('обрезаться', 5),
  singular1stPerson: Word('обрезаюсь', 5),
  singular2ndPerson: Word('обрезаешься', 5),
  singular3rdPerson: Word('обрезается', 5),
  plural1stPerson: Word('обрезаемся', 5),
  plural2ndPerson: Word('обрезаетесь', 5),
  plural3rdPerson: Word('обрезаются', 5),
  masculinePast: Word('обрезался', 5),
  femininePast: Word('обрезалась', 5),
  neuterPast: Word('обрезалось', 5),
  pluralPast: Word('обрезались', 5),
  imperativeInformal: Word('обрезайся', 5),
  imperativeFormal: Word('обрезайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(обрезаться.name.text, обрезаться);

export { обрезаться };