import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const осмеливаться: PerfectVerb = {
  name: Word('осмеливаться', 3),
  singular1stPerson: Word('осмеливаюсь', 3),
  singular2ndPerson: Word('осмеливаешься', 3),
  singular3rdPerson: Word('осмеливается', 3),
  plural1stPerson: Word('осмеливаемся', 3),
  plural2ndPerson: Word('осмеливаетесь', 3),
  plural3rdPerson: Word('осмеливаются', 3),
  masculinePast: Word('осмеливался', 3),
  femininePast: Word('осмеливалась', 3),
  neuterPast: Word('осмеливалось', 3),
  pluralPast: Word('осмеливались', 3),
  imperativeInformal: Word('осмеливайся', 3),
  imperativeFormal: Word('осмеливайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(осмеливаться.name.text, осмеливаться);

export { осмеливаться };