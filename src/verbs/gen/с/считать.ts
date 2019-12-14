import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const считать: PerfectVerb = {
  name: Word('считать', 4),
  singular1stPerson: Word('считаю', 4),
  singular2ndPerson: Word('считаешь', 4),
  singular3rdPerson: Word('считает', 4),
  plural1stPerson: Word('считаем', 4),
  plural2ndPerson: Word('считаете', 4),
  plural3rdPerson: Word('считают', 4),
  masculinePast: Word('считал', 4),
  femininePast: Word('считала', 4),
  neuterPast: Word('считало', 4),
  pluralPast: Word('считали', 4),
  imperativeInformal: Word('считай', 4),
  imperativeFormal: Word('считайте', 4),
  imperfect: ['счесть','посчитать'],
};

perfectVerbs.set(считать.name.text, считать);

export { считать };