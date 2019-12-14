import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разламываться: PerfectVerb = {
  name: Word('разламываться', 4),
  singular1stPerson: Word('разламываюсь', 4),
  singular2ndPerson: Word('разламываешься', 4),
  singular3rdPerson: Word('разламывается', 4),
  plural1stPerson: Word('разламываемся', 4),
  plural2ndPerson: Word('разламываетесь', 4),
  plural3rdPerson: Word('разламываются', 4),
  masculinePast: Word('разламывался', 4),
  femininePast: Word('разламывалась', 4),
  neuterPast: Word('разламывалось', 4),
  pluralPast: Word('разламывались', 4),
  imperativeInformal: Word('разламывайся', 4),
  imperativeFormal: Word('разламывайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(разламываться.name.text, разламываться);

export { разламываться };