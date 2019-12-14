import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задуматься: PerfectVerb = {
  name: Word('задуматься', 3),
  singular1stPerson: Word('задумаюсь', 3),
  singular2ndPerson: Word('задумаешься', 3),
  singular3rdPerson: Word('задумается', 3),
  plural1stPerson: Word('задумаемся', 3),
  plural2ndPerson: Word('задумаетесь', 3),
  plural3rdPerson: Word('задумаются', 3),
  masculinePast: Word('задумался', 3),
  femininePast: Word('задумалась', 3),
  neuterPast: Word('задумалось', 3),
  pluralPast: Word('задумались', 3),
  imperativeInformal: Word('задумайся', 3),
  imperativeFormal: Word('задумайтесь', 3),
  imperfect: ['задумываться'],
};

perfectVerbs.set(задуматься.name.text, задуматься);

export { задуматься };