import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрисовывать: PerfectVerb = {
  name: Word('изрисовывать', 5),
  singular1stPerson: Word('изрисовываю', 5),
  singular2ndPerson: Word('изрисовываешь', 5),
  singular3rdPerson: Word('изрисовывает', 5),
  plural1stPerson: Word('изрисовываем', 5),
  plural2ndPerson: Word('изрисовываете', 5),
  plural3rdPerson: Word('изрисовывают', 5),
  masculinePast: Word('изрисовывал', 5),
  femininePast: Word('изрисовывала', 5),
  neuterPast: Word('изрисовывало', 5),
  pluralPast: Word('изрисовывали', 5),
  imperativeInformal: Word('изрисовывай', 5),
  imperativeFormal: Word('изрисовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(изрисовывать.name.text, изрисовывать);

export { изрисовывать };