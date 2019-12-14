import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const изрешечиваться: PerfectVerb = {
  name: Word('изрешечиваться', 5),
  singular1stPerson: Word('изрешечиваюсь', 5),
  singular2ndPerson: Word('изрешечиваешься', 5),
  singular3rdPerson: Word('изрешечивается', 5),
  plural1stPerson: Word('изрешечиваемся', 5),
  plural2ndPerson: Word('изрешечиваетесь', 5),
  plural3rdPerson: Word('изрешечиваются', 5),
  masculinePast: Word('изрешечивался', 5),
  femininePast: Word('изрешечивалась', 5),
  neuterPast: Word('изрешечивалось', 5),
  pluralPast: Word('изрешечивались', 5),
  imperativeInformal: Word('изрешечивайся', 5),
  imperativeFormal: Word('изрешечивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(изрешечиваться.name.text, изрешечиваться);

export { изрешечиваться };