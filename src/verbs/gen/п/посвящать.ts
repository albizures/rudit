import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const посвящать: PerfectVerb = {
  name: Word('посвящать', 6),
  singular1stPerson: Word('посвящаю', 6),
  singular2ndPerson: Word('посвящаешь', 6),
  singular3rdPerson: Word('посвящает', 6),
  plural1stPerson: Word('посвящаем', 6),
  plural2ndPerson: Word('посвящаете', 6),
  plural3rdPerson: Word('посвящают', 6),
  masculinePast: Word('посвящал', 6),
  femininePast: Word('посвящала', 6),
  neuterPast: Word('посвящало', 6),
  pluralPast: Word('посвящали', 6),
  imperativeInformal: Word('посвящай', 6),
  imperativeFormal: Word('посвящайте', 6),
  imperfect: ['посвятить'],
};

perfectVerbs.set(посвящать.name.text, посвящать);

export { посвящать };