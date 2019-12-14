import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const выдыхаться: PerfectVerb = {
  name: Word('выдыхаться', 5),
  singular1stPerson: Word('выдыхаюсь', 5),
  singular2ndPerson: Word('выдыхаешься', 5),
  singular3rdPerson: Word('выдыхается', 5),
  plural1stPerson: Word('выдыхаемся', 5),
  plural2ndPerson: Word('выдыхаетесь', 5),
  plural3rdPerson: Word('выдыхаются', 5),
  masculinePast: Word('выдыхался', 5),
  femininePast: Word('выдыхалась', 5),
  neuterPast: Word('выдыхалось', 5),
  pluralPast: Word('выдыхались', 5),
  imperativeInformal: Word('выдыхайся', 5),
  imperativeFormal: Word('выдыхайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(выдыхаться.name.text, выдыхаться);

export { выдыхаться };