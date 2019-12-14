import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const сгрызать: PerfectVerb = {
  name: Word('сгрызать', 5),
  singular1stPerson: Word('сгрызаю', 5),
  singular2ndPerson: Word('сгрызаешь', 5),
  singular3rdPerson: Word('сгрызает', 5),
  plural1stPerson: Word('сгрызаем', 5),
  plural2ndPerson: Word('сгрызаете', 5),
  plural3rdPerson: Word('сгрызают', 5),
  masculinePast: Word('сгрызал', 5),
  femininePast: Word('сгрызала', 5),
  neuterPast: Word('сгрызало', 5),
  pluralPast: Word('сгрызали', 5),
  imperativeInformal: Word('сгрызай', 5),
  imperativeFormal: Word('сгрызайте', 5),
  imperfect: [],
};

perfectVerbs.set(сгрызать.name.text, сгрызать);

export { сгрызать };