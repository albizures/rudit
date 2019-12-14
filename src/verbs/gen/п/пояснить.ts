import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пояснить: PerfectVerb = {
  name: Word('пояснить', 5),
  singular1stPerson: Word('поясню', 5),
  singular2ndPerson: Word('пояснишь', 5),
  singular3rdPerson: Word('пояснит', 5),
  plural1stPerson: Word('поясним', 5),
  plural2ndPerson: Word('поясните', 5),
  plural3rdPerson: Word('пояснят', 5),
  masculinePast: Word('пояснил', 5),
  femininePast: Word('пояснила', 5),
  neuterPast: Word('пояснило', 5),
  pluralPast: Word('пояснили', 5),
  imperativeInformal: Word('поясни', 5),
  imperativeFormal: Word('поясните', 5),
  imperfect: [],
};

perfectVerbs.set(пояснить.name.text, пояснить);

export { пояснить };