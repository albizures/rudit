import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const понуждать: PerfectVerb = {
  name: Word('понуждать', 6),
  singular1stPerson: Word('понуждаю', 6),
  singular2ndPerson: Word('понуждаешь', 6),
  singular3rdPerson: Word('понуждает', 6),
  plural1stPerson: Word('понуждаем', 6),
  plural2ndPerson: Word('понуждаете', 6),
  plural3rdPerson: Word('понуждают', 6),
  masculinePast: Word('понуждал', 6),
  femininePast: Word('понуждала', 6),
  neuterPast: Word('понуждало', 6),
  pluralPast: Word('понуждали', 6),
  imperativeInformal: Word('понуждай', 6),
  imperativeFormal: Word('понуждайте', 6),
  imperfect: [],
};

perfectVerbs.set(понуждать.name.text, понуждать);

export { понуждать };