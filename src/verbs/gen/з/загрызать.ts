import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const загрызать: PerfectVerb = {
  name: Word('загрызать', 6),
  singular1stPerson: Word('загрызаю', 6),
  singular2ndPerson: Word('загрызаешь', 6),
  singular3rdPerson: Word('загрызает', 6),
  plural1stPerson: Word('загрызаем', 6),
  plural2ndPerson: Word('загрызаете', 6),
  plural3rdPerson: Word('загрызают', 6),
  masculinePast: Word('загрызал', 6),
  femininePast: Word('загрызала', 6),
  neuterPast: Word('загрызало', 6),
  pluralPast: Word('загрызали', 6),
  imperativeInformal: Word('загрызай', 6),
  imperativeFormal: Word('загрызайте', 6),
  imperfect: [],
};

perfectVerbs.set(загрызать.name.text, загрызать);

export { загрызать };