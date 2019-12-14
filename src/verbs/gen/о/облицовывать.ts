import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const облицовывать: PerfectVerb = {
  name: Word('облицовывать', 5),
  singular1stPerson: Word('облицовываю', 5),
  singular2ndPerson: Word('облицовываешь', 5),
  singular3rdPerson: Word('облицовывает', 5),
  plural1stPerson: Word('облицовываем', 5),
  plural2ndPerson: Word('облицовываете', 5),
  plural3rdPerson: Word('облицовывают', 5),
  masculinePast: Word('облицовывал', 5),
  femininePast: Word('облицовывала', 5),
  neuterPast: Word('облицовывало', 5),
  pluralPast: Word('облицовывали', 5),
  imperativeInformal: Word('облицовывай', 5),
  imperativeFormal: Word('облицовывайте', 5),
  imperfect: [],
};

perfectVerbs.set(облицовывать.name.text, облицовывать);

export { облицовывать };