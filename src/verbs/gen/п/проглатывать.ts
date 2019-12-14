import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проглатывать: PerfectVerb = {
  name: Word('проглатывать', 5),
  singular1stPerson: Word('проглатываю', 5),
  singular2ndPerson: Word('проглатываешь', 5),
  singular3rdPerson: Word('проглатывает', 5),
  plural1stPerson: Word('проглатываем', 5),
  plural2ndPerson: Word('проглатываете', 5),
  plural3rdPerson: Word('проглатывают', 5),
  masculinePast: Word('проглатывал', 5),
  femininePast: Word('проглатывала', 5),
  neuterPast: Word('проглатывало', 5),
  pluralPast: Word('проглатывали', 5),
  imperativeInformal: Word('проглатывай', 5),
  imperativeFormal: Word('проглатывайте', 5),
  imperfect: [],
};

perfectVerbs.set(проглатывать.name.text, проглатывать);

export { проглатывать };