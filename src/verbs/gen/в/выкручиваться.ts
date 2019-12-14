import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выкручиваться: PerfectVerb = {
  name: Word('выкручиваться', 4),
  singular1stPerson: Word('выкручиваюсь', 4),
  singular2ndPerson: Word('выкручиваешься', 4),
  singular3rdPerson: Word('выкручивается', 4),
  plural1stPerson: Word('выкручиваемся', 4),
  plural2ndPerson: Word('выкручиваетесь', 4),
  plural3rdPerson: Word('выкручиваются', 4),
  masculinePast: Word('выкручивался', 4),
  femininePast: Word('выкручивалась', 4),
  neuterPast: Word('выкручивалось', 4),
  pluralPast: Word('выкручивались', 4),
  imperativeInformal: Word('выкручивайся', 4),
  imperativeFormal: Word('выкручивайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(выкручиваться.name.text, выкручиваться);

export { выкручиваться };