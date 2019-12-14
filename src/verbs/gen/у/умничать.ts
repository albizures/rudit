import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const умничать: PerfectVerb = {
  name: Word('умничать', 0),
  singular1stPerson: Word('умничаю', 0),
  singular2ndPerson: Word('умничаешь', 0),
  singular3rdPerson: Word('умничает', 0),
  plural1stPerson: Word('умничаем', 0),
  plural2ndPerson: Word('умничаете', 0),
  plural3rdPerson: Word('умничают', 0),
  masculinePast: Word('умничал', 0),
  femininePast: Word('умничала', 0),
  neuterPast: Word('умничало', 0),
  pluralPast: Word('умничали', 0),
  imperativeInformal: Word('умничай', 0),
  imperativeFormal: Word('умничайте', 0),
  imperfect: [],
};

perfectVerbs.set(умничать.name.text, умничать);

export { умничать };