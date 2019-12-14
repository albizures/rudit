import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const коробить: PerfectVerb = {
  name: Word('коробить', 3),
  singular1stPerson: Word('короблю', 3),
  singular2ndPerson: Word('коробишь', 3),
  singular3rdPerson: Word('коробит', 3),
  plural1stPerson: Word('коробим', 3),
  plural2ndPerson: Word('коробите', 3),
  plural3rdPerson: Word('коробят', 3),
  masculinePast: Word('коробил', 3),
  femininePast: Word('коробила', 3),
  neuterPast: Word('коробило', 3),
  pluralPast: Word('коробили', 3),
  imperativeInformal: Word('коробь', 3),
  imperativeFormal: Word('коробьте', 3),
  imperfect: [],
};

perfectVerbs.set(коробить.name.text, коробить);

export { коробить };