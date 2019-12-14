import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const извлекать: PerfectVerb = {
  name: Word('извлекать', 6),
  singular1stPerson: Word('извлекаю', 6),
  singular2ndPerson: Word('извлекаешь', 6),
  singular3rdPerson: Word('извлекает', 6),
  plural1stPerson: Word('извлекаем', 6),
  plural2ndPerson: Word('извлекаете', 6),
  plural3rdPerson: Word('извлекают', 6),
  masculinePast: Word('извлекал', 6),
  femininePast: Word('извлекала', 6),
  neuterPast: Word('извлекало', 6),
  pluralPast: Word('извлекали', 6),
  imperativeInformal: Word('извлекай', 6),
  imperativeFormal: Word('извлекайте', 6),
  imperfect: ['извлечь'],
};

perfectVerbs.set(извлекать.name.text, извлекать);

export { извлекать };