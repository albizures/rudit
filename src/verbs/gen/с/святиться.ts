import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const святиться: PerfectVerb = {
  name: Word('святиться', 4),
  singular1stPerson: Word('свячусь', 4),
  singular2ndPerson: Word('святишься', 4),
  singular3rdPerson: Word('святится', 4),
  plural1stPerson: Word('святимся', 4),
  plural2ndPerson: Word('святитесь', 4),
  plural3rdPerson: Word('святятся', 4),
  masculinePast: Word('святился', 4),
  femininePast: Word('святилась', 4),
  neuterPast: Word('святилось', 4),
  pluralPast: Word('святились', 4),
  imperativeInformal: Word('святись', 4),
  imperativeFormal: Word('святитесь', 4),
  imperfect: [],
};

perfectVerbs.set(святиться.name.text, святиться);

export { святиться };