import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const упираться: PerfectVerb = {
  name: Word('упираться', 4),
  singular1stPerson: Word('упираюсь', 4),
  singular2ndPerson: Word('упираешься', 4),
  singular3rdPerson: Word('упирается', 4),
  plural1stPerson: Word('упираемся', 4),
  plural2ndPerson: Word('упираетесь', 4),
  plural3rdPerson: Word('упираются', 4),
  masculinePast: Word('упирался', 4),
  femininePast: Word('упиралась', 4),
  neuterPast: Word('упиралось', 4),
  pluralPast: Word('упирались', 4),
  imperativeInformal: Word('упирайся', 4),
  imperativeFormal: Word('упирайтесь', 4),
  imperfect: ['упереться'],
};

perfectVerbs.set(упираться.name.text, упираться);

export { упираться };