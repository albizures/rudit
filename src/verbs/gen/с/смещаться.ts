import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const смещаться: PerfectVerb = {
  name: Word('смещаться', 4),
  singular1stPerson: Word('смещаюсь', 4),
  singular2ndPerson: Word('смещаешься', 4),
  singular3rdPerson: Word('смещается', 4),
  plural1stPerson: Word('смещаемся', 4),
  plural2ndPerson: Word('смещаетесь', 4),
  plural3rdPerson: Word('смещаются', 4),
  masculinePast: Word('смещался', 4),
  femininePast: Word('смещалась', 4),
  neuterPast: Word('смещалось', 4),
  pluralPast: Word('смещались', 4),
  imperativeInformal: Word('смещайся', 4),
  imperativeFormal: Word('смещайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(смещаться.name.text, смещаться);

export { смещаться };