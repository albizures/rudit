import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const унижать: PerfectVerb = {
  name: Word('унижать', 4),
  singular1stPerson: Word('унижаю', 4),
  singular2ndPerson: Word('унижаешь', 4),
  singular3rdPerson: Word('унижает', 4),
  plural1stPerson: Word('унижаем', 4),
  plural2ndPerson: Word('унижаете', 4),
  plural3rdPerson: Word('унижают', 4),
  masculinePast: Word('унижал', 4),
  femininePast: Word('унижала', 4),
  neuterPast: Word('унижало', 4),
  pluralPast: Word('унижали', 4),
  imperativeInformal: Word('унижай', 4),
  imperativeFormal: Word('унижайте', 4),
  imperfect: ['унизить'],
};

perfectVerbs.set(унижать.name.text, унижать);

export { унижать };