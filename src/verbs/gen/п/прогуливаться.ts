import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const прогуливаться: PerfectVerb = {
  name: Word('прогуливаться', 4),
  singular1stPerson: Word('прогуливаюсь', 4),
  singular2ndPerson: Word('прогуливаешься', 4),
  singular3rdPerson: Word('прогуливается', 4),
  plural1stPerson: Word('прогуливаемся', 4),
  plural2ndPerson: Word('прогуливаетесь', 4),
  plural3rdPerson: Word('прогуливаются', 4),
  masculinePast: Word('прогуливался', 4),
  femininePast: Word('прогуливалась', 4),
  neuterPast: Word('прогуливалось', 4),
  pluralPast: Word('прогуливались', 4),
  imperativeInformal: Word('прогуливайся', 4),
  imperativeFormal: Word('прогуливайтесь', 4),
  imperfect: [],
};

perfectVerbs.set(прогуливаться.name.text, прогуливаться);

export { прогуливаться };