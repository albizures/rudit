import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дразнить: PerfectVerb = {
  name: Word('дразнить', 5),
  singular1stPerson: Word('дразню', 5),
  singular2ndPerson: Word('дразнишь', 2),
  singular3rdPerson: Word('дразнит', 2),
  plural1stPerson: Word('дразним', 2),
  plural2ndPerson: Word('дразните', 2),
  plural3rdPerson: Word('дразнят', 2),
  masculinePast: Word('дразнил', 5),
  femininePast: Word('дразнила', 5),
  neuterPast: Word('дразнило', 5),
  pluralPast: Word('дразнили', 5),
  imperativeInformal: Word('дразни', 5),
  imperativeFormal: Word('дразните', 5),
  imperfect: [],
};

perfectVerbs.set(дразнить.name.text, дразнить);

export { дразнить };