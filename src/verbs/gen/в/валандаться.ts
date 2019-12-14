import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const валандаться: PerfectVerb = {
  name: Word('валандаться', 3),
  singular1stPerson: Word('валандаюсь', 3),
  singular2ndPerson: Word('валандаешься', 3),
  singular3rdPerson: Word('валандается', 3),
  plural1stPerson: Word('валандаемся', 3),
  plural2ndPerson: Word('валандаетесь', 3),
  plural3rdPerson: Word('валандаются', 3),
  masculinePast: Word('валандался', 3),
  femininePast: Word('валандалась', 3),
  neuterPast: Word('валандалось', 3),
  pluralPast: Word('валандались', 3),
  imperativeInformal: Word('валандайся', 3),
  imperativeFormal: Word('валандайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(валандаться.name.text, валандаться);

export { валандаться };