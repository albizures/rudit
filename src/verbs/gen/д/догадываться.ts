import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догадываться: PerfectVerb = {
  name: Word('догадываться', 3),
  singular1stPerson: Word('догадываюсь', 3),
  singular2ndPerson: Word('догадываешься', 3),
  singular3rdPerson: Word('догадывается', 3),
  plural1stPerson: Word('догадываемся', 3),
  plural2ndPerson: Word('догадываетесь', 3),
  plural3rdPerson: Word('догадываются', 3),
  masculinePast: Word('догадывался', 3),
  femininePast: Word('догадывалась', 3),
  neuterPast: Word('догадывалось', 3),
  pluralPast: Word('догадывались', 3),
  imperativeInformal: Word('догадывайся', 3),
  imperativeFormal: Word('догадывайтесь', 3),
  imperfect: ['догадаться'],
};

perfectVerbs.set(догадываться.name.text, догадываться);

export { догадываться };