import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выручать: PerfectVerb = {
  name: Word('выручать', 5),
  singular1stPerson: Word('выручаю', 5),
  singular2ndPerson: Word('выручаешь', 5),
  singular3rdPerson: Word('выручает', 5),
  plural1stPerson: Word('выручаем', 5),
  plural2ndPerson: Word('выручаете', 5),
  plural3rdPerson: Word('выручают', 5),
  masculinePast: Word('выручал', 5),
  femininePast: Word('выручала', 5),
  neuterPast: Word('выручало', 5),
  pluralPast: Word('выручали', 5),
  imperativeInformal: Word('выручай', 5),
  imperativeFormal: Word('выручайте', 5),
  imperfect: [],
};

perfectVerbs.set(выручать.name.text, выручать);

export { выручать };