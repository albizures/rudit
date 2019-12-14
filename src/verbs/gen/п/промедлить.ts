import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const промедлить: PerfectVerb = {
  name: Word('промедлить', 4),
  singular1stPerson: Word('промедлю', 4),
  singular2ndPerson: Word('промедлишь', 4),
  singular3rdPerson: Word('промедлит', 4),
  plural1stPerson: Word('промедлим', 4),
  plural2ndPerson: Word('промедлите', 4),
  plural3rdPerson: Word('промедлят', 4),
  masculinePast: Word('промедлил', 4),
  femininePast: Word('промедлила', 4),
  neuterPast: Word('промедлило', 4),
  pluralPast: Word('промедлили', 4),
  imperativeInformal: Word('промедли', 4),
  imperativeFormal: Word('промедлите', 4),
  imperfect: [],
};

perfectVerbs.set(промедлить.name.text, промедлить);

export { промедлить };