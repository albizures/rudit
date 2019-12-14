import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const блестеть: PerfectVerb = {
  name: Word('блестеть', 5),
  singular1stPerson: Word('', -1),
  singular2ndPerson: Word('блестишь,бле'щешь', 5),
  singular3rdPerson: Word('блестит,бле'щет', 5),
  plural1stPerson: Word('блестим,бле'щем', 5),
  plural2ndPerson: Word('блестите,бле'щете', 5),
  plural3rdPerson: Word('блестят,бле'щут', 5),
  masculinePast: Word('блестел', 5),
  femininePast: Word('блестела', 5),
  neuterPast: Word('блестело', 5),
  pluralPast: Word('блестели', 5),
  imperativeInformal: Word('блести', 5),
  imperativeFormal: Word('блестите', 5),
  imperfect: ['блеснуть'],
};

perfectVerbs.set(блестеть.name.text, блестеть);

export { блестеть };