import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const засмущаться: PerfectVerb = {
  name: Word('засмущаться', 6),
  singular1stPerson: Word('засмущаюсь', 6),
  singular2ndPerson: Word('засмущаешься', 6),
  singular3rdPerson: Word('засмущается', 6),
  plural1stPerson: Word('засмущаемся', 6),
  plural2ndPerson: Word('засмущаетесь', 6),
  plural3rdPerson: Word('засмущаются', 6),
  masculinePast: Word('засмущался', 6),
  femininePast: Word('засмущалась', 6),
  neuterPast: Word('засмущалось', 6),
  pluralPast: Word('засмущались', 6),
  imperativeInformal: Word('засмущайся', 6),
  imperativeFormal: Word('засмущайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(засмущаться.name.text, засмущаться);

export { засмущаться };