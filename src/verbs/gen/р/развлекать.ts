import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const развлекать: PerfectVerb = {
  name: Word('развлекать', 7),
  singular1stPerson: Word('развлекаю', 7),
  singular2ndPerson: Word('развлекаешь', 7),
  singular3rdPerson: Word('развлекает', 7),
  plural1stPerson: Word('развлекаем', 7),
  plural2ndPerson: Word('развлекаете', 7),
  plural3rdPerson: Word('развлекают', 7),
  masculinePast: Word('развлекал', 7),
  femininePast: Word('развлекала', 7),
  neuterPast: Word('развлекало', 7),
  pluralPast: Word('развлекали', 7),
  imperativeInformal: Word('развлекай', 7),
  imperativeFormal: Word('развлекайте', 7),
  imperfect: ['развлечь'],
};

perfectVerbs.set(развлекать.name.text, развлекать);

export { развлекать };