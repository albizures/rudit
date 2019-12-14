import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const буянить: PerfectVerb = {
  name: Word('буянить', 2),
  singular1stPerson: Word('буяню', 2),
  singular2ndPerson: Word('буянишь', 2),
  singular3rdPerson: Word('буянит', 2),
  plural1stPerson: Word('буяним', 2),
  plural2ndPerson: Word('буяните', 2),
  plural3rdPerson: Word('буянят', 2),
  masculinePast: Word('буянил', 2),
  femininePast: Word('буянила', 2),
  neuterPast: Word('буянило', 2),
  pluralPast: Word('буянили', 2),
  imperativeInformal: Word('буянь', 2),
  imperativeFormal: Word('буяньте', 2),
  imperfect: [],
};

perfectVerbs.set(буянить.name.text, буянить);

export { буянить };