import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвлекать: PerfectVerb = {
  name: Word('отвлекать', 6),
  singular1stPerson: Word('отвлекаю', 6),
  singular2ndPerson: Word('отвлекаешь', 6),
  singular3rdPerson: Word('отвлекает', 6),
  plural1stPerson: Word('отвлекаем', 6),
  plural2ndPerson: Word('отвлекаете', 6),
  plural3rdPerson: Word('отвлекают', 6),
  masculinePast: Word('отвлекал', 6),
  femininePast: Word('отвлекала', 6),
  neuterPast: Word('отвлекало', 6),
  pluralPast: Word('отвлекали', 6),
  imperativeInformal: Word('отвлекай', 6),
  imperativeFormal: Word('отвлекайте', 6),
  imperfect: ['отвлечь'],
};

perfectVerbs.set(отвлекать.name.text, отвлекать);

export { отвлекать };