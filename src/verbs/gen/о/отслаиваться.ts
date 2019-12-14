import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отслаиваться: PerfectVerb = {
  name: Word('отслаиваться', 4),
  singular1stPerson: Word('отслаиваюсь', 4),
  singular2ndPerson: Word('отслаиваешься', 4),
  singular3rdPerson: Word('отслаивается', 4),
  plural1stPerson: Word('отслаиваемся', 4),
  plural2ndPerson: Word('отслаиваетесь', 4),
  plural3rdPerson: Word('отслаиваются', 4),
  masculinePast: Word('отслаивался', 4),
  femininePast: Word('отслаивалась', 4),
  neuterPast: Word('отслаивалось', 4),
  pluralPast: Word('отслаивались', 4),
  imperativeInformal: Word('отслаивайся', 4),
  imperativeFormal: Word('отслаивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отслаиваться.name.text, отслаиваться);

export { отслаиваться };