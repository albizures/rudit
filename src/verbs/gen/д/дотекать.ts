import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дотекать: PerfectVerb = {
  name: Word('дотекать', 5),
  singular1stPerson: Word('дотекаю', 5),
  singular2ndPerson: Word('дотекаешь', 5),
  singular3rdPerson: Word('дотекает', 5),
  plural1stPerson: Word('дотекаем', 5),
  plural2ndPerson: Word('дотекаете', 5),
  plural3rdPerson: Word('дотекают', 5),
  masculinePast: Word('дотекал', 5),
  femininePast: Word('дотекала', 5),
  neuterPast: Word('дотекало', 5),
  pluralPast: Word('дотекали', 5),
  imperativeInformal: Word('дотекай', 5),
  imperativeFormal: Word('дотекайте', 5),
  imperfect: [],
};

perfectVerbs.set(дотекать.name.text, дотекать);

export { дотекать };