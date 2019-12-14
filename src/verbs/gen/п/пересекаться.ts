import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пересекаться: PerfectVerb = {
  name: Word('пересекаться', 7),
  singular1stPerson: Word('пересекаюсь', 7),
  singular2ndPerson: Word('пересекаешься', 7),
  singular3rdPerson: Word('пересекается', 7),
  plural1stPerson: Word('пересекаемся', 7),
  plural2ndPerson: Word('пересекаетесь', 7),
  plural3rdPerson: Word('пересекаются', 7),
  masculinePast: Word('пересекался', 7),
  femininePast: Word('пересекалась', 7),
  neuterPast: Word('пересекалось', 7),
  pluralPast: Word('пересекались', 7),
  imperativeInformal: Word('пересекайся', 7),
  imperativeFormal: Word('пересекайтесь', 7),
  imperfect: [],
};

perfectVerbs.set(пересекаться.name.text, пересекаться);

export { пересекаться };