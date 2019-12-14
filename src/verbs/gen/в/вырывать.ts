import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const вырывать: PerfectVerb = {
  name: Word('вырывать', 5),
  singular1stPerson: Word('вырываю', 5),
  singular2ndPerson: Word('вырываешь', 5),
  singular3rdPerson: Word('вырывает', 5),
  plural1stPerson: Word('вырываем', 5),
  plural2ndPerson: Word('вырываете', 5),
  plural3rdPerson: Word('вырывают', 5),
  masculinePast: Word('вырывал', 5),
  femininePast: Word('вырывала', 5),
  neuterPast: Word('вырывало', 5),
  pluralPast: Word('вырывали', 5),
  imperativeInformal: Word('вырывай', 5),
  imperativeFormal: Word('вырывайте', 5),
  imperfect: ['вырыть'],
};

perfectVerbs.set(вырывать.name.text, вырывать);

export { вырывать };