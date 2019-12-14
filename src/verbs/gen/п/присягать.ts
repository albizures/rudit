import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const присягать: PerfectVerb = {
  name: Word('присягать', 6),
  singular1stPerson: Word('присягаю', 6),
  singular2ndPerson: Word('присягаешь', 6),
  singular3rdPerson: Word('присягает', 6),
  plural1stPerson: Word('присягаем', 6),
  plural2ndPerson: Word('присягаете', 6),
  plural3rdPerson: Word('присягают', 6),
  masculinePast: Word('присягал', 6),
  femininePast: Word('присягала', 6),
  neuterPast: Word('присягало', 6),
  pluralPast: Word('присягали', 6),
  imperativeInformal: Word('присягай', 6),
  imperativeFormal: Word('присягайте', 6),
  imperfect: [],
};

perfectVerbs.set(присягать.name.text, присягать);

export { присягать };