import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогрызаться: PerfectVerb = {
  name: Word('прогрызаться', 7),
  singular1stPerson: Word('прогрызаюсь', 7),
  singular2ndPerson: Word('прогрызаешься', 7),
  singular3rdPerson: Word('прогрызается', 7),
  plural1stPerson: Word('прогрызаемся', 7),
  plural2ndPerson: Word('прогрызаетесь', 7),
  plural3rdPerson: Word('прогрызаются', 7),
  masculinePast: Word('прогрызался', 7),
  femininePast: Word('прогрызалась', 7),
  neuterPast: Word('прогрызалось', 7),
  pluralPast: Word('прогрызались', 7),
  imperativeInformal: Word('прогрызайся', 7),
  imperativeFormal: Word('прогрызайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(прогрызаться.name.text, прогрызаться);

export { прогрызаться };