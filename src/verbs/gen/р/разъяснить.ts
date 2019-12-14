import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разъяснить: PerfectVerb = {
  name: Word('разъяснить', 7),
  singular1stPerson: Word('разъясню', 7),
  singular2ndPerson: Word('разъяснишь', 7),
  singular3rdPerson: Word('разъяснит', 7),
  plural1stPerson: Word('разъясним', 7),
  plural2ndPerson: Word('разъясните', 7),
  plural3rdPerson: Word('разъяснят', 7),
  masculinePast: Word('разъяснил', 7),
  femininePast: Word('разъяснила', 7),
  neuterPast: Word('разъяснило', 7),
  pluralPast: Word('разъяснили', 7),
  imperativeInformal: Word('разъясни', 7),
  imperativeFormal: Word('разъясните', 7),
  imperfect: [],
};

perfectVerbs.set(разъяснить.name.text, разъяснить);

export { разъяснить };