import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отражаться: PerfectVerb = {
  name: Word('отражаться', 5),
  singular1stPerson: Word('отражаюсь', 5),
  singular2ndPerson: Word('отражаешься', 5),
  singular3rdPerson: Word('отражается', 5),
  plural1stPerson: Word('отражаемся', 5),
  plural2ndPerson: Word('отражаетесь', 5),
  plural3rdPerson: Word('отражаются', 5),
  masculinePast: Word('отражался', 5),
  femininePast: Word('отражалась', 5),
  neuterPast: Word('отражалось', 5),
  pluralPast: Word('отражались', 5),
  imperativeInformal: Word('отражайся', 5),
  imperativeFormal: Word('отражайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отражаться.name.text, отражаться);

export { отражаться };