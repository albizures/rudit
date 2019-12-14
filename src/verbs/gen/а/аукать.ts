import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const аукать: PerfectVerb = {
  name: Word('аукать', 1),
  singular1stPerson: Word('аукаю', 1),
  singular2ndPerson: Word('аукаешь', 1),
  singular3rdPerson: Word('аукает', 1),
  plural1stPerson: Word('аукаем', 1),
  plural2ndPerson: Word('аукаете', 1),
  plural3rdPerson: Word('аукают', 1),
  masculinePast: Word('аукал', 1),
  femininePast: Word('аукала', 1),
  neuterPast: Word('аукало', 1),
  pluralPast: Word('аукали', 1),
  imperativeInformal: Word('аукай', 1),
  imperativeFormal: Word('аукайте', 1),
  imperfect: [],
};

perfectVerbs.set(аукать.name.text, аукать);

export { аукать };