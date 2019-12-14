import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const растягиваться: PerfectVerb = {
  name: Word('растягиваться', 4),
  singular1stPerson: Word('растягиваюсь', 4),
  singular2ndPerson: Word('растягиваешься', 4),
  singular3rdPerson: Word('растягивается', 4),
  plural1stPerson: Word('растягиваемся', 4),
  plural2ndPerson: Word('растягиваетесь', 4),
  plural3rdPerson: Word('растягиваются', 4),
  masculinePast: Word('растягивался', 4),
  femininePast: Word('растягивалась', 4),
  neuterPast: Word('растягивалось', 4),
  pluralPast: Word('растягивались', 4),
  imperativeInformal: Word('растягивайся', 4),
  imperativeFormal: Word('растягивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(растягиваться.name.text, растягиваться);

export { растягиваться };