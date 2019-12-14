import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наркотизировать: PerfectVerb = {
  name: Word('наркотизировать', 8),
  singular1stPerson: Word('наркотизирую', 8),
  singular2ndPerson: Word('наркотизируешь', 8),
  singular3rdPerson: Word('наркотизирует', 8),
  plural1stPerson: Word('наркотизируем', 8),
  plural2ndPerson: Word('наркотизируете', 8),
  plural3rdPerson: Word('наркотизируют', 8),
  masculinePast: Word('наркотизировал', 8),
  femininePast: Word('наркотизировала', 8),
  neuterPast: Word('наркотизировало', 8),
  pluralPast: Word('наркотизировали', 8),
  imperativeInformal: Word('наркотизируй', 8),
  imperativeFormal: Word('наркотизируйте', 8),
  imperfect: [],
};

perfectVerbs.set(наркотизировать.name.text, наркотизировать);

export { наркотизировать };