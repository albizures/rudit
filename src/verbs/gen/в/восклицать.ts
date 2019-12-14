import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const восклицать: PerfectVerb = {
  name: Word('восклицать', 7),
  singular1stPerson: Word('восклицаю', 7),
  singular2ndPerson: Word('восклицаешь', 7),
  singular3rdPerson: Word('восклицает', 7),
  plural1stPerson: Word('восклицаем', 7),
  plural2ndPerson: Word('восклицаете', 7),
  plural3rdPerson: Word('восклицают', 7),
  masculinePast: Word('восклицал', 7),
  femininePast: Word('восклицала', 7),
  neuterPast: Word('восклицало', 7),
  pluralPast: Word('восклицали', 7),
  imperativeInformal: Word('восклицай', 7),
  imperativeFormal: Word('восклицайте', 7),
  imperfect: ['воскликнуть'],
};

perfectVerbs.set(восклицать.name.text, восклицать);

export { восклицать };