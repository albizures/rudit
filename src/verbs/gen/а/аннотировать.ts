import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аннотировать: PerfectVerb = {
  name: Word('аннотировать', 5),
  singular1stPerson: Word('аннотирую', 5),
  singular2ndPerson: Word('аннотируешь', 5),
  singular3rdPerson: Word('аннотирует', 5),
  plural1stPerson: Word('аннотируем', 5),
  plural2ndPerson: Word('аннотируете', 5),
  plural3rdPerson: Word('аннотируют', 5),
  masculinePast: Word('аннотировал', 5),
  femininePast: Word('аннотировала', 5),
  neuterPast: Word('аннотировало', 5),
  pluralPast: Word('аннотировали', 5),
  imperativeInformal: Word('аннотируй', 5),
  imperativeFormal: Word('аннотируйте', 5),
  imperfect: [],
};

perfectVerbs.set(аннотировать.name.text, аннотировать);

export { аннотировать };