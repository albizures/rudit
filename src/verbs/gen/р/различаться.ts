import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const различаться: PerfectVerb = {
  name: Word('различаться', 6),
  singular1stPerson: Word('различаюсь', 6),
  singular2ndPerson: Word('различаешься', 6),
  singular3rdPerson: Word('различается', 6),
  plural1stPerson: Word('различаемся', 6),
  plural2ndPerson: Word('различаетесь', 6),
  plural3rdPerson: Word('различаются', 6),
  masculinePast: Word('различался', 6),
  femininePast: Word('различалась', 6),
  neuterPast: Word('различалось', 6),
  pluralPast: Word('различались', 6),
  imperativeInformal: Word('различайся', 6),
  imperativeFormal: Word('различайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(различаться.name.text, различаться);

export { различаться };