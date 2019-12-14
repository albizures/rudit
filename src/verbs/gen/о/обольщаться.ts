import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обольщаться: PerfectVerb = {
  name: Word('обольщаться', 6),
  singular1stPerson: Word('обольщаюсь', 6),
  singular2ndPerson: Word('обольщаешься', 6),
  singular3rdPerson: Word('обольщается', 6),
  plural1stPerson: Word('обольщаемся', 6),
  plural2ndPerson: Word('обольщаетесь', 6),
  plural3rdPerson: Word('обольщаются', 6),
  masculinePast: Word('обольщался', 6),
  femininePast: Word('обольщалась', 6),
  neuterPast: Word('обольщалось', 6),
  pluralPast: Word('обольщались', 6),
  imperativeInformal: Word('обольщайся', 6),
  imperativeFormal: Word('обольщайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(обольщаться.name.text, обольщаться);

export { обольщаться };