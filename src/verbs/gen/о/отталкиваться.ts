import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отталкиваться: PerfectVerb = {
  name: Word('отталкиваться', 3),
  singular1stPerson: Word('отталкиваюсь', 3),
  singular2ndPerson: Word('отталкиваешься', 3),
  singular3rdPerson: Word('отталкивается', 3),
  plural1stPerson: Word('отталкиваемся', 3),
  plural2ndPerson: Word('отталкиваетесь', 3),
  plural3rdPerson: Word('отталкиваются', 3),
  masculinePast: Word('отталкивался', 3),
  femininePast: Word('отталкивалась', 3),
  neuterPast: Word('отталкивалось', 3),
  pluralPast: Word('отталкивались', 3),
  imperativeInformal: Word('отталкивайся', 3),
  imperativeFormal: Word('отталкивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отталкиваться.name.text, отталкиваться);

export { отталкиваться };