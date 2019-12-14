import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const проламывать: PerfectVerb = {
  name: Word('проламывать', 4),
  singular1stPerson: Word('проламываю', 4),
  singular2ndPerson: Word('проламываешь', 4),
  singular3rdPerson: Word('проламывает', 4),
  plural1stPerson: Word('проламываем', 4),
  plural2ndPerson: Word('проламываете', 4),
  plural3rdPerson: Word('проламывают', 4),
  masculinePast: Word('проламывал', 4),
  femininePast: Word('проламывала', 4),
  neuterPast: Word('проламывало', 4),
  pluralPast: Word('проламывали', 4),
  imperativeInformal: Word('проламывай', 4),
  imperativeFormal: Word('проламывайте', 4),
  imperfect: [],
};

perfectVerbs.set(проламывать.name.text, проламывать);

export { проламывать };