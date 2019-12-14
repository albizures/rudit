import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const образовывать: PerfectVerb = {
  name: Word('образовывать', 5),
  singular1stPerson: Word('образовываю', 5),
  singular2ndPerson: Word('образовываешь', 5),
  singular3rdPerson: Word('образовывает', 5),
  plural1stPerson: Word('образовываем', 5),
  plural2ndPerson: Word('образовываете', 5),
  plural3rdPerson: Word('образовывают', 5),
  masculinePast: Word('образовывал', 5),
  femininePast: Word('образовывала', 5),
  neuterPast: Word('образовывало', 5),
  pluralPast: Word('образовывали', 5),
  imperativeInformal: Word('образовывай', 5),
  imperativeFormal: Word('образовывайте', 5),
  imperfect: ['образовать'],
};

perfectVerbs.set(образовывать.name.text, образовывать);

export { образовывать };