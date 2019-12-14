import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утруждать: PerfectVerb = {
  name: Word('утруждать', 6),
  singular1stPerson: Word('утруждаю', 6),
  singular2ndPerson: Word('утруждаешь', 6),
  singular3rdPerson: Word('утруждает', 6),
  plural1stPerson: Word('утруждаем', 6),
  plural2ndPerson: Word('утруждаете', 6),
  plural3rdPerson: Word('утруждают', 6),
  masculinePast: Word('утруждал', 6),
  femininePast: Word('утруждала', 6),
  neuterPast: Word('утруждало', 6),
  pluralPast: Word('утруждали', 6),
  imperativeInformal: Word('утруждай', 6),
  imperativeFormal: Word('утруждайте', 6),
  imperfect: [],
};

perfectVerbs.set(утруждать.name.text, утруждать);

export { утруждать };