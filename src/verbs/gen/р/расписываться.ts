import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const расписываться: PerfectVerb = {
  name: Word('расписываться', 4),
  singular1stPerson: Word('расписываюсь', 4),
  singular2ndPerson: Word('расписываешься', 4),
  singular3rdPerson: Word('расписывается', 4),
  plural1stPerson: Word('расписываемся', 4),
  plural2ndPerson: Word('расписываетесь', 4),
  plural3rdPerson: Word('расписываются', 4),
  masculinePast: Word('расписывался', 4),
  femininePast: Word('расписывалась', 4),
  neuterPast: Word('расписывалось', 4),
  pluralPast: Word('расписывались', 4),
  imperativeInformal: Word('расписывайся', 4),
  imperativeFormal: Word('расписывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(расписываться.name.text, расписываться);

export { расписываться };