import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const закопаться: PerfectVerb = {
  name: Word('закопаться', 5),
  singular1stPerson: Word('закопаюсь', 5),
  singular2ndPerson: Word('закопаешься', 5),
  singular3rdPerson: Word('закопается', 5),
  plural1stPerson: Word('закопаемся', 5),
  plural2ndPerson: Word('закопаетесь', 5),
  plural3rdPerson: Word('закопаются', 5),
  masculinePast: Word('закопался', 5),
  femininePast: Word('закопалась', 5),
  neuterPast: Word('закопалось', 5),
  pluralPast: Word('закопались', 5),
  imperativeInformal: Word('закопайся', 5),
  imperativeFormal: Word('закопайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(закопаться.name.text, закопаться);

export { закопаться };