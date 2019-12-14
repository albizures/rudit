import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отжигать: PerfectVerb = {
  name: Word('отжигать', 5),
  singular1stPerson: Word('отжигаю', 5),
  singular2ndPerson: Word('отжигаешь', 5),
  singular3rdPerson: Word('отжигает', 5),
  plural1stPerson: Word('отжигаем', 5),
  plural2ndPerson: Word('отжигаете', 5),
  plural3rdPerson: Word('отжигают', 5),
  masculinePast: Word('отжигал', 5),
  femininePast: Word('отжигала', 5),
  neuterPast: Word('отжигало', 5),
  pluralPast: Word('отжигали', 5),
  imperativeInformal: Word('отжигай', 5),
  imperativeFormal: Word('отжигайте', 5),
  imperfect: ['отжечь'],
};

perfectVerbs.set(отжигать.name.text, отжигать);

export { отжигать };