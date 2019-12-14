import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const задыхаться: PerfectVerb = {
  name: Word('задыхаться', 5),
  singular1stPerson: Word('задыхаюсь', 5),
  singular2ndPerson: Word('задыхаешься', 5),
  singular3rdPerson: Word('задыхается', 5),
  plural1stPerson: Word('задыхаемся', 5),
  plural2ndPerson: Word('задыхаетесь', 5),
  plural3rdPerson: Word('задыхаются', 5),
  masculinePast: Word('задыхался', 5),
  femininePast: Word('задыхалась', 5),
  neuterPast: Word('задыхалось', 5),
  pluralPast: Word('задыхались', 5),
  imperativeInformal: Word('задыхайся', 5),
  imperativeFormal: Word('задыхайтесь', 5),
  imperfect: ['задохнуться'],
};

perfectVerbs.set(задыхаться.name.text, задыхаться);

export { задыхаться };