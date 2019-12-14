import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const уродить: PerfectVerb = {
  name: Word('уродить', 4),
  singular1stPerson: Word('урожу', 4),
  singular2ndPerson: Word('уродишь', 4),
  singular3rdPerson: Word('уродит', 4),
  plural1stPerson: Word('уродим', 4),
  plural2ndPerson: Word('уродите', 4),
  plural3rdPerson: Word('уродят', 4),
  masculinePast: Word('уродил', 4),
  femininePast: Word('уродила', 4),
  neuterPast: Word('уродило', 4),
  pluralPast: Word('уродили', 4),
  imperativeInformal: Word('уроди', 4),
  imperativeFormal: Word('уродите', 4),
  imperfect: [],
};

perfectVerbs.set(уродить.name.text, уродить);

export { уродить };