import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отведывать: PerfectVerb = {
  name: Word('отведывать', 3),
  singular1stPerson: Word('отведываю', 3),
  singular2ndPerson: Word('отведываешь', 3),
  singular3rdPerson: Word('отведывает', 3),
  plural1stPerson: Word('отведываем', 3),
  plural2ndPerson: Word('отведываете', 3),
  plural3rdPerson: Word('отведывают', 3),
  masculinePast: Word('отведывал', 3),
  femininePast: Word('отведывала', 3),
  neuterPast: Word('отведывало', 3),
  pluralPast: Word('отведывали', 3),
  imperativeInformal: Word('отведывай', 3),
  imperativeFormal: Word('отведывайте', 3),
  imperfect: [],
};

perfectVerbs.set(отведывать.name.text, отведывать);

export { отведывать };