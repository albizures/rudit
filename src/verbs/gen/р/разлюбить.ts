import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разлюбить: PerfectVerb = {
  name: Word('разлюбить', 6),
  singular1stPerson: Word('разлюблю', 7),
  singular2ndPerson: Word('разлюбишь', 4),
  singular3rdPerson: Word('разлюбит', 4),
  plural1stPerson: Word('разлюбим', 4),
  plural2ndPerson: Word('разлюбите', 4),
  plural3rdPerson: Word('разлюбят', 4),
  masculinePast: Word('разлюбил', 6),
  femininePast: Word('разлюбила', 6),
  neuterPast: Word('разлюбило', 6),
  pluralPast: Word('разлюбили', 6),
  imperativeInformal: Word('разлюби', 6),
  imperativeFormal: Word('разлюбите', 6),
  imperfect: [],
};

perfectVerbs.set(разлюбить.name.text, разлюбить);

export { разлюбить };