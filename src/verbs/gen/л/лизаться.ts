import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const лизаться: PerfectVerb = {
  name: Word('лизаться', 3),
  singular1stPerson: Word('лижусь', 3),
  singular2ndPerson: Word('лижешься', 1),
  singular3rdPerson: Word('лижется', 1),
  plural1stPerson: Word('лижемся', 1),
  plural2ndPerson: Word('лижетесь', 1),
  plural3rdPerson: Word('лижутся', 1),
  masculinePast: Word('лизался', 3),
  femininePast: Word('лизалась', 3),
  neuterPast: Word('лизалось', 3),
  pluralPast: Word('лизались', 3),
  imperativeInformal: Word('лижись', 3),
  imperativeFormal: Word('лижитесь', 3),
  imperfect: [],
};

perfectVerbs.set(лизаться.name.text, лизаться);

export { лизаться };