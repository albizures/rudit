import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const свешиваться: PerfectVerb = {
  name: Word('свешиваться', 2),
  singular1stPerson: Word('свешиваюсь', 2),
  singular2ndPerson: Word('свешиваешься', 2),
  singular3rdPerson: Word('свешивается', 2),
  plural1stPerson: Word('свешиваемся', 2),
  plural2ndPerson: Word('свешиваетесь', 2),
  plural3rdPerson: Word('свешиваются', 2),
  masculinePast: Word('свешивался', 2),
  femininePast: Word('свешивалась', 2),
  neuterPast: Word('свешивалось', 2),
  pluralPast: Word('свешивались', 2),
  imperativeInformal: Word('свешивайся', 2),
  imperativeFormal: Word('свешивайтесь', 2),
  imperfect: [],
};

perfectVerbs.set(свешиваться.name.text, свешиваться);

export { свешиваться };