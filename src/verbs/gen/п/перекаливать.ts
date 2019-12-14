import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекаливать: PerfectVerb = {
  name: Word('перекаливать', 5),
  singular1stPerson: Word('перекаливаю', 5),
  singular2ndPerson: Word('перекаливаешь', 5),
  singular3rdPerson: Word('перекаливает', 5),
  plural1stPerson: Word('перекаливаем', 5),
  plural2ndPerson: Word('перекаливаете', 5),
  plural3rdPerson: Word('перекаливают', 5),
  masculinePast: Word('перекаливал', 5),
  femininePast: Word('перекаливала', 5),
  neuterPast: Word('перекаливало', 5),
  pluralPast: Word('перекаливали', 5),
  imperativeInformal: Word('перекаливай', 5),
  imperativeFormal: Word('перекаливайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекаливать.name.text, перекаливать);

export { перекаливать };