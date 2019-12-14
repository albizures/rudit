import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const бултыхаться: PerfectVerb = {
  name: Word('бултыхаться', 6),
  singular1stPerson: Word('бултыхаюсь', 6),
  singular2ndPerson: Word('бултыхаешься', 6),
  singular3rdPerson: Word('бултыхается', 6),
  plural1stPerson: Word('бултыхаемся', 6),
  plural2ndPerson: Word('бултыхаетесь', 6),
  plural3rdPerson: Word('бултыхаются', 6),
  masculinePast: Word('бултыхался', 6),
  femininePast: Word('бултыхалась', 6),
  neuterPast: Word('бултыхалось', 6),
  pluralPast: Word('бултыхались', 6),
  imperativeInformal: Word('бултыхайся', 6),
  imperativeFormal: Word('бултыхайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(бултыхаться.name.text, бултыхаться);

export { бултыхаться };