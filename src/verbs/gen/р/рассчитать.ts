import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const рассчитать: PerfectVerb = {
  name: Word('рассчитать', 7),
  singular1stPerson: Word('рассчитаю', 7),
  singular2ndPerson: Word('рассчитаешь', 7),
  singular3rdPerson: Word('рассчитает', 7),
  plural1stPerson: Word('рассчитаем', 7),
  plural2ndPerson: Word('рассчитаете', 7),
  plural3rdPerson: Word('рассчитают', 7),
  masculinePast: Word('рассчитал', 7),
  femininePast: Word('рассчитала', 7),
  neuterPast: Word('рассчитало', 7),
  pluralPast: Word('рассчитали', 7),
  imperativeInformal: Word('рассчитай', 7),
  imperativeFormal: Word('рассчитайте', 7),
  imperfect: ['рассчитывать'],
};

perfectVerbs.set(рассчитать.name.text, рассчитать);

export { рассчитать };