import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утрамбовывать: PerfectVerb = {
  name: Word('утрамбовывать', 6),
  singular1stPerson: Word('утрамбовываю', 6),
  singular2ndPerson: Word('утрамбовываешь', 6),
  singular3rdPerson: Word('утрамбовывает', 6),
  plural1stPerson: Word('утрамбовываем', 6),
  plural2ndPerson: Word('утрамбовываете', 6),
  plural3rdPerson: Word('утрамбовывают', 6),
  masculinePast: Word('утрамбовывал', 6),
  femininePast: Word('утрамбовывала', 6),
  neuterPast: Word('утрамбовывало', 6),
  pluralPast: Word('утрамбовывали', 6),
  imperativeInformal: Word('утрамбовывай', 6),
  imperativeFormal: Word('утрамбовывайте', 6),
  imperfect: [],
};

perfectVerbs.set(утрамбовывать.name.text, утрамбовывать);

export { утрамбовывать };