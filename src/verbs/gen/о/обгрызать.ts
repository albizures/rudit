import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обгрызать: PerfectVerb = {
  name: Word('обгрызать', 6),
  singular1stPerson: Word('обгрызаю', 6),
  singular2ndPerson: Word('обгрызаешь', 6),
  singular3rdPerson: Word('обгрызает', 6),
  plural1stPerson: Word('обгрызаем', 6),
  plural2ndPerson: Word('обгрызаете', 6),
  plural3rdPerson: Word('обгрызают', 6),
  masculinePast: Word('обгрызал', 6),
  femininePast: Word('обгрызала', 6),
  neuterPast: Word('обгрызало', 6),
  pluralPast: Word('обгрызали', 6),
  imperativeInformal: Word('обгрызай', 6),
  imperativeFormal: Word('обгрызайте', 6),
  imperfect: [],
};

perfectVerbs.set(обгрызать.name.text, обгрызать);

export { обгрызать };