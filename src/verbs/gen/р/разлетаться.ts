import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлетаться: PerfectVerb = {
  name: Word('разлетаться', 6),
  singular1stPerson: Word('разлетаюсь', 6),
  singular2ndPerson: Word('разлетаешься', 6),
  singular3rdPerson: Word('разлетается', 6),
  plural1stPerson: Word('разлетаемся', 6),
  plural2ndPerson: Word('разлетаетесь', 6),
  plural3rdPerson: Word('разлетаются', 6),
  masculinePast: Word('разлетался', 6),
  femininePast: Word('разлеталась', 6),
  neuterPast: Word('разлеталось', 6),
  pluralPast: Word('разлетались', 6),
  imperativeInformal: Word('разлетайся', 6),
  imperativeFormal: Word('разлетайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разлетаться.name.text, разлетаться);

export { разлетаться };