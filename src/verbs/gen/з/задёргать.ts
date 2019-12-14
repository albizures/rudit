import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задёргать: PerfectVerb = {
  name: Word('задёргать', 1),
  singular1stPerson: Word('задёргаю', 1),
  singular2ndPerson: Word('задёргаешь', 1),
  singular3rdPerson: Word('задёргает', 1),
  plural1stPerson: Word('задёргаем', 1),
  plural2ndPerson: Word('задёргаете', 1),
  plural3rdPerson: Word('задёргают', 1),
  masculinePast: Word('задёргал', 1),
  femininePast: Word('задёргала', 1),
  neuterPast: Word('задёргало', 1),
  pluralPast: Word('задёргали', 1),
  imperativeInformal: Word('задёргай', 1),
  imperativeFormal: Word('задёргайте', 1),
  imperfect: [],
};

perfectVerbs.set(задёргать.name.text, задёргать);

export { задёргать };