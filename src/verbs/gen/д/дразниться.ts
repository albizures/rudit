import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const дразниться: PerfectVerb = {
  name: Word('дразниться', 5),
  singular1stPerson: Word('дразнюсь', 5),
  singular2ndPerson: Word('дразнишься', 2),
  singular3rdPerson: Word('дразнится', 2),
  plural1stPerson: Word('дразнимся', 2),
  plural2ndPerson: Word('дразнитесь', 2),
  plural3rdPerson: Word('дразнятся', 2),
  masculinePast: Word('дразнился', 5),
  femininePast: Word('дразнилась', 5),
  neuterPast: Word('дразнилось', 5),
  pluralPast: Word('дразнились', 5),
  imperativeInformal: Word('дразнись', 5),
  imperativeFormal: Word('дразнитесь', 5),
  imperfect: [],
};

perfectVerbs.set(дразниться.name.text, дразниться);

export { дразниться };