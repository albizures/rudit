import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отсеиваться: PerfectVerb = {
  name: Word('отсеиваться', 3),
  singular1stPerson: Word('отсеиваюсь', 3),
  singular2ndPerson: Word('отсеиваешься', 3),
  singular3rdPerson: Word('отсеивается', 3),
  plural1stPerson: Word('отсеиваемся', 3),
  plural2ndPerson: Word('отсеиваетесь', 3),
  plural3rdPerson: Word('отсеиваются', 3),
  masculinePast: Word('отсеивался', 3),
  femininePast: Word('отсеивалась', 3),
  neuterPast: Word('отсеивалось', 3),
  pluralPast: Word('отсеивались', 3),
  imperativeInformal: Word('отсеивайся', 3),
  imperativeFormal: Word('отсеивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отсеиваться.name.text, отсеиваться);

export { отсеиваться };