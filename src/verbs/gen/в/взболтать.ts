import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const взболтать: PerfectVerb = {
  name: Word('взболтать', 6),
  singular1stPerson: Word('взболтаю', 6),
  singular2ndPerson: Word('взболтаешь', 6),
  singular3rdPerson: Word('взболтает', 6),
  plural1stPerson: Word('взболтаем', 6),
  plural2ndPerson: Word('взболтаете', 6),
  plural3rdPerson: Word('взболтают', 6),
  masculinePast: Word('взболтал', 6),
  femininePast: Word('взболтала', 6),
  neuterPast: Word('взболтало', 6),
  pluralPast: Word('взболтали', 6),
  imperativeInformal: Word('взболтай', 6),
  imperativeFormal: Word('взболтайте', 6),
  imperfect: [],
};

perfectVerbs.set(взболтать.name.text, взболтать);

export { взболтать };