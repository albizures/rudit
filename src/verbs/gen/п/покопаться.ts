import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const покопаться: PerfectVerb = {
  name: Word('покопаться', 5),
  singular1stPerson: Word('покопаюсь', 5),
  singular2ndPerson: Word('покопаешься', 5),
  singular3rdPerson: Word('покопается', 5),
  plural1stPerson: Word('покопаемся', 5),
  plural2ndPerson: Word('покопаетесь', 5),
  plural3rdPerson: Word('покопаются', 5),
  masculinePast: Word('покопался', 5),
  femininePast: Word('покопалась', 5),
  neuterPast: Word('покопалось', 5),
  pluralPast: Word('покопались', 5),
  imperativeInformal: Word('покопайся', 5),
  imperativeFormal: Word('покопайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(покопаться.name.text, покопаться);

export { покопаться };