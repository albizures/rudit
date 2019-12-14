import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const воздвигать: PerfectVerb = {
  name: Word('воздвигать', 7),
  singular1stPerson: Word('воздвигаю', 7),
  singular2ndPerson: Word('воздвигаешь', 7),
  singular3rdPerson: Word('воздвигает', 7),
  plural1stPerson: Word('воздвигаем', 7),
  plural2ndPerson: Word('воздвигаете', 7),
  plural3rdPerson: Word('воздвигают', 7),
  masculinePast: Word('воздвигал', 7),
  femininePast: Word('воздвигала', 7),
  neuterPast: Word('воздвигало', 7),
  pluralPast: Word('воздвигали', 7),
  imperativeInformal: Word('воздвигай', 7),
  imperativeFormal: Word('воздвигайте', 7),
  imperfect: [],
};

perfectVerbs.set(воздвигать.name.text, воздвигать);

export { воздвигать };