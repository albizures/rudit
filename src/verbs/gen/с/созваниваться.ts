import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const созваниваться: PerfectVerb = {
  name: Word('созваниваться', 4),
  singular1stPerson: Word('созваниваюсь', 4),
  singular2ndPerson: Word('созваниваешься', 4),
  singular3rdPerson: Word('созванивается', 4),
  plural1stPerson: Word('созваниваемся', 4),
  plural2ndPerson: Word('созваниваетесь', 4),
  plural3rdPerson: Word('созваниваются', 4),
  masculinePast: Word('созванивался', 4),
  femininePast: Word('созванивалась', 4),
  neuterPast: Word('созванивалось', 4),
  pluralPast: Word('созванивались', 4),
  imperativeInformal: Word('созванивайся', 4),
  imperativeFormal: Word('созванивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(созваниваться.name.text, созваниваться);

export { созваниваться };