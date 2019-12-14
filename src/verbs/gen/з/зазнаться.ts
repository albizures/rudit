import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const зазнаться: PerfectVerb = {
  name: Word('зазнаться', 4),
  singular1stPerson: Word('зазнаюсь', 4),
  singular2ndPerson: Word('зазнаешься', 4),
  singular3rdPerson: Word('зазнается', 4),
  plural1stPerson: Word('зазнаемся', 4),
  plural2ndPerson: Word('зазнаетесь', 4),
  plural3rdPerson: Word('зазнаются', 4),
  masculinePast: Word('зазнался', 4),
  femininePast: Word('зазналась', 4),
  neuterPast: Word('зазналось', 4),
  pluralPast: Word('зазнались', 4),
  imperativeInformal: Word('зазнайся', 4),
  imperativeFormal: Word('зазнайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(зазнаться.name.text, зазнаться);

export { зазнаться };