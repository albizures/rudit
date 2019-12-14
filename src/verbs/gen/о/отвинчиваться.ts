import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отвинчиваться: PerfectVerb = {
  name: Word('отвинчиваться', 3),
  singular1stPerson: Word('отвинчиваюсь', 3),
  singular2ndPerson: Word('отвинчиваешься', 3),
  singular3rdPerson: Word('отвинчивается', 3),
  plural1stPerson: Word('отвинчиваемся', 3),
  plural2ndPerson: Word('отвинчиваетесь', 3),
  plural3rdPerson: Word('отвинчиваются', 3),
  masculinePast: Word('отвинчивался', 3),
  femininePast: Word('отвинчивалась', 3),
  neuterPast: Word('отвинчивалось', 3),
  pluralPast: Word('отвинчивались', 3),
  imperativeInformal: Word('отвинчивайся', 3),
  imperativeFormal: Word('отвинчивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(отвинчиваться.name.text, отвинчиваться);

export { отвинчиваться };