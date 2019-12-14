import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const намотать: PerfectVerb = {
  name: Word('намотать', 5),
  singular1stPerson: Word('намотаю', 5),
  singular2ndPerson: Word('намотаешь', 5),
  singular3rdPerson: Word('намотает', 5),
  plural1stPerson: Word('намотаем', 5),
  plural2ndPerson: Word('намотаете', 5),
  plural3rdPerson: Word('намотают', 5),
  masculinePast: Word('намотал', 5),
  femininePast: Word('намотала', 5),
  neuterPast: Word('намотало', 5),
  pluralPast: Word('намотали', 5),
  imperativeInformal: Word('намотай', 5),
  imperativeFormal: Word('намотайте', 5),
  imperfect: [],
};

perfectVerbs.set(намотать.name.text, намотать);

export { намотать };