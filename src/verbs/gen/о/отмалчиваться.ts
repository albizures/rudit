import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отмалчиваться: PerfectVerb = {
  name: Word('отмалчиваться', 3),
  singular1stPerson: Word('отмалчиваюсь', 3),
  singular2ndPerson: Word('отмалчиваешься', 3),
  singular3rdPerson: Word('отмалчивается', 3),
  plural1stPerson: Word('отмалчиваемся', 3),
  plural2ndPerson: Word('отмалчиваетесь', 3),
  plural3rdPerson: Word('отмалчиваются', 3),
  masculinePast: Word('отмалчивался', 3),
  femininePast: Word('отмалчивалась', 3),
  neuterPast: Word('отмалчивалось', 3),
  pluralPast: Word('отмалчивались', 3),
  imperativeInformal: Word('отмалчивайся', 3),
  imperativeFormal: Word('отмалчивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отмалчиваться.name.text, отмалчиваться);

export { отмалчиваться };