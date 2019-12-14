import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сокрушать: PerfectVerb = {
  name: Word('сокрушать', 6),
  singular1stPerson: Word('сокрушаю', 6),
  singular2ndPerson: Word('сокрушаешь', 6),
  singular3rdPerson: Word('сокрушает', 6),
  plural1stPerson: Word('сокрушаем', 6),
  plural2ndPerson: Word('сокрушаете', 6),
  plural3rdPerson: Word('сокрушают', 6),
  masculinePast: Word('сокрушал', 6),
  femininePast: Word('сокрушала', 6),
  neuterPast: Word('сокрушало', 6),
  pluralPast: Word('сокрушали', 6),
  imperativeInformal: Word('сокрушай', 6),
  imperativeFormal: Word('сокрушайте', 6),
  imperfect: [],
};

perfectVerbs.set(сокрушать.name.text, сокрушать);

export { сокрушать };