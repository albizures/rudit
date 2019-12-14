import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лишаться: PerfectVerb = {
  name: Word('лишаться', 3),
  singular1stPerson: Word('лишаюсь', 3),
  singular2ndPerson: Word('лишаешься', 3),
  singular3rdPerson: Word('лишается', 3),
  plural1stPerson: Word('лишаемся', 3),
  plural2ndPerson: Word('лишаетесь', 3),
  plural3rdPerson: Word('лишаются', 3),
  masculinePast: Word('лишался', 3),
  femininePast: Word('лишалась', 3),
  neuterPast: Word('лишалось', 3),
  pluralPast: Word('лишались', 3),
  imperativeInformal: Word('лишайся', 3),
  imperativeFormal: Word('лишайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(лишаться.name.text, лишаться);

export { лишаться };