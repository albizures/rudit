import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const нацеливать: PerfectVerb = {
  name: Word('нацеливать', 3),
  singular1stPerson: Word('нацеливаю', 3),
  singular2ndPerson: Word('нацеливаешь', 3),
  singular3rdPerson: Word('нацеливает', 3),
  plural1stPerson: Word('нацеливаем', 3),
  plural2ndPerson: Word('нацеливаете', 3),
  plural3rdPerson: Word('нацеливают', 3),
  masculinePast: Word('нацеливал', 3),
  femininePast: Word('нацеливала', 3),
  neuterPast: Word('нацеливало', 3),
  pluralPast: Word('нацеливали', 3),
  imperativeInformal: Word('нацеливай', 3),
  imperativeFormal: Word('нацеливайте', 3),
  imperfect: ['нацелить'],
};

perfectVerbs.set(нацеливать.name.text, нацеливать);

export { нацеливать };