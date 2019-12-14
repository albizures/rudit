import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const приручать: PerfectVerb = {
  name: Word('приручать', 6),
  singular1stPerson: Word('приручаю', 6),
  singular2ndPerson: Word('приручаешь', 6),
  singular3rdPerson: Word('приручает', 6),
  plural1stPerson: Word('приручаем', 6),
  plural2ndPerson: Word('приручаете', 6),
  plural3rdPerson: Word('приручают', 6),
  masculinePast: Word('приручал', 6),
  femininePast: Word('приручала', 6),
  neuterPast: Word('приручало', 6),
  pluralPast: Word('приручали', 6),
  imperativeInformal: Word('приручай', 6),
  imperativeFormal: Word('приручайте', 6),
  imperfect: [],
};

perfectVerbs.set(приручать.name.text, приручать);

export { приручать };