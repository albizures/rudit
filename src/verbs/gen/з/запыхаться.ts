import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const запыхаться: PerfectVerb = {
  name: Word('запыхаться', 5),
  singular1stPerson: Word('запыхаюсь', 5),
  singular2ndPerson: Word('запыхаешься', 5),
  singular3rdPerson: Word('запыхается', 5),
  plural1stPerson: Word('запыхаемся', 5),
  plural2ndPerson: Word('запыхаетесь', 5),
  plural3rdPerson: Word('запыхаются', 5),
  masculinePast: Word('запыхался', 5),
  femininePast: Word('запыхалась', 5),
  neuterPast: Word('запыхалось', 5),
  pluralPast: Word('запыхались', 5),
  imperativeInformal: Word('запыхайся', 5),
  imperativeFormal: Word('запыхайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(запыхаться.name.text, запыхаться);

export { запыхаться };