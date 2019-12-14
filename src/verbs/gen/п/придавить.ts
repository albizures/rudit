import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const придавить: PerfectVerb = {
  name: Word('придавить', 6),
  singular1stPerson: Word('придавлю', 7),
  singular2ndPerson: Word('придавишь', 4),
  singular3rdPerson: Word('придавит', 4),
  plural1stPerson: Word('придавим', 4),
  plural2ndPerson: Word('придавите', 4),
  plural3rdPerson: Word('придавят', 4),
  masculinePast: Word('придавил', 6),
  femininePast: Word('придавила', 6),
  neuterPast: Word('придавило', 6),
  pluralPast: Word('придавили', 6),
  imperativeInformal: Word('придави', 6),
  imperativeFormal: Word('придавите', 6),
  imperfect: [],
};

perfectVerbs.set(придавить.name.text, придавить);

export { придавить };