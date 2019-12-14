import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const поджигать: PerfectVerb = {
  name: Word('поджигать', 6),
  singular1stPerson: Word('поджигаю', 6),
  singular2ndPerson: Word('поджигаешь', 6),
  singular3rdPerson: Word('поджигает', 6),
  plural1stPerson: Word('поджигаем', 6),
  plural2ndPerson: Word('поджигаете', 6),
  plural3rdPerson: Word('поджигают', 6),
  masculinePast: Word('поджигал', 6),
  femininePast: Word('поджигала', 6),
  neuterPast: Word('поджигало', 6),
  pluralPast: Word('поджигали', 6),
  imperativeInformal: Word('поджигай', 6),
  imperativeFormal: Word('поджигайте', 6),
  imperfect: ['поджечь'],
};

perfectVerbs.set(поджигать.name.text, поджигать);

export { поджигать };