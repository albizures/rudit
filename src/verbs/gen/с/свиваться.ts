import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свиваться: PerfectVerb = {
  name: Word('свиваться', 4),
  singular1stPerson: Word('свиваюсь', 4),
  singular2ndPerson: Word('свиваешься', 4),
  singular3rdPerson: Word('свивается', 4),
  plural1stPerson: Word('свиваемся', 4),
  plural2ndPerson: Word('свиваетесь', 4),
  plural3rdPerson: Word('свиваются', 4),
  masculinePast: Word('свивался', 4),
  femininePast: Word('свивалась', 4),
  neuterPast: Word('свивалось', 4),
  pluralPast: Word('свивались', 4),
  imperativeInformal: Word('свивайся', 4),
  imperativeFormal: Word('свивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(свиваться.name.text, свиваться);

export { свиваться };