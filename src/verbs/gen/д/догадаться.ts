import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const догадаться: PerfectVerb = {
  name: Word('догадаться', 5),
  singular1stPerson: Word('догадаюсь', 5),
  singular2ndPerson: Word('догадаешься', 5),
  singular3rdPerson: Word('догадается', 5),
  plural1stPerson: Word('догадаемся', 5),
  plural2ndPerson: Word('догадаетесь', 5),
  plural3rdPerson: Word('догадаются', 5),
  masculinePast: Word('догадался', 5),
  femininePast: Word('догадалась', 5),
  neuterPast: Word('догадалось', 5),
  pluralPast: Word('догадались', 5),
  imperativeInformal: Word('догадайся', 5),
  imperativeFormal: Word('догадайтесь', 5),
  imperfect: ['догадываться'],
};

perfectVerbs.set(догадаться.name.text, догадаться);

export { догадаться };