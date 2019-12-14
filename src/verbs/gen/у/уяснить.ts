import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уяснить: PerfectVerb = {
  name: Word('уяснить', 4),
  singular1stPerson: Word('уясню', 4),
  singular2ndPerson: Word('уяснишь', 4),
  singular3rdPerson: Word('уяснит', 4),
  plural1stPerson: Word('уясним', 4),
  plural2ndPerson: Word('уясните', 4),
  plural3rdPerson: Word('уяснят', 4),
  masculinePast: Word('уяснил', 4),
  femininePast: Word('уяснила', 4),
  neuterPast: Word('уяснило', 4),
  pluralPast: Word('уяснили', 4),
  imperativeInformal: Word('уясни', 4),
  imperativeFormal: Word('уясните', 4),
  imperfect: [],
};

perfectVerbs.set(уяснить.name.text, уяснить);

export { уяснить };