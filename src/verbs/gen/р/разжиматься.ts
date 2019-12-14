import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжиматься: PerfectVerb = {
  name: Word('разжиматься', 6),
  singular1stPerson: Word('разжимаюсь', 6),
  singular2ndPerson: Word('разжимаешься', 6),
  singular3rdPerson: Word('разжимается', 6),
  plural1stPerson: Word('разжимаемся', 6),
  plural2ndPerson: Word('разжимаетесь', 6),
  plural3rdPerson: Word('разжимаются', 6),
  masculinePast: Word('разжимался', 6),
  femininePast: Word('разжималась', 6),
  neuterPast: Word('разжималось', 6),
  pluralPast: Word('разжимались', 6),
  imperativeInformal: Word('разжимайся', 6),
  imperativeFormal: Word('разжимайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(разжиматься.name.text, разжиматься);

export { разжиматься };