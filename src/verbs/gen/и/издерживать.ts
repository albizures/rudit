import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const издерживать: PerfectVerb = {
  name: Word('издерживать', 3),
  singular1stPerson: Word('издерживаю', 3),
  singular2ndPerson: Word('издерживаешь', 3),
  singular3rdPerson: Word('издерживает', 3),
  plural1stPerson: Word('издерживаем', 3),
  plural2ndPerson: Word('издерживаете', 3),
  plural3rdPerson: Word('издерживают', 3),
  masculinePast: Word('издерживал', 3),
  femininePast: Word('издерживала', 3),
  neuterPast: Word('издерживало', 3),
  pluralPast: Word('издерживали', 3),
  imperativeInformal: Word('издерживай', 3),
  imperativeFormal: Word('издерживайте', 3),
  imperfect: [],
};

perfectVerbs.set(издерживать.name.text, издерживать);

export { издерживать };