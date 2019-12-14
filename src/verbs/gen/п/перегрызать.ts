import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const перегрызать: PerfectVerb = {
  name: Word('перегрызать', 8),
  singular1stPerson: Word('перегрызаю', 8),
  singular2ndPerson: Word('перегрызаешь', 8),
  singular3rdPerson: Word('перегрызает', 8),
  plural1stPerson: Word('перегрызаем', 8),
  plural2ndPerson: Word('перегрызаете', 8),
  plural3rdPerson: Word('перегрызают', 8),
  masculinePast: Word('перегрызал', 8),
  femininePast: Word('перегрызала', 8),
  neuterPast: Word('перегрызало', 8),
  pluralPast: Word('перегрызали', 8),
  imperativeInformal: Word('перегрызай', 8),
  imperativeFormal: Word('перегрызайте', 8),
  imperfect: [],
};

perfectVerbs.set(перегрызать.name.text, перегрызать);

export { перегрызать };