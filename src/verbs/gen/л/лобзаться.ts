import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лобзаться: PerfectVerb = {
  name: Word('лобзаться', 4),
  singular1stPerson: Word('лобзаюсь', 4),
  singular2ndPerson: Word('лобзаешься', 4),
  singular3rdPerson: Word('лобзается', 4),
  plural1stPerson: Word('лобзаемся', 4),
  plural2ndPerson: Word('лобзаетесь', 4),
  plural3rdPerson: Word('лобзаются', 4),
  masculinePast: Word('лобзался', 4),
  femininePast: Word('лобзалась', 4),
  neuterPast: Word('лобзалось', 4),
  pluralPast: Word('лобзались', 4),
  imperativeInformal: Word('лобзайся', 4),
  imperativeFormal: Word('лобзайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(лобзаться.name.text, лобзаться);

export { лобзаться };