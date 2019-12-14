import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сигать: PerfectVerb = {
  name: Word('сигать', 3),
  singular1stPerson: Word('сигаю', 3),
  singular2ndPerson: Word('сигаешь', 3),
  singular3rdPerson: Word('сигает', 3),
  plural1stPerson: Word('сигаем', 3),
  plural2ndPerson: Word('сигаете', 3),
  plural3rdPerson: Word('сигают', 3),
  masculinePast: Word('сигал', 3),
  femininePast: Word('сигала', 3),
  neuterPast: Word('сигало', 3),
  pluralPast: Word('сигали', 3),
  imperativeInformal: Word('сигай', 3),
  imperativeFormal: Word('сигайте', 3),
  imperfect: ['сигануть'],
};

perfectVerbs.set(сигать.name.text, сигать);

export { сигать };