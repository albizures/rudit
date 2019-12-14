import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const томить: PerfectVerb = {
  name: Word('томить', 3),
  singular1stPerson: Word('томлю', 4),
  singular2ndPerson: Word('томишь', 3),
  singular3rdPerson: Word('томит', 3),
  plural1stPerson: Word('томим', 3),
  plural2ndPerson: Word('томите', 3),
  plural3rdPerson: Word('томят', 3),
  masculinePast: Word('томил', 3),
  femininePast: Word('томила', 3),
  neuterPast: Word('томило', 3),
  pluralPast: Word('томили', 3),
  imperativeInformal: Word('томи', 3),
  imperativeFormal: Word('томите', 3),
  imperfect: [],
};

perfectVerbs.set(томить.name.text, томить);

export { томить };