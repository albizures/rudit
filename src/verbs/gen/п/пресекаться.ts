import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const пресекаться: PerfectVerb = {
  name: Word('пресекаться', 6),
  singular1stPerson: Word('пресекаюсь', 6),
  singular2ndPerson: Word('пресекаешься', 6),
  singular3rdPerson: Word('пресекается', 6),
  plural1stPerson: Word('пресекаемся', 6),
  plural2ndPerson: Word('пресекаетесь', 6),
  plural3rdPerson: Word('пресекаются', 6),
  masculinePast: Word('пресекался', 6),
  femininePast: Word('пресекалась', 6),
  neuterPast: Word('пресекалось', 6),
  pluralPast: Word('пресекались', 6),
  imperativeInformal: Word('пресекайся', 6),
  imperativeFormal: Word('пресекайтесь', 6),
  imperfect: [],
};

perfectVerbs.set(пресекаться.name.text, пресекаться);

export { пресекаться };