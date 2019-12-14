import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выстаиваться: PerfectVerb = {
  name: Word('выстаиваться', 4),
  singular1stPerson: Word('выстаиваюсь', 4),
  singular2ndPerson: Word('выстаиваешься', 4),
  singular3rdPerson: Word('выстаивается', 4),
  plural1stPerson: Word('выстаиваемся', 4),
  plural2ndPerson: Word('выстаиваетесь', 4),
  plural3rdPerson: Word('выстаиваются', 4),
  masculinePast: Word('выстаивался', 4),
  femininePast: Word('выстаивалась', 4),
  neuterPast: Word('выстаивалось', 4),
  pluralPast: Word('выстаивались', 4),
  imperativeInformal: Word('выстаивайся', 4),
  imperativeFormal: Word('выстаивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(выстаиваться.name.text, выстаиваться);

export { выстаиваться };