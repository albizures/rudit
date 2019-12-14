import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проведать: PerfectVerb = {
  name: Word('проведать', 4),
  singular1stPerson: Word('проведаю', 4),
  singular2ndPerson: Word('проведаешь', 4),
  singular3rdPerson: Word('проведает', 4),
  plural1stPerson: Word('проведаем', 4),
  plural2ndPerson: Word('проведаете', 4),
  plural3rdPerson: Word('проведают', 4),
  masculinePast: Word('проведал', 4),
  femininePast: Word('проведала', 4),
  neuterPast: Word('проведало', 4),
  pluralPast: Word('проведали', 4),
  imperativeInformal: Word('проведай', 4),
  imperativeFormal: Word('проведайте', 4),
  imperfect: [],
};

perfectVerbs.set(проведать.name.text, проведать);

export { проведать };