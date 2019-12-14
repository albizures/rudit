import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const застёгиваться: PerfectVerb = {
  name: Word('застёгиваться', 1),
  singular1stPerson: Word('застёгиваюсь', 1),
  singular2ndPerson: Word('застёгиваешься', 1),
  singular3rdPerson: Word('застёгивается', 1),
  plural1stPerson: Word('застёгиваемся', 1),
  plural2ndPerson: Word('застёгиваетесь', 1),
  plural3rdPerson: Word('застёгиваются', 1),
  masculinePast: Word('застёгивался', 1),
  femininePast: Word('застёгивалась', 1),
  neuterPast: Word('застёгивалось', 1),
  pluralPast: Word('застёгивались', 1),
  imperativeInformal: Word('застёгивайся', 1),
  imperativeFormal: Word('застёгивайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(застёгиваться.name.text, застёгиваться);

export { застёгиваться };