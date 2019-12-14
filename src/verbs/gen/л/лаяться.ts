import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лаяться: PerfectVerb = {
  name: Word('лаяться', 1),
  singular1stPerson: Word('лаюсь', 1),
  singular2ndPerson: Word('лаешься', 1),
  singular3rdPerson: Word('лается', 1),
  plural1stPerson: Word('лаемся', 1),
  plural2ndPerson: Word('лаетесь', 1),
  plural3rdPerson: Word('лаются', 1),
  masculinePast: Word('лаялся', 1),
  femininePast: Word('лаялась', 1),
  neuterPast: Word('лаялось', 1),
  pluralPast: Word('лаялись', 1),
  imperativeInformal: Word('лайся', 1),
  imperativeFormal: Word('лайтесь', 1),
  imperfect: [],
};

perfectVerbs.set(лаяться.name.text, лаяться);

export { лаяться };