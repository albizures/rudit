import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const постигать: PerfectVerb = {
  name: Word('постигать', 6),
  singular1stPerson: Word('постигаю', 6),
  singular2ndPerson: Word('постигаешь', 6),
  singular3rdPerson: Word('постигает', 6),
  plural1stPerson: Word('постигаем', 6),
  plural2ndPerson: Word('постигаете', 6),
  plural3rdPerson: Word('постигают', 6),
  masculinePast: Word('постигал', 6),
  femininePast: Word('постигала', 6),
  neuterPast: Word('постигало', 6),
  pluralPast: Word('постигали', 6),
  imperativeInformal: Word('постигай', 6),
  imperativeFormal: Word('постигайте', 6),
  imperfect: [],
};

perfectVerbs.set(постигать.name.text, постигать);

export { постигать };