import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const замедлить: PerfectVerb = {
  name: Word('замедлить', 3),
  singular1stPerson: Word('замедлю', 3),
  singular2ndPerson: Word('замедлишь', 3),
  singular3rdPerson: Word('замедлит', 3),
  plural1stPerson: Word('замедлим', 3),
  plural2ndPerson: Word('замедлите', 3),
  plural3rdPerson: Word('замедлят', 3),
  masculinePast: Word('замедлил', 3),
  femininePast: Word('замедлила', 3),
  neuterPast: Word('замедлило', 3),
  pluralPast: Word('замедлили', 3),
  imperativeInformal: Word('замедли', 3),
  imperativeFormal: Word('замедлите', 3),
  imperfect: [],
};

perfectVerbs.set(замедлить.name.text, замедлить);

export { замедлить };