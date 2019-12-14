import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const столочь: PerfectVerb = {
  name: Word('столочь', 4),
  singular1stPerson: Word('столку', 5),
  singular2ndPerson: Word('столчёшь', 2),
  singular3rdPerson: Word('столчёт', 2),
  plural1stPerson: Word('столчём', 2),
  plural2ndPerson: Word('столчёте', 7),
  plural3rdPerson: Word('столкут', 5),
  masculinePast: Word('столок', 4),
  femininePast: Word('столкла', 6),
  neuterPast: Word('столкло', 6),
  pluralPast: Word('столкли', 6),
  imperativeInformal: Word('столки', 5),
  imperativeFormal: Word('столките', 5),
  imperfect: [],
};

perfectVerbs.set(столочь.name.text, столочь);

export { столочь };