import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлучаться: PerfectVerb = {
  name: Word('разлучаться', 6),
  singular1stPerson: Word('разлучаюсь', 6),
  singular2ndPerson: Word('разлучаешься', 6),
  singular3rdPerson: Word('разлучается', 6),
  plural1stPerson: Word('разлучаемся', 6),
  plural2ndPerson: Word('разлучаетесь', 6),
  plural3rdPerson: Word('разлучаются', 6),
  masculinePast: Word('разлучался', 6),
  femininePast: Word('разлучалась', 6),
  neuterPast: Word('разлучалось', 6),
  pluralPast: Word('разлучались', 6),
  imperativeInformal: Word('разлучайся', 6),
  imperativeFormal: Word('разлучайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разлучаться.name.text, разлучаться);

export { разлучаться };