import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отодвигать: PerfectVerb = {
  name: Word('отодвигать', 7),
  singular1stPerson: Word('отодвигаю', 7),
  singular2ndPerson: Word('отодвигаешь', 7),
  singular3rdPerson: Word('отодвигает', 7),
  plural1stPerson: Word('отодвигаем', 7),
  plural2ndPerson: Word('отодвигаете', 7),
  plural3rdPerson: Word('отодвигают', 7),
  masculinePast: Word('отодвигал', 7),
  femininePast: Word('отодвигала', 7),
  neuterPast: Word('отодвигало', 7),
  pluralPast: Word('отодвигали', 7),
  imperativeInformal: Word('отодвигай', 7),
  imperativeFormal: Word('отодвигайте', 7),
  imperfect: [],
};

perfectVerbs.set(отодвигать.name.text, отодвигать);

export { отодвигать };