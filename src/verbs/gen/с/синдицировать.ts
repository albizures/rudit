import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const синдицировать: PerfectVerb = {
  name: Word('синдицировать', 6),
  singular1stPerson: Word('синдицирую', 6),
  singular2ndPerson: Word('синдицируешь', 6),
  singular3rdPerson: Word('синдицирует', 6),
  plural1stPerson: Word('синдицируем', 6),
  plural2ndPerson: Word('синдицируете', 6),
  plural3rdPerson: Word('синдицируют', 6),
  masculinePast: Word('синдицировал', 6),
  femininePast: Word('синдицировала', 6),
  neuterPast: Word('синдицировало', 6),
  pluralPast: Word('синдицировали', 6),
  imperativeInformal: Word('синдицируй', 6),
  imperativeFormal: Word('синдицируйте', 6),
  imperfect: [],
};

perfectVerbs.set(синдицировать.name.text, синдицировать);

export { синдицировать };