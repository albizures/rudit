import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const распускать: PerfectVerb = {
  name: Word('распускать', 7),
  singular1stPerson: Word('распускаю', 7),
  singular2ndPerson: Word('распускаешь', 7),
  singular3rdPerson: Word('распускает', 7),
  plural1stPerson: Word('распускаем', 7),
  plural2ndPerson: Word('распускаете', 7),
  plural3rdPerson: Word('распускают', 7),
  masculinePast: Word('распускал', 7),
  femininePast: Word('распускала', 7),
  neuterPast: Word('распускало', 7),
  pluralPast: Word('распускали', 7),
  imperativeInformal: Word('распускай', 7),
  imperativeFormal: Word('распускайте', 7),
  imperfect: [],
};

perfectVerbs.set(распускать.name.text, распускать);

export { распускать };