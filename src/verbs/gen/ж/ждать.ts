import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const ждать: PerfectVerb = {
  name: Word('ждать', 2),
  singular1stPerson: Word('жду', 2),
  singular2ndPerson: Word('ждёшь', 2),
  singular3rdPerson: Word('ждёт', 2),
  plural1stPerson: Word('ждём', 2),
  plural2ndPerson: Word('ждёте', 2),
  plural3rdPerson: Word('ждут', 2),
  masculinePast: Word('ждал', 2),
  femininePast: Word('ждала', 4),
  neuterPast: Word('ждало', 2),
  pluralPast: Word('ждали', 2),
  imperativeInformal: Word('жди', 2),
  imperativeFormal: Word('ждите', 2),
  imperfect: ['подождать'],
};

perfectVerbs.set(ждать.name.text, ждать);

export { ждать };