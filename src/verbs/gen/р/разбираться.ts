import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const разбираться: PerfectVerb = {
  name: Word('разбираться', 6),
  singular1stPerson: Word('разбираюсь', 6),
  singular2ndPerson: Word('разбираешься', 6),
  singular3rdPerson: Word('разбирается', 6),
  plural1stPerson: Word('разбираемся', 6),
  plural2ndPerson: Word('разбираетесь', 6),
  plural3rdPerson: Word('разбираются', 6),
  masculinePast: Word('разбирался', 6),
  femininePast: Word('разбиралась', 6),
  neuterPast: Word('разбиралось', 6),
  pluralPast: Word('разбирались', 6),
  imperativeInformal: Word('разбирайся', 6),
  imperativeFormal: Word('разбирайтесь', 6),
  imperfect: ['разобраться'],
};

perfectVerbs.set(разбираться.name.text, разбираться);

export { разбираться };