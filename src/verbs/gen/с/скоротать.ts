import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скоротать: PerfectVerb = {
  name: Word('скоротать', 6),
  singular1stPerson: Word('скоротаю', 6),
  singular2ndPerson: Word('скоротаешь', 6),
  singular3rdPerson: Word('скоротает', 6),
  plural1stPerson: Word('скоротаем', 6),
  plural2ndPerson: Word('скоротаете', 6),
  plural3rdPerson: Word('скоротают', 6),
  masculinePast: Word('скоротал', 6),
  femininePast: Word('скоротала', 6),
  neuterPast: Word('скоротало', 6),
  pluralPast: Word('скоротали', 6),
  imperativeInformal: Word('скоротай', 6),
  imperativeFormal: Word('скоротайте', 6),
  imperfect: [],
};

perfectVerbs.set(скоротать.name.text, скоротать);

export { скоротать };