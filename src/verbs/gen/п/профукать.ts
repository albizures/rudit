import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const профукать: PerfectVerb = {
  name: Word('профукать', 4),
  singular1stPerson: Word('профукаю', 4),
  singular2ndPerson: Word('профукаешь', 4),
  singular3rdPerson: Word('профукает', 4),
  plural1stPerson: Word('профукаем', 4),
  plural2ndPerson: Word('профукаете', 4),
  plural3rdPerson: Word('профукают', 4),
  masculinePast: Word('профукал', 4),
  femininePast: Word('профукала', 4),
  neuterPast: Word('профукало', 4),
  pluralPast: Word('профукали', 4),
  imperativeInformal: Word('профукай', 4),
  imperativeFormal: Word('профукайте', 4),
  imperfect: [],
};

perfectVerbs.set(профукать.name.text, профукать);

export { профукать };