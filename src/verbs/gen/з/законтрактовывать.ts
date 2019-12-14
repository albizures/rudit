import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const законтрактовывать: PerfectVerb = {
  name: Word('законтрактовывать', 10),
  singular1stPerson: Word('законтрактовываю', 10),
  singular2ndPerson: Word('законтрактовываешь', 10),
  singular3rdPerson: Word('законтрактовывает', 10),
  plural1stPerson: Word('законтрактовываем', 10),
  plural2ndPerson: Word('законтрактовываете', 10),
  plural3rdPerson: Word('законтрактовывают', 10),
  masculinePast: Word('законтрактовывал', 10),
  femininePast: Word('законтрактовывала', 10),
  neuterPast: Word('законтрактовывало', 10),
  pluralPast: Word('законтрактовывали', 10),
  imperativeInformal: Word('законтрактовывай', 10),
  imperativeFormal: Word('законтрактовывайте', 10),
  imperfect: [],
};

perfectVerbs.set(законтрактовывать.name.text, законтрактовывать);

export { законтрактовывать };