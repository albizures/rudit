import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наболтать: PerfectVerb = {
  name: Word('наболтать', 6),
  singular1stPerson: Word('наболтаю', 6),
  singular2ndPerson: Word('наболтаешь', 6),
  singular3rdPerson: Word('наболтает', 6),
  plural1stPerson: Word('наболтаем', 6),
  plural2ndPerson: Word('наболтаете', 6),
  plural3rdPerson: Word('наболтают', 6),
  masculinePast: Word('наболтал', 6),
  femininePast: Word('наболтала', 6),
  neuterPast: Word('наболтало', 6),
  pluralPast: Word('наболтали', 6),
  imperativeInformal: Word('наболтай', 6),
  imperativeFormal: Word('наболтайте', 6),
  imperfect: [],
};

perfectVerbs.set(наболтать.name.text, наболтать);

export { наболтать };