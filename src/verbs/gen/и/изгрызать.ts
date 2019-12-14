import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изгрызать: PerfectVerb = {
  name: Word('изгрызать', 6),
  singular1stPerson: Word('изгрызаю', 6),
  singular2ndPerson: Word('изгрызаешь', 6),
  singular3rdPerson: Word('изгрызает', 6),
  plural1stPerson: Word('изгрызаем', 6),
  plural2ndPerson: Word('изгрызаете', 6),
  plural3rdPerson: Word('изгрызают', 6),
  masculinePast: Word('изгрызал', 6),
  femininePast: Word('изгрызала', 6),
  neuterPast: Word('изгрызало', 6),
  pluralPast: Word('изгрызали', 6),
  imperativeInformal: Word('изгрызай', 6),
  imperativeFormal: Word('изгрызайте', 6),
  imperfect: [],
};

perfectVerbs.set(изгрызать.name.text, изгрызать);

export { изгрызать };