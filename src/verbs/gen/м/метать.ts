import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const метать: PerfectVerb = {
  name: Word('метать', 3),
  singular1stPerson: Word('метаю', 3),
  singular2ndPerson: Word('метаешь', 3),
  singular3rdPerson: Word('метает', 3),
  plural1stPerson: Word('метаем', 3),
  plural2ndPerson: Word('метаете', 3),
  plural3rdPerson: Word('метают', 3),
  masculinePast: Word('метал', 3),
  femininePast: Word('метала', 3),
  neuterPast: Word('метало', 3),
  pluralPast: Word('метали', 3),
  imperativeInformal: Word('метай', 3),
  imperativeFormal: Word('метайте', 3),
  imperfect: [],
};

perfectVerbs.set(метать.name.text, метать);

export { метать };