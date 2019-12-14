import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const докопаться: PerfectVerb = {
  name: Word('докопаться', 5),
  singular1stPerson: Word('докопаюсь', 5),
  singular2ndPerson: Word('докопаешься', 5),
  singular3rdPerson: Word('докопается', 5),
  plural1stPerson: Word('докопаемся', 5),
  plural2ndPerson: Word('докопаетесь', 5),
  plural3rdPerson: Word('докопаются', 5),
  masculinePast: Word('докопался', 5),
  femininePast: Word('докопалась', 5),
  neuterPast: Word('докопалось', 5),
  pluralPast: Word('докопались', 5),
  imperativeInformal: Word('докопайся', 5),
  imperativeFormal: Word('докопайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(докопаться.name.text, докопаться);

export { докопаться };