import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обязываться: PerfectVerb = {
  name: Word('обязываться', 2),
  singular1stPerson: Word('обязываюсь', 2),
  singular2ndPerson: Word('обязываешься', 2),
  singular3rdPerson: Word('обязывается', 2),
  plural1stPerson: Word('обязываемся', 2),
  plural2ndPerson: Word('обязываетесь', 2),
  plural3rdPerson: Word('обязываются', 2),
  masculinePast: Word('обязывался', 2),
  femininePast: Word('обязывалась', 2),
  neuterPast: Word('обязывалось', 2),
  pluralPast: Word('обязывались', 2),
  imperativeInformal: Word('обязывайся', 2),
  imperativeFormal: Word('обязывайтесь', 2),
  imperfect: ['обязаться'],
};

perfectVerbs.set(обязываться.name.text, обязываться);

export { обязываться };