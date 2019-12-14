import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const холодить: PerfectVerb = {
  name: Word('холодить', 5),
  singular1stPerson: Word('холожу', 5),
  singular2ndPerson: Word('холодишь', 5),
  singular3rdPerson: Word('холодит', 5),
  plural1stPerson: Word('холодим', 5),
  plural2ndPerson: Word('холодите', 5),
  plural3rdPerson: Word('холодят', 5),
  masculinePast: Word('холодил', 5),
  femininePast: Word('холодила', 5),
  neuterPast: Word('холодило', 5),
  pluralPast: Word('холодили', 5),
  imperativeInformal: Word('холоди', 5),
  imperativeFormal: Word('холодите', 5),
  imperfect: [],
};

perfectVerbs.set(холодить.name.text, холодить);

export { холодить };