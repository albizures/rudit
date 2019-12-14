import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const хихикать: PerfectVerb = {
  name: Word('хихикать', 3),
  singular1stPerson: Word('хихикаю', 3),
  singular2ndPerson: Word('хихикаешь', 3),
  singular3rdPerson: Word('хихикает', 3),
  plural1stPerson: Word('хихикаем', 3),
  plural2ndPerson: Word('хихикаете', 3),
  plural3rdPerson: Word('хихикают', 3),
  masculinePast: Word('хихикал', 3),
  femininePast: Word('хихикала', 3),
  neuterPast: Word('хихикало', 3),
  pluralPast: Word('хихикали', 3),
  imperativeInformal: Word('хихикай', 3),
  imperativeFormal: Word('хихикайте', 3),
  imperfect: [],
};

perfectVerbs.set(хихикать.name.text, хихикать);

export { хихикать };