import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const практиковаться: PerfectVerb = {
  name: Word('практиковаться', 9),
  singular1stPerson: Word('практикуюсь', 7),
  singular2ndPerson: Word('практикуешься', 7),
  singular3rdPerson: Word('практикуется', 7),
  plural1stPerson: Word('практикуемся', 7),
  plural2ndPerson: Word('практикуетесь', 7),
  plural3rdPerson: Word('практикуются', 7),
  masculinePast: Word('практиковался', 9),
  femininePast: Word('практиковалась', 9),
  neuterPast: Word('практиковалось', 9),
  pluralPast: Word('практиковались', 9),
  imperativeInformal: Word('практикуйся', 7),
  imperativeFormal: Word('практикуйтесь', 7),
  imperfect: [],
};

perfectVerbs.set(практиковаться.name.text, практиковаться);

export { практиковаться };