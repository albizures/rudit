import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проведывать: PerfectVerb = {
  name: Word('проведывать', 4),
  singular1stPerson: Word('проведываю', 4),
  singular2ndPerson: Word('проведываешь', 4),
  singular3rdPerson: Word('проведывает', 4),
  plural1stPerson: Word('проведываем', 4),
  plural2ndPerson: Word('проведываете', 4),
  plural3rdPerson: Word('проведывают', 4),
  masculinePast: Word('проведывал', 4),
  femininePast: Word('проведывала', 4),
  neuterPast: Word('проведывало', 4),
  pluralPast: Word('проведывали', 4),
  imperativeInformal: Word('проведывай', 4),
  imperativeFormal: Word('проведывайте', 4),
  imperfect: [],
};

perfectVerbs.set(проведывать.name.text, проведывать);

export { проведывать };