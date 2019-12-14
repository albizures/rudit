import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const помедлить: PerfectVerb = {
  name: Word('помедлить', 3),
  singular1stPerson: Word('помедлю', 3),
  singular2ndPerson: Word('помедлишь', 3),
  singular3rdPerson: Word('помедлит', 3),
  plural1stPerson: Word('помедлим', 3),
  plural2ndPerson: Word('помедлите', 3),
  plural3rdPerson: Word('помедлят', 3),
  masculinePast: Word('помедлил', 3),
  femininePast: Word('помедлила', 3),
  neuterPast: Word('помедлило', 3),
  pluralPast: Word('помедлили', 3),
  imperativeInformal: Word('помедли', 3),
  imperativeFormal: Word('помедлите', 3),
  imperfect: [],
};

perfectVerbs.set(помедлить.name.text, помедлить);

export { помедлить };