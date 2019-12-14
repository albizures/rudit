import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const баллотировать: PerfectVerb = {
  name: Word('баллотировать', 6),
  singular1stPerson: Word('баллотирую', 6),
  singular2ndPerson: Word('баллотируешь', 6),
  singular3rdPerson: Word('баллотирует', 6),
  plural1stPerson: Word('баллотируем', 6),
  plural2ndPerson: Word('баллотируете', 6),
  plural3rdPerson: Word('баллотируют', 6),
  masculinePast: Word('баллотировал', 6),
  femininePast: Word('баллотировала', 6),
  neuterPast: Word('баллотировало', 6),
  pluralPast: Word('баллотировали', 6),
  imperativeInformal: Word('баллотируй', 6),
  imperativeFormal: Word('баллотируйте', 6),
  imperfect: [],
};

perfectVerbs.set(баллотировать.name.text, баллотировать);

export { баллотировать };