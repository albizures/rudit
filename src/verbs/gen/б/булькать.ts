import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const булькать: PerfectVerb = {
  name: Word('булькать', 1),
  singular1stPerson: Word('булькаю', 1),
  singular2ndPerson: Word('булькаешь', 1),
  singular3rdPerson: Word('булькает', 1),
  plural1stPerson: Word('булькаем', 1),
  plural2ndPerson: Word('булькаете', 1),
  plural3rdPerson: Word('булькают', 1),
  masculinePast: Word('булькал', 1),
  femininePast: Word('булькала', 1),
  neuterPast: Word('булькало', 1),
  pluralPast: Word('булькали', 1),
  imperativeInformal: Word('булькай', 1),
  imperativeFormal: Word('булькайте', 1),
  imperfect: ['булькнуть'],
};

perfectVerbs.set(булькать.name.text, булькать);

export { булькать };