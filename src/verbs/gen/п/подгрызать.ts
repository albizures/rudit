import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подгрызать: PerfectVerb = {
  name: Word('подгрызать', 7),
  singular1stPerson: Word('подгрызаю', 7),
  singular2ndPerson: Word('подгрызаешь', 7),
  singular3rdPerson: Word('подгрызает', 7),
  plural1stPerson: Word('подгрызаем', 7),
  plural2ndPerson: Word('подгрызаете', 7),
  plural3rdPerson: Word('подгрызают', 7),
  masculinePast: Word('подгрызал', 7),
  femininePast: Word('подгрызала', 7),
  neuterPast: Word('подгрызало', 7),
  pluralPast: Word('подгрызали', 7),
  imperativeInformal: Word('подгрызай', 7),
  imperativeFormal: Word('подгрызайте', 7),
  imperfect: [],
};

perfectVerbs.set(подгрызать.name.text, подгрызать);

export { подгрызать };