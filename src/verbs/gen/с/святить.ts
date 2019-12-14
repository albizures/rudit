import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const святить: PerfectVerb = {
  name: Word('святить', 4),
  singular1stPerson: Word('свячу', 4),
  singular2ndPerson: Word('святишь', 4),
  singular3rdPerson: Word('святит', 4),
  plural1stPerson: Word('святим', 4),
  plural2ndPerson: Word('святите', 4),
  plural3rdPerson: Word('святят', 4),
  masculinePast: Word('святил', 4),
  femininePast: Word('святила', 4),
  neuterPast: Word('святило', 4),
  pluralPast: Word('святили', 4),
  imperativeInformal: Word('святи', 4),
  imperativeFormal: Word('святите', 4),
  imperfect: [],
};

perfectVerbs.set(святить.name.text, святить);

export { святить };