import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смерзаться: PerfectVerb = {
  name: Word('смерзаться', 5),
  singular1stPerson: Word('смерзаюсь', 5),
  singular2ndPerson: Word('смерзаешься', 5),
  singular3rdPerson: Word('смерзается', 5),
  plural1stPerson: Word('смерзаемся', 5),
  plural2ndPerson: Word('смерзаетесь', 5),
  plural3rdPerson: Word('смерзаются', 5),
  masculinePast: Word('смерзался', 5),
  femininePast: Word('смерзалась', 5),
  neuterPast: Word('смерзалось', 5),
  pluralPast: Word('смерзались', 5),
  imperativeInformal: Word('смерзайся', 5),
  imperativeFormal: Word('смерзайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(смерзаться.name.text, смерзаться);

export { смерзаться };