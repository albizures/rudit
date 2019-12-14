import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лопаться: PerfectVerb = {
  name: Word('лопаться', 1),
  singular1stPerson: Word('лопаюсь', 1),
  singular2ndPerson: Word('лопаешься', 1),
  singular3rdPerson: Word('лопается', 1),
  plural1stPerson: Word('лопаемся', 1),
  plural2ndPerson: Word('лопаетесь', 1),
  plural3rdPerson: Word('лопаются', 1),
  masculinePast: Word('лопался', 1),
  femininePast: Word('лопалась', 1),
  neuterPast: Word('лопалось', 1),
  pluralPast: Word('лопались', 1),
  imperativeInformal: Word('лопайся', 1),
  imperativeFormal: Word('лопайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(лопаться.name.text, лопаться);

export { лопаться };