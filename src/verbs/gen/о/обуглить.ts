import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обуглить: PerfectVerb = {
  name: Word('обуглить', 2),
  singular1stPerson: Word('обуглю', 2),
  singular2ndPerson: Word('обуглишь', 2),
  singular3rdPerson: Word('обуглит', 2),
  plural1stPerson: Word('обуглим', 2),
  plural2ndPerson: Word('обуглите', 2),
  plural3rdPerson: Word('обуглят', 2),
  masculinePast: Word('обуглил', 2),
  femininePast: Word('обуглила', 2),
  neuterPast: Word('обуглило', 2),
  pluralPast: Word('обуглили', 2),
  imperativeInformal: Word('обугли', 2),
  imperativeFormal: Word('обуглите', 2),
  imperfect: [],
};

perfectVerbs.set(обуглить.name.text, обуглить);

export { обуглить };