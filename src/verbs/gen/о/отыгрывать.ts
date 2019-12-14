import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отыгрывать: PerfectVerb = {
  name: Word('отыгрывать', 2),
  singular1stPerson: Word('отыгрываю', 2),
  singular2ndPerson: Word('отыгрываешь', 2),
  singular3rdPerson: Word('отыгрывает', 2),
  plural1stPerson: Word('отыгрываем', 2),
  plural2ndPerson: Word('отыгрываете', 2),
  plural3rdPerson: Word('отыгрывают', 2),
  masculinePast: Word('отыгрывал', 2),
  femininePast: Word('отыгрывала', 2),
  neuterPast: Word('отыгрывало', 2),
  pluralPast: Word('отыгрывали', 2),
  imperativeInformal: Word('отыгрывай', 2),
  imperativeFormal: Word('отыгрывайте', 2),
  imperfect: [],
};

perfectVerbs.set(отыгрывать.name.text, отыгрывать);

export { отыгрывать };