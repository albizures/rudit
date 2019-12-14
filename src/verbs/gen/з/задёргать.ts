import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задёргать: PerfectVerb = {
  name: Word('задёргать', 3),
  singular1stPerson: Word('задёргаю', 3),
  singular2ndPerson: Word('задёргаешь', 3),
  singular3rdPerson: Word('задёргает', 3),
  plural1stPerson: Word('задёргаем', 3),
  plural2ndPerson: Word('задёргаете', 3),
  plural3rdPerson: Word('задёргают', 3),
  masculinePast: Word('задёргал', 3),
  femininePast: Word('задёргала', 3),
  neuterPast: Word('задёргало', 3),
  pluralPast: Word('задёргали', 3),
  imperativeInformal: Word('задёргай', 3),
  imperativeFormal: Word('задёргайте', 3),
  imperfect: [],
};

perfectVerbs.set(задёргать.name.text, задёргать);

export { задёргать };