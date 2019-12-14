import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const угробить: PerfectVerb = {
  name: Word('угробить', 3),
  singular1stPerson: Word('угроблю', 3),
  singular2ndPerson: Word('угробишь', 3),
  singular3rdPerson: Word('угробит', 3),
  plural1stPerson: Word('угробим', 3),
  plural2ndPerson: Word('угробите', 3),
  plural3rdPerson: Word('угробят', 3),
  masculinePast: Word('угробил', 3),
  femininePast: Word('угробила', 3),
  neuterPast: Word('угробило', 3),
  pluralPast: Word('угробили', 3),
  imperativeInformal: Word('угробь', 3),
  imperativeFormal: Word('угробьте', 3),
  imperfect: [],
};

perfectVerbs.set(угробить.name.text, угробить);

export { угробить };