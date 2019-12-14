import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const созидать: PerfectVerb = {
  name: Word('созидать', 5),
  singular1stPerson: Word('созидаю', 5),
  singular2ndPerson: Word('созидаешь', 5),
  singular3rdPerson: Word('созидает', 5),
  plural1stPerson: Word('созидаем', 5),
  plural2ndPerson: Word('созидаете', 5),
  plural3rdPerson: Word('созидают', 5),
  masculinePast: Word('созидал', 5),
  femininePast: Word('созидала', 5),
  neuterPast: Word('созидало', 5),
  pluralPast: Word('созидали', 5),
  imperativeInformal: Word('созидай', 5),
  imperativeFormal: Word('созидайте', 5),
  imperfect: [],
};

perfectVerbs.set(созидать.name.text, созидать);

export { созидать };