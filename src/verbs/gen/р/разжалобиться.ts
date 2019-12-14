import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разжалобиться: PerfectVerb = {
  name: Word('разжалобиться', 4),
  singular1stPerson: Word('разжалоблюсь', 4),
  singular2ndPerson: Word('разжалобишься', 4),
  singular3rdPerson: Word('разжалобится', 4),
  plural1stPerson: Word('разжалобимся', 4),
  plural2ndPerson: Word('разжалобитесь', 4),
  plural3rdPerson: Word('разжалобятся', 4),
  masculinePast: Word('разжалобился', 4),
  femininePast: Word('разжалобилась', 4),
  neuterPast: Word('разжалобилось', 4),
  pluralPast: Word('разжалобились', 4),
  imperativeInformal: Word('разжалобись//разжа'лобься', 4),
  imperativeFormal: Word('разжалобьтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разжалобиться.name.text, разжалобиться);

export { разжалобиться };