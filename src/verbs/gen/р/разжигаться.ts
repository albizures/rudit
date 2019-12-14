import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжигаться: PerfectVerb = {
  name: Word('разжигаться', 6),
  singular1stPerson: Word('разжигаюсь', 6),
  singular2ndPerson: Word('разжигаешься', 6),
  singular3rdPerson: Word('разжигается', 6),
  plural1stPerson: Word('разжигаемся', 6),
  plural2ndPerson: Word('разжигаетесь', 6),
  plural3rdPerson: Word('разжигаются', 6),
  masculinePast: Word('разжигался', 6),
  femininePast: Word('разжигалась', 6),
  neuterPast: Word('разжигалось', 6),
  pluralPast: Word('разжигались', 6),
  imperativeInformal: Word('разжигайся', 6),
  imperativeFormal: Word('разжигайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разжигаться.name.text, разжигаться);

export { разжигаться };