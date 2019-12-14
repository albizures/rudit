import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подчищать: PerfectVerb = {
  name: Word('подчищать', 6),
  singular1stPerson: Word('подчищаю', 6),
  singular2ndPerson: Word('подчищаешь', 6),
  singular3rdPerson: Word('подчищает', 6),
  plural1stPerson: Word('подчищаем', 6),
  plural2ndPerson: Word('подчищаете', 6),
  plural3rdPerson: Word('подчищают', 6),
  masculinePast: Word('подчищал', 6),
  femininePast: Word('подчищала', 6),
  neuterPast: Word('подчищало', 6),
  pluralPast: Word('подчищали', 6),
  imperativeInformal: Word('подчищай', 6),
  imperativeFormal: Word('подчищайте', 6),
  imperfect: [],
};

perfectVerbs.set(подчищать.name.text, подчищать);

export { подчищать };