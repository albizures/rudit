import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перекармливать: PerfectVerb = {
  name: Word('перекармливать', 5),
  singular1stPerson: Word('перекармливаю', 5),
  singular2ndPerson: Word('перекармливаешь', 5),
  singular3rdPerson: Word('перекармливает', 5),
  plural1stPerson: Word('перекармливаем', 5),
  plural2ndPerson: Word('перекармливаете', 5),
  plural3rdPerson: Word('перекармливают', 5),
  masculinePast: Word('перекармливал', 5),
  femininePast: Word('перекармливала', 5),
  neuterPast: Word('перекармливало', 5),
  pluralPast: Word('перекармливали', 5),
  imperativeInformal: Word('перекармливай', 5),
  imperativeFormal: Word('перекармливайте', 5),
  imperfect: [],
};

perfectVerbs.set(перекармливать.name.text, перекармливать);

export { перекармливать };