import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const водружать: PerfectVerb = {
  name: Word('водружать', 6),
  singular1stPerson: Word('водружаю', 6),
  singular2ndPerson: Word('водружаешь', 6),
  singular3rdPerson: Word('водружает', 6),
  plural1stPerson: Word('водружаем', 6),
  plural2ndPerson: Word('водружаете', 6),
  plural3rdPerson: Word('водружают', 6),
  masculinePast: Word('водружал', 6),
  femininePast: Word('водружала', 6),
  neuterPast: Word('водружало', 6),
  pluralPast: Word('водружали', 6),
  imperativeInformal: Word('водружай', 6),
  imperativeFormal: Word('водружайте', 6),
  imperfect: [],
};

perfectVerbs.set(водружать.name.text, водружать);

export { водружать };