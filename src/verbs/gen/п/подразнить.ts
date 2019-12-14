import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const подразнить: PerfectVerb = {
  name: Word('подразнить', 7),
  singular1stPerson: Word('подразню', 7),
  singular2ndPerson: Word('подразнишь', 4),
  singular3rdPerson: Word('подразнит', 4),
  plural1stPerson: Word('подразним', 4),
  plural2ndPerson: Word('подразните', 4),
  plural3rdPerson: Word('подразнят', 4),
  masculinePast: Word('подразнил', 7),
  femininePast: Word('подразнила', 7),
  neuterPast: Word('подразнило', 7),
  pluralPast: Word('подразнили', 7),
  imperativeInformal: Word('подразни', 7),
  imperativeFormal: Word('подразните', 7),
  imperfect: [],
};

perfectVerbs.set(подразнить.name.text, подразнить);

export { подразнить };