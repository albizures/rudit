import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const достигать: PerfectVerb = {
  name: Word('достигать', 6),
  singular1stPerson: Word('достигаю', 6),
  singular2ndPerson: Word('достигаешь', 6),
  singular3rdPerson: Word('достигает', 6),
  plural1stPerson: Word('достигаем', 6),
  plural2ndPerson: Word('достигаете', 6),
  plural3rdPerson: Word('достигают', 6),
  masculinePast: Word('достигал', 6),
  femininePast: Word('достигала', 6),
  neuterPast: Word('достигало', 6),
  pluralPast: Word('достигали', 6),
  imperativeInformal: Word('достигай', 6),
  imperativeFormal: Word('достигайте', 6),
  imperfect: ['достичь','достигнуть'],
};

perfectVerbs.set(достигать.name.text, достигать);

export { достигать };