import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const наталкиваться: PerfectVerb = {
  name: Word('наталкиваться', 3),
  singular1stPerson: Word('наталкиваюсь', 3),
  singular2ndPerson: Word('наталкиваешься', 3),
  singular3rdPerson: Word('наталкивается', 3),
  plural1stPerson: Word('наталкиваемся', 3),
  plural2ndPerson: Word('наталкиваетесь', 3),
  plural3rdPerson: Word('наталкиваются', 3),
  masculinePast: Word('наталкивался', 3),
  femininePast: Word('наталкивалась', 3),
  neuterPast: Word('наталкивалось', 3),
  pluralPast: Word('наталкивались', 3),
  imperativeInformal: Word('наталкивайся', 3),
  imperativeFormal: Word('наталкивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(наталкиваться.name.text, наталкиваться);

export { наталкиваться };