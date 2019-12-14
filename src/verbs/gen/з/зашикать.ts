import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зашикать: PerfectVerb = {
  name: Word('зашикать', 3),
  singular1stPerson: Word('зашикаю', 3),
  singular2ndPerson: Word('зашикаешь', 3),
  singular3rdPerson: Word('зашикает', 3),
  plural1stPerson: Word('зашикаем', 3),
  plural2ndPerson: Word('зашикаете', 3),
  plural3rdPerson: Word('зашикают', 3),
  masculinePast: Word('зашикал', 3),
  femininePast: Word('зашикала', 3),
  neuterPast: Word('зашикало', 3),
  pluralPast: Word('зашикали', 3),
  imperativeInformal: Word('зашикай', 3),
  imperativeFormal: Word('зашикайте', 3),
  imperfect: [],
};

perfectVerbs.set(зашикать.name.text, зашикать);

export { зашикать };