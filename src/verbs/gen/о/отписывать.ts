import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отписывать: PerfectVerb = {
  name: Word('отписывать', 3),
  singular1stPerson: Word('отписываю', 3),
  singular2ndPerson: Word('отписываешь', 3),
  singular3rdPerson: Word('отписывает', 3),
  plural1stPerson: Word('отписываем', 3),
  plural2ndPerson: Word('отписываете', 3),
  plural3rdPerson: Word('отписывают', 3),
  masculinePast: Word('отписывал', 3),
  femininePast: Word('отписывала', 3),
  neuterPast: Word('отписывало', 3),
  pluralPast: Word('отписывали', 3),
  imperativeInformal: Word('отписывай', 3),
  imperativeFormal: Word('отписывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отписывать.name.text, отписывать);

export { отписывать };