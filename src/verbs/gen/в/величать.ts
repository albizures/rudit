import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const величать: PerfectVerb = {
  name: Word('величать', 5),
  singular1stPerson: Word('величаю', 5),
  singular2ndPerson: Word('величаешь', 5),
  singular3rdPerson: Word('величает', 5),
  plural1stPerson: Word('величаем', 5),
  plural2ndPerson: Word('величаете', 5),
  plural3rdPerson: Word('величают', 5),
  masculinePast: Word('величал', 5),
  femininePast: Word('величала', 5),
  neuterPast: Word('величало', 5),
  pluralPast: Word('величали', 5),
  imperativeInformal: Word('величай', 5),
  imperativeFormal: Word('величайте', 5),
  imperfect: [],
};

perfectVerbs.set(величать.name.text, величать);

export { величать };