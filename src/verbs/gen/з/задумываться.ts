import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задумываться: PerfectVerb = {
  name: Word('задумываться', 3),
  singular1stPerson: Word('задумываюсь', 3),
  singular2ndPerson: Word('задумываешься', 3),
  singular3rdPerson: Word('задумывается', 3),
  plural1stPerson: Word('задумываемся', 3),
  plural2ndPerson: Word('задумываетесь', 3),
  plural3rdPerson: Word('задумываются', 3),
  masculinePast: Word('задумывался', 3),
  femininePast: Word('задумывалась', 3),
  neuterPast: Word('задумывалось', 3),
  pluralPast: Word('задумывались', 3),
  imperativeInformal: Word('задумывайся', 3),
  imperativeFormal: Word('задумывайтесь', 3),
  imperfect: ['задуматься'],
};

perfectVerbs.set(задумываться.name.text, задумываться);

export { задумываться };