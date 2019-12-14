import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const совершаться: PerfectVerb = {
  name: Word('совершаться', 6),
  singular1stPerson: Word('совершаюсь', 6),
  singular2ndPerson: Word('совершаешься', 6),
  singular3rdPerson: Word('совершается', 6),
  plural1stPerson: Word('совершаемся', 6),
  plural2ndPerson: Word('совершаетесь', 6),
  plural3rdPerson: Word('совершаются', 6),
  masculinePast: Word('совершался', 6),
  femininePast: Word('совершалась', 6),
  neuterPast: Word('совершалось', 6),
  pluralPast: Word('совершались', 6),
  imperativeInformal: Word('совершайся', 6),
  imperativeFormal: Word('совершайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(совершаться.name.text, совершаться);

export { совершаться };