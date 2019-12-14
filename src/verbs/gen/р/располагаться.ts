import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const располагаться: PerfectVerb = {
  name: Word('располагаться', 8),
  singular1stPerson: Word('располагаюсь', 8),
  singular2ndPerson: Word('располагаешься', 8),
  singular3rdPerson: Word('располагается', 8),
  plural1stPerson: Word('располагаемся', 8),
  plural2ndPerson: Word('располагаетесь', 8),
  plural3rdPerson: Word('располагаются', 8),
  masculinePast: Word('располагался', 8),
  femininePast: Word('располагалась', 8),
  neuterPast: Word('располагалось', 8),
  pluralPast: Word('располагались', 8),
  imperativeInformal: Word('располагайся', 8),
  imperativeFormal: Word('располагайтесь', 8),
  imperfect: [],
};

perfectVerbs.set(располагаться.name.text, располагаться);

export { располагаться };