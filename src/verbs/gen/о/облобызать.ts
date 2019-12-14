import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облобызать: PerfectVerb = {
  name: Word('облобызать', 7),
  singular1stPerson: Word('облобызаю', 7),
  singular2ndPerson: Word('облобызаешь', 7),
  singular3rdPerson: Word('облобызает', 7),
  plural1stPerson: Word('облобызаем', 7),
  plural2ndPerson: Word('облобызаете', 7),
  plural3rdPerson: Word('облобызают', 7),
  masculinePast: Word('облобызал', 7),
  femininePast: Word('облобызала', 7),
  neuterPast: Word('облобызало', 7),
  pluralPast: Word('облобызали', 7),
  imperativeInformal: Word('облобызай', 7),
  imperativeFormal: Word('облобызайте', 7),
  imperfect: [],
};

perfectVerbs.set(облобызать.name.text, облобызать);

export { облобызать };