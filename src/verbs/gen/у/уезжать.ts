import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уезжать: PerfectVerb = {
  name: Word('уезжать', 4),
  singular1stPerson: Word('уезжаю', 4),
  singular2ndPerson: Word('уезжаешь', 4),
  singular3rdPerson: Word('уезжает', 4),
  plural1stPerson: Word('уезжаем', 4),
  plural2ndPerson: Word('уезжаете', 4),
  plural3rdPerson: Word('уезжают', 4),
  masculinePast: Word('уезжал', 4),
  femininePast: Word('уезжала', 4),
  neuterPast: Word('уезжало', 4),
  pluralPast: Word('уезжали', 4),
  imperativeInformal: Word('уезжай', 4),
  imperativeFormal: Word('уезжайте', 4),
  imperfect: ['уехать'],
};

perfectVerbs.set(уезжать.name.text, уезжать);

export { уезжать };