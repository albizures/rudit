import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const чирикать: PerfectVerb = {
  name: Word('чирикать', 3),
  singular1stPerson: Word('чирикаю', 3),
  singular2ndPerson: Word('чирикаешь', 3),
  singular3rdPerson: Word('чирикает', 3),
  plural1stPerson: Word('чирикаем', 3),
  plural2ndPerson: Word('чирикаете', 3),
  plural3rdPerson: Word('чирикают', 3),
  masculinePast: Word('чирикал', 3),
  femininePast: Word('чирикала', 3),
  neuterPast: Word('чирикало', 3),
  pluralPast: Word('чирикали', 3),
  imperativeInformal: Word('чирикай', 3),
  imperativeFormal: Word('чирикайте', 3),
  imperfect: [],
};

perfectVerbs.set(чирикать.name.text, чирикать);

export { чирикать };