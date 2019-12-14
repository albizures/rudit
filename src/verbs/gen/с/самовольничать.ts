import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const самовольничать: PerfectVerb = {
  name: Word('самовольничать', 5),
  singular1stPerson: Word('самовольничаю', 5),
  singular2ndPerson: Word('самовольничаешь', 5),
  singular3rdPerson: Word('самовольничает', 5),
  plural1stPerson: Word('самовольничаем', 5),
  plural2ndPerson: Word('самовольничаете', 5),
  plural3rdPerson: Word('самовольничают', 5),
  masculinePast: Word('самовольничал', 5),
  femininePast: Word('самовольничала', 5),
  neuterPast: Word('самовольничало', 5),
  pluralPast: Word('самовольничали', 5),
  imperativeInformal: Word('самовольничай', 5),
  imperativeFormal: Word('самовольничайте', 5),
  imperfect: [],
};

perfectVerbs.set(самовольничать.name.text, самовольничать);

export { самовольничать };