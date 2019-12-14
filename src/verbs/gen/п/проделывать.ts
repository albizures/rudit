import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проделывать: PerfectVerb = {
  name: Word('проделывать', 4),
  singular1stPerson: Word('проделываю', 4),
  singular2ndPerson: Word('проделываешь', 4),
  singular3rdPerson: Word('проделывает', 4),
  plural1stPerson: Word('проделываем', 4),
  plural2ndPerson: Word('проделываете', 4),
  plural3rdPerson: Word('проделывают', 4),
  masculinePast: Word('проделывал', 4),
  femininePast: Word('проделывала', 4),
  neuterPast: Word('проделывало', 4),
  pluralPast: Word('проделывали', 4),
  imperativeInformal: Word('проделывай', 4),
  imperativeFormal: Word('проделывайте', 4),
  imperfect: [],
};

perfectVerbs.set(проделывать.name.text, проделывать);

export { проделывать };