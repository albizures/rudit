import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const раздробить: PerfectVerb = {
  name: Word('раздробить', 7),
  singular1stPerson: Word('раздроблю', 8),
  singular2ndPerson: Word('раздробишь', 7),
  singular3rdPerson: Word('раздробит', 7),
  plural1stPerson: Word('раздробим', 7),
  plural2ndPerson: Word('раздробите', 7),
  plural3rdPerson: Word('раздробят', 7),
  masculinePast: Word('раздробил', 7),
  femininePast: Word('раздробила', 7),
  neuterPast: Word('раздробило', 7),
  pluralPast: Word('раздробили', 7),
  imperativeInformal: Word('раздроби', 7),
  imperativeFormal: Word('раздробите', 7),
  imperfect: [],
};

perfectVerbs.set(раздробить.name.text, раздробить);

export { раздробить };