import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замигать: PerfectVerb = {
  name: Word('замигать', 5),
  singular1stPerson: Word('замигаю', 5),
  singular2ndPerson: Word('замигаешь', 5),
  singular3rdPerson: Word('замигает', 5),
  plural1stPerson: Word('замигаем', 5),
  plural2ndPerson: Word('замигаете', 5),
  plural3rdPerson: Word('замигают', 5),
  masculinePast: Word('замигал', 5),
  femininePast: Word('замигала', 5),
  neuterPast: Word('замигало', 5),
  pluralPast: Word('замигали', 5),
  imperativeInformal: Word('замигай', 5),
  imperativeFormal: Word('замигайте', 5),
  imperfect: [],
};

perfectVerbs.set(замигать.name.text, замигать);

export { замигать };