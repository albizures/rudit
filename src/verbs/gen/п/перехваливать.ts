import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перехваливать: PerfectVerb = {
  name: Word('перехваливать', 6),
  singular1stPerson: Word('перехваливаю', 6),
  singular2ndPerson: Word('перехваливаешь', 6),
  singular3rdPerson: Word('перехваливает', 6),
  plural1stPerson: Word('перехваливаем', 6),
  plural2ndPerson: Word('перехваливаете', 6),
  plural3rdPerson: Word('перехваливают', 6),
  masculinePast: Word('перехваливал', 6),
  femininePast: Word('перехваливала', 6),
  neuterPast: Word('перехваливало', 6),
  pluralPast: Word('перехваливали', 6),
  imperativeInformal: Word('перехваливай', 6),
  imperativeFormal: Word('перехваливайте', 6),
  imperfect: [],
};

perfectVerbs.set(перехваливать.name.text, перехваливать);

export { перехваливать };