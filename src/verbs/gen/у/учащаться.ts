import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const учащаться: PerfectVerb = {
  name: Word('учащаться', 4),
  singular1stPerson: Word('учащаюсь', 4),
  singular2ndPerson: Word('учащаешься', 4),
  singular3rdPerson: Word('учащается', 4),
  plural1stPerson: Word('учащаемся', 4),
  plural2ndPerson: Word('учащаетесь', 4),
  plural3rdPerson: Word('учащаются', 4),
  masculinePast: Word('учащался', 4),
  femininePast: Word('учащалась', 4),
  neuterPast: Word('учащалось', 4),
  pluralPast: Word('учащались', 4),
  imperativeInformal: Word('учащайся', 4),
  imperativeFormal: Word('учащайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(учащаться.name.text, учащаться);

export { учащаться };