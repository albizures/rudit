import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аннексировать: PerfectVerb = {
  name: Word('аннексировать', 6),
  singular1stPerson: Word('аннексирую', 6),
  singular2ndPerson: Word('аннексируешь', 6),
  singular3rdPerson: Word('аннексирует', 6),
  plural1stPerson: Word('аннексируем', 6),
  plural2ndPerson: Word('аннексируете', 6),
  plural3rdPerson: Word('аннексируют', 6),
  masculinePast: Word('аннексировал', 6),
  femininePast: Word('аннексировала', 6),
  neuterPast: Word('аннексировало', 6),
  pluralPast: Word('аннексировали', 6),
  imperativeInformal: Word('аннексируй', 6),
  imperativeFormal: Word('аннексируйте', 6),
  imperfect: [],
};

perfectVerbs.set(аннексировать.name.text, аннексировать);

export { аннексировать };