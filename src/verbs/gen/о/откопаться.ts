import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const откопаться: PerfectVerb = {
  name: Word('откопаться', 5),
  singular1stPerson: Word('откопаюсь', 5),
  singular2ndPerson: Word('откопаешься', 5),
  singular3rdPerson: Word('откопается', 5),
  plural1stPerson: Word('откопаемся', 5),
  plural2ndPerson: Word('откопаетесь', 5),
  plural3rdPerson: Word('откопаются', 5),
  masculinePast: Word('откопался', 5),
  femininePast: Word('откопалась', 5),
  neuterPast: Word('откопалось', 5),
  pluralPast: Word('откопались', 5),
  imperativeInformal: Word('откопайся', 5),
  imperativeFormal: Word('откопайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(откопаться.name.text, откопаться);

export { откопаться };