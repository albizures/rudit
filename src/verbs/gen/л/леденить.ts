import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const леденить: PerfectVerb = {
  name: Word('леденить', 5),
  singular1stPerson: Word('леденю', 5),
  singular2ndPerson: Word('леденишь', 5),
  singular3rdPerson: Word('леденит', 5),
  plural1stPerson: Word('леденим', 5),
  plural2ndPerson: Word('ледените', 5),
  plural3rdPerson: Word('леденят', 5),
  masculinePast: Word('леденил', 5),
  femininePast: Word('леденила', 5),
  neuterPast: Word('леденило', 5),
  pluralPast: Word('леденили', 5),
  imperativeInformal: Word('ледени', 5),
  imperativeFormal: Word('ледените', 5),
  imperfect: [],
};

perfectVerbs.set(леденить.name.text, леденить);

export { леденить };