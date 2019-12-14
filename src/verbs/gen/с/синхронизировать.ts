import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const синхронизировать: PerfectVerb = {
  name: Word('синхронизировать', 9),
  singular1stPerson: Word('синхронизирую', 9),
  singular2ndPerson: Word('синхронизируешь', 9),
  singular3rdPerson: Word('синхронизирует', 9),
  plural1stPerson: Word('синхронизируем', 9),
  plural2ndPerson: Word('синхронизируете', 9),
  plural3rdPerson: Word('синхронизируют', 9),
  masculinePast: Word('синхронизировал', 9),
  femininePast: Word('синхронизировала', 9),
  neuterPast: Word('синхронизировало', 9),
  pluralPast: Word('синхронизировали', 9),
  imperativeInformal: Word('синхронизируй', 9),
  imperativeFormal: Word('синхронизируйте', 9),
  imperfect: [],
};

perfectVerbs.set(синхронизировать.name.text, синхронизировать);

export { синхронизировать };