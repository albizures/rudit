import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блистать: PerfectVerb = {
  name: Word('блистать', 5),
  singular1stPerson: Word('блистаю,блещу'', 5),
  singular2ndPerson: Word('блистаешь,бле'щешь', 5),
  singular3rdPerson: Word('блистает,бле'щет', 5),
  plural1stPerson: Word('блистаем,бле'щем', 5),
  plural2ndPerson: Word('блистаете,бле'щете', 5),
  plural3rdPerson: Word('блистают,бле'щут', 5),
  masculinePast: Word('блистал', 5),
  femininePast: Word('блистала', 5),
  neuterPast: Word('блистало', 5),
  pluralPast: Word('блистали', 5),
  imperativeInformal: Word('блистай', 5),
  imperativeFormal: Word('блистайте', 5),
  imperfect: ['блеснуть'],
};

perfectVerbs.set(блистать.name.text, блистать);

export { блистать };