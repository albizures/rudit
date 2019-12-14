import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отворачиваться: PerfectVerb = {
  name: Word('отворачиваться', 5),
  singular1stPerson: Word('отворачиваюсь', 5),
  singular2ndPerson: Word('отворачиваешься', 5),
  singular3rdPerson: Word('отворачивается', 5),
  plural1stPerson: Word('отворачиваемся', 5),
  plural2ndPerson: Word('отворачиваетесь', 5),
  plural3rdPerson: Word('отворачиваются', 5),
  masculinePast: Word('отворачивался', 5),
  femininePast: Word('отворачивалась', 5),
  neuterPast: Word('отворачивалось', 5),
  pluralPast: Word('отворачивались', 5),
  imperativeInformal: Word('отворачивайся', 5),
  imperativeFormal: Word('отворачивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отворачиваться.name.text, отворачиваться);

export { отворачиваться };