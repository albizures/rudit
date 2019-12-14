import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дичать: PerfectVerb = {
  name: Word('дичать', 3),
  singular1stPerson: Word('дичаю', 3),
  singular2ndPerson: Word('дичаешь', 3),
  singular3rdPerson: Word('дичает', 3),
  plural1stPerson: Word('дичаем', 3),
  plural2ndPerson: Word('дичаете', 3),
  plural3rdPerson: Word('дичают', 3),
  masculinePast: Word('дичал', 3),
  femininePast: Word('дичала', 3),
  neuterPast: Word('дичало', 3),
  pluralPast: Word('дичали', 3),
  imperativeInformal: Word('дичай', 3),
  imperativeFormal: Word('дичайте', 3),
  imperfect: [],
};

perfectVerbs.set(дичать.name.text, дичать);

export { дичать };