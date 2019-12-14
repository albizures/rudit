import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откормить: PerfectVerb = {
  name: Word('откормить', 6),
  singular1stPerson: Word('откормлю', 7),
  singular2ndPerson: Word('откормишь', 3),
  singular3rdPerson: Word('откормит', 3),
  plural1stPerson: Word('откормим', 3),
  plural2ndPerson: Word('откормите', 3),
  plural3rdPerson: Word('откормят', 3),
  masculinePast: Word('откормил', 6),
  femininePast: Word('откормила', 6),
  neuterPast: Word('откормило', 6),
  pluralPast: Word('откормили', 6),
  imperativeInformal: Word('откорми', 6),
  imperativeFormal: Word('откормите', 6),
  imperfect: [],
};

perfectVerbs.set(откормить.name.text, откормить);

export { откормить };