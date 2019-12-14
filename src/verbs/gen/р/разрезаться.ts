import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разрезаться: PerfectVerb = {
  name: Word('разрезаться', 6),
  singular1stPerson: Word('разрезаюсь', 6),
  singular2ndPerson: Word('разрезаешься', 6),
  singular3rdPerson: Word('разрезается', 6),
  plural1stPerson: Word('разрезаемся', 6),
  plural2ndPerson: Word('разрезаетесь', 6),
  plural3rdPerson: Word('разрезаются', 6),
  masculinePast: Word('разрезался', 6),
  femininePast: Word('разрезалась', 6),
  neuterPast: Word('разрезалось', 6),
  pluralPast: Word('разрезались', 6),
  imperativeInformal: Word('разрезайся', 6),
  imperativeFormal: Word('разрезайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разрезаться.name.text, разрезаться);

export { разрезаться };