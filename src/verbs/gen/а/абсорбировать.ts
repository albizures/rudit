import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const абсорбировать: PerfectVerb = {
  name: Word('абсорбировать', 6),
  singular1stPerson: Word('абсорбирую', 6),
  singular2ndPerson: Word('абсорбируешь', 6),
  singular3rdPerson: Word('абсорбирует', 6),
  plural1stPerson: Word('абсорбируем', 6),
  plural2ndPerson: Word('абсорбируете', 6),
  plural3rdPerson: Word('абсорбируют', 6),
  masculinePast: Word('абсорбировал', 6),
  femininePast: Word('абсорбировала', 6),
  neuterPast: Word('абсорбировало', 6),
  pluralPast: Word('абсорбировали', 6),
  imperativeInformal: Word('абсорбируй', 6),
  imperativeFormal: Word('абсорбируйте', 6),
  imperfect: [],
};

perfectVerbs.set(абсорбировать.name.text, абсорбировать);

export { абсорбировать };