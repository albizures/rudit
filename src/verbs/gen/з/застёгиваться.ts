import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застёгиваться: PerfectVerb = {
  name: Word('застёгиваться', 4),
  singular1stPerson: Word('застёгиваюсь', 4),
  singular2ndPerson: Word('застёгиваешься', 4),
  singular3rdPerson: Word('застёгивается', 4),
  plural1stPerson: Word('застёгиваемся', 4),
  plural2ndPerson: Word('застёгиваетесь', 4),
  plural3rdPerson: Word('застёгиваются', 4),
  masculinePast: Word('застёгивался', 4),
  femininePast: Word('застёгивалась', 4),
  neuterPast: Word('застёгивалось', 4),
  pluralPast: Word('застёгивались', 4),
  imperativeInformal: Word('застёгивайся', 4),
  imperativeFormal: Word('застёгивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(застёгиваться.name.text, застёгиваться);

export { застёгиваться };