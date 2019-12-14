import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задразнить: PerfectVerb = {
  name: Word('задразнить', 7),
  singular1stPerson: Word('задразню', 7),
  singular2ndPerson: Word('задразнишь', 4),
  singular3rdPerson: Word('задразнит', 4),
  plural1stPerson: Word('задразним', 4),
  plural2ndPerson: Word('задразните', 4),
  plural3rdPerson: Word('задразнят', 4),
  masculinePast: Word('задразнил', 7),
  femininePast: Word('задразнила', 7),
  neuterPast: Word('задразнило', 7),
  pluralPast: Word('задразнили', 7),
  imperativeInformal: Word('задразни', 7),
  imperativeFormal: Word('задразните', 7),
  imperfect: [],
};

perfectVerbs.set(задразнить.name.text, задразнить);

export { задразнить };