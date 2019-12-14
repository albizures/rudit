import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отгрызать: PerfectVerb = {
  name: Word('отгрызать', 6),
  singular1stPerson: Word('отгрызаю', 6),
  singular2ndPerson: Word('отгрызаешь', 6),
  singular3rdPerson: Word('отгрызает', 6),
  plural1stPerson: Word('отгрызаем', 6),
  plural2ndPerson: Word('отгрызаете', 6),
  plural3rdPerson: Word('отгрызают', 6),
  masculinePast: Word('отгрызал', 6),
  femininePast: Word('отгрызала', 6),
  neuterPast: Word('отгрызало', 6),
  pluralPast: Word('отгрызали', 6),
  imperativeInformal: Word('отгрызай', 6),
  imperativeFormal: Word('отгрызайте', 6),
  imperfect: [],
};

perfectVerbs.set(отгрызать.name.text, отгрызать);

export { отгрызать };