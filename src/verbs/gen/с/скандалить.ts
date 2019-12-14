import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const скандалить: PerfectVerb = {
  name: Word('скандалить', 5),
  singular1stPerson: Word('скандалю', 5),
  singular2ndPerson: Word('скандалишь', 5),
  singular3rdPerson: Word('скандалит', 5),
  plural1stPerson: Word('скандалим', 5),
  plural2ndPerson: Word('скандалите', 5),
  plural3rdPerson: Word('скандалят', 5),
  masculinePast: Word('скандалил', 5),
  femininePast: Word('скандалила', 5),
  neuterPast: Word('скандалило', 5),
  pluralPast: Word('скандалили', 5),
  imperativeInformal: Word('скандаль', 5),
  imperativeFormal: Word('скандальте', 5),
  imperfect: [],
};

perfectVerbs.set(скандалить.name.text, скандалить);

export { скандалить };