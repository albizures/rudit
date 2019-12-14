import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приспосабливать: PerfectVerb = {
  name: Word('приспосабливать', 7),
  singular1stPerson: Word('приспосабливаю', 7),
  singular2ndPerson: Word('приспосабливаешь', 7),
  singular3rdPerson: Word('приспосабливает', 7),
  plural1stPerson: Word('приспосабливаем', 7),
  plural2ndPerson: Word('приспосабливаете', 7),
  plural3rdPerson: Word('приспосабливают', 7),
  masculinePast: Word('приспосабливал', 7),
  femininePast: Word('приспосабливала', 7),
  neuterPast: Word('приспосабливало', 7),
  pluralPast: Word('приспосабливали', 7),
  imperativeInformal: Word('приспосабливай', 7),
  imperativeFormal: Word('приспосабливайте', 7),
  imperfect: ['приспособить'],
};

perfectVerbs.set(приспосабливать.name.text, приспосабливать);

export { приспосабливать };