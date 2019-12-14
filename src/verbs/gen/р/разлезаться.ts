import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлезаться: PerfectVerb = {
  name: Word('разлезаться', 6),
  singular1stPerson: Word('разлезаюсь', 6),
  singular2ndPerson: Word('разлезаешься', 6),
  singular3rdPerson: Word('разлезается', 6),
  plural1stPerson: Word('разлезаемся', 6),
  plural2ndPerson: Word('разлезаетесь', 6),
  plural3rdPerson: Word('разлезаются', 6),
  masculinePast: Word('разлезался', 6),
  femininePast: Word('разлезалась', 6),
  neuterPast: Word('разлезалось', 6),
  pluralPast: Word('разлезались', 6),
  imperativeInformal: Word('разлезайся', 6),
  imperativeFormal: Word('разлезайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разлезаться.name.text, разлезаться);

export { разлезаться };