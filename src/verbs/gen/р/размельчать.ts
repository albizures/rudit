import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const размельчать: PerfectVerb = {
  name: Word('размельчать', 8),
  singular1stPerson: Word('размельчаю', 8),
  singular2ndPerson: Word('размельчаешь', 8),
  singular3rdPerson: Word('размельчает', 8),
  plural1stPerson: Word('размельчаем', 8),
  plural2ndPerson: Word('размельчаете', 8),
  plural3rdPerson: Word('размельчают', 8),
  masculinePast: Word('размельчал', 8),
  femininePast: Word('размельчала', 8),
  neuterPast: Word('размельчало', 8),
  pluralPast: Word('размельчали', 8),
  imperativeInformal: Word('размельчай', 8),
  imperativeFormal: Word('размельчайте', 8),
  imperfect: [],
};

perfectVerbs.set(размельчать.name.text, размельчать);

export { размельчать };