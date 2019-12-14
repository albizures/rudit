import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разгрызать: PerfectVerb = {
  name: Word('разгрызать', 7),
  singular1stPerson: Word('разгрызаю', 7),
  singular2ndPerson: Word('разгрызаешь', 7),
  singular3rdPerson: Word('разгрызает', 7),
  plural1stPerson: Word('разгрызаем', 7),
  plural2ndPerson: Word('разгрызаете', 7),
  plural3rdPerson: Word('разгрызают', 7),
  masculinePast: Word('разгрызал', 7),
  femininePast: Word('разгрызала', 7),
  neuterPast: Word('разгрызало', 7),
  pluralPast: Word('разгрызали', 7),
  imperativeInformal: Word('разгрызай', 7),
  imperativeFormal: Word('разгрызайте', 7),
  imperfect: [],
};

perfectVerbs.set(разгрызать.name.text, разгрызать);

export { разгрызать };