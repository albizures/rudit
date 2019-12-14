import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогрызать: PerfectVerb = {
  name: Word('прогрызать', 7),
  singular1stPerson: Word('прогрызаю', 7),
  singular2ndPerson: Word('прогрызаешь', 7),
  singular3rdPerson: Word('прогрызает', 7),
  plural1stPerson: Word('прогрызаем', 7),
  plural2ndPerson: Word('прогрызаете', 7),
  plural3rdPerson: Word('прогрызают', 7),
  masculinePast: Word('прогрызал', 7),
  femininePast: Word('прогрызала', 7),
  neuterPast: Word('прогрызало', 7),
  pluralPast: Word('прогрызали', 7),
  imperativeInformal: Word('прогрызай', 7),
  imperativeFormal: Word('прогрызайте', 7),
  imperfect: [],
};

perfectVerbs.set(прогрызать.name.text, прогрызать);

export { прогрызать };