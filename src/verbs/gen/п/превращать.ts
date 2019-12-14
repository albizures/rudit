import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const превращать: PerfectVerb = {
  name: Word('превращать', 7),
  singular1stPerson: Word('превращаю', 7),
  singular2ndPerson: Word('превращаешь', 7),
  singular3rdPerson: Word('превращает', 7),
  plural1stPerson: Word('превращаем', 7),
  plural2ndPerson: Word('превращаете', 7),
  plural3rdPerson: Word('превращают', 7),
  masculinePast: Word('превращал', 7),
  femininePast: Word('превращала', 7),
  neuterPast: Word('превращало', 7),
  pluralPast: Word('превращали', 7),
  imperativeInformal: Word('превращай', 7),
  imperativeFormal: Word('превращайте', 7),
  imperfect: [],
};

perfectVerbs.set(превращать.name.text, превращать);

export { превращать };