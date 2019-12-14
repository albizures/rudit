import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отбиваться: PerfectVerb = {
  name: Word('отбиваться', 5),
  singular1stPerson: Word('отбиваюсь', 5),
  singular2ndPerson: Word('отбиваешься', 5),
  singular3rdPerson: Word('отбивается', 5),
  plural1stPerson: Word('отбиваемся', 5),
  plural2ndPerson: Word('отбиваетесь', 5),
  plural3rdPerson: Word('отбиваются', 5),
  masculinePast: Word('отбивался', 5),
  femininePast: Word('отбивалась', 5),
  neuterPast: Word('отбивалось', 5),
  pluralPast: Word('отбивались', 5),
  imperativeInformal: Word('отбивайся', 5),
  imperativeFormal: Word('отбивайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отбиваться.name.text, отбиваться);

export { отбиваться };