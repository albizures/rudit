import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отстаиваться: PerfectVerb = {
  name: Word('отстаиваться', 4),
  singular1stPerson: Word('отстаиваюсь', 4),
  singular2ndPerson: Word('отстаиваешься', 4),
  singular3rdPerson: Word('отстаивается', 4),
  plural1stPerson: Word('отстаиваемся', 4),
  plural2ndPerson: Word('отстаиваетесь', 4),
  plural3rdPerson: Word('отстаиваются', 4),
  masculinePast: Word('отстаивался', 4),
  femininePast: Word('отстаивалась', 4),
  neuterPast: Word('отстаивалось', 4),
  pluralPast: Word('отстаивались', 4),
  imperativeInformal: Word('отстаивайся', 4),
  imperativeFormal: Word('отстаивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(отстаиваться.name.text, отстаиваться);

export { отстаиваться };