import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выгрызать: PerfectVerb = {
  name: Word('выгрызать', 6),
  singular1stPerson: Word('выгрызаю', 6),
  singular2ndPerson: Word('выгрызаешь', 6),
  singular3rdPerson: Word('выгрызает', 6),
  plural1stPerson: Word('выгрызаем', 6),
  plural2ndPerson: Word('выгрызаете', 6),
  plural3rdPerson: Word('выгрызают', 6),
  masculinePast: Word('выгрызал', 6),
  femininePast: Word('выгрызала', 6),
  neuterPast: Word('выгрызало', 6),
  pluralPast: Word('выгрызали', 6),
  imperativeInformal: Word('выгрызай', 6),
  imperativeFormal: Word('выгрызайте', 6),
  imperfect: [],
};

perfectVerbs.set(выгрызать.name.text, выгрызать);

export { выгрызать };