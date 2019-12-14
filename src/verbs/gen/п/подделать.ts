import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подделать: PerfectVerb = {
  name: Word('подделать', 4),
  singular1stPerson: Word('подделаю', 4),
  singular2ndPerson: Word('подделаешь', 4),
  singular3rdPerson: Word('подделает', 4),
  plural1stPerson: Word('подделаем', 4),
  plural2ndPerson: Word('подделаете', 4),
  plural3rdPerson: Word('подделают', 4),
  masculinePast: Word('подделал', 4),
  femininePast: Word('подделала', 4),
  neuterPast: Word('подделало', 4),
  pluralPast: Word('подделали', 4),
  imperativeInformal: Word('подделай', 4),
  imperativeFormal: Word('подделайте', 4),
  imperfect: [],
};

perfectVerbs.set(подделать.name.text, подделать);

export { подделать };