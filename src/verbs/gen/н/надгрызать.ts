import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const надгрызать: PerfectVerb = {
  name: Word('надгрызать', 7),
  singular1stPerson: Word('надгрызаю', 7),
  singular2ndPerson: Word('надгрызаешь', 7),
  singular3rdPerson: Word('надгрызает', 7),
  plural1stPerson: Word('надгрызаем', 7),
  plural2ndPerson: Word('надгрызаете', 7),
  plural3rdPerson: Word('надгрызают', 7),
  masculinePast: Word('надгрызал', 7),
  femininePast: Word('надгрызала', 7),
  neuterPast: Word('надгрызало', 7),
  pluralPast: Word('надгрызали', 7),
  imperativeInformal: Word('надгрызай', 7),
  imperativeFormal: Word('надгрызайте', 7),
  imperfect: [],
};

perfectVerbs.set(надгрызать.name.text, надгрызать);

export { надгрызать };