import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проглядывать: PerfectVerb = {
  name: Word('проглядывать', 5),
  singular1stPerson: Word('проглядываю', 5),
  singular2ndPerson: Word('проглядываешь', 5),
  singular3rdPerson: Word('проглядывает', 5),
  plural1stPerson: Word('проглядываем', 5),
  plural2ndPerson: Word('проглядываете', 5),
  plural3rdPerson: Word('проглядывают', 5),
  masculinePast: Word('проглядывал', 5),
  femininePast: Word('проглядывала', 5),
  neuterPast: Word('проглядывало', 5),
  pluralPast: Word('проглядывали', 5),
  imperativeInformal: Word('проглядывай', 5),
  imperativeFormal: Word('проглядывайте', 5),
  imperfect: [],
};

perfectVerbs.set(проглядывать.name.text, проглядывать);

export { проглядывать };