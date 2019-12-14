import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const переодеваться: PerfectVerb = {
  name: Word('переодеваться', 8),
  singular1stPerson: Word('переодеваюсь', 8),
  singular2ndPerson: Word('переодеваешься', 8),
  singular3rdPerson: Word('переодевается', 8),
  plural1stPerson: Word('переодеваемся', 8),
  plural2ndPerson: Word('переодеваетесь', 8),
  plural3rdPerson: Word('переодеваются', 8),
  masculinePast: Word('переодевался', 8),
  femininePast: Word('переодевалась', 8),
  neuterPast: Word('переодевалось', 8),
  pluralPast: Word('переодевались', 8),
  imperativeInformal: Word('переодевайся', 8),
  imperativeFormal: Word('переодевайтесь', 8),
  imperfect: ['переодеться'],
};

perfectVerbs.set(переодеваться.name.text, переодеваться);

export { переодеваться };