import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлагаться: PerfectVerb = {
  name: Word('разлагаться', 6),
  singular1stPerson: Word('разлагаюсь', 6),
  singular2ndPerson: Word('разлагаешься', 6),
  singular3rdPerson: Word('разлагается', 6),
  plural1stPerson: Word('разлагаемся', 6),
  plural2ndPerson: Word('разлагаетесь', 6),
  plural3rdPerson: Word('разлагаются', 6),
  masculinePast: Word('разлагался', 6),
  femininePast: Word('разлагалась', 6),
  neuterPast: Word('разлагалось', 6),
  pluralPast: Word('разлагались', 6),
  imperativeInformal: Word('разлагайся', 6),
  imperativeFormal: Word('разлагайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разлагаться.name.text, разлагаться);

export { разлагаться };