import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const передвигать: PerfectVerb = {
  name: Word('передвигать', 8),
  singular1stPerson: Word('передвигаю', 8),
  singular2ndPerson: Word('передвигаешь', 8),
  singular3rdPerson: Word('передвигает', 8),
  plural1stPerson: Word('передвигаем', 8),
  plural2ndPerson: Word('передвигаете', 8),
  plural3rdPerson: Word('передвигают', 8),
  masculinePast: Word('передвигал', 8),
  femininePast: Word('передвигала', 8),
  neuterPast: Word('передвигало', 8),
  pluralPast: Word('передвигали', 8),
  imperativeInformal: Word('передвигай', 8),
  imperativeFormal: Word('передвигайте', 8),
  imperfect: [],
};

perfectVerbs.set(передвигать.name.text, передвигать);

export { передвигать };