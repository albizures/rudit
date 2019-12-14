import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрывать: PerfectVerb = {
  name: Word('изрывать', 5),
  singular1stPerson: Word('изрываю', 5),
  singular2ndPerson: Word('изрываешь', 5),
  singular3rdPerson: Word('изрывает', 5),
  plural1stPerson: Word('изрываем', 5),
  plural2ndPerson: Word('изрываете', 5),
  plural3rdPerson: Word('изрывают', 5),
  masculinePast: Word('изрывал', 5),
  femininePast: Word('изрывала', 5),
  neuterPast: Word('изрывало', 5),
  pluralPast: Word('изрывали', 5),
  imperativeInformal: Word('изрывай', 5),
  imperativeFormal: Word('изрывайте', 5),
  imperfect: [],
};

perfectVerbs.set(изрывать.name.text, изрывать);

export { изрывать };