import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уломать: PerfectVerb = {
  name: Word('уломать', 4),
  singular1stPerson: Word('уломаю', 4),
  singular2ndPerson: Word('уломаешь', 4),
  singular3rdPerson: Word('уломает', 4),
  plural1stPerson: Word('уломаем', 4),
  plural2ndPerson: Word('уломаете', 4),
  plural3rdPerson: Word('уломают', 4),
  masculinePast: Word('уломал', 4),
  femininePast: Word('уломала', 4),
  neuterPast: Word('уломало', 4),
  pluralPast: Word('уломали', 4),
  imperativeInformal: Word('уломай', 4),
  imperativeFormal: Word('уломайте', 4),
  imperfect: [],
};

perfectVerbs.set(уломать.name.text, уломать);

export { уломать };