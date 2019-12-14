import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const утаптывать: PerfectVerb = {
  name: Word('утаптывать', 2),
  singular1stPerson: Word('утаптываю', 2),
  singular2ndPerson: Word('утаптываешь', 2),
  singular3rdPerson: Word('утаптывает', 2),
  plural1stPerson: Word('утаптываем', 2),
  plural2ndPerson: Word('утаптываете', 2),
  plural3rdPerson: Word('утаптывают', 2),
  masculinePast: Word('утаптывал', 2),
  femininePast: Word('утаптывала', 2),
  neuterPast: Word('утаптывало', 2),
  pluralPast: Word('утаптывали', 2),
  imperativeInformal: Word('утаптывай', 2),
  imperativeFormal: Word('утаптывайте', 2),
  imperfect: [],
};

perfectVerbs.set(утаптывать.name.text, утаптывать);

export { утаптывать };