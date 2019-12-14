import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const обмениваться: PerfectVerb = {
  name: Word('обмениваться', 3),
  singular1stPerson: Word('обмениваюсь', 3),
  singular2ndPerson: Word('обмениваешься', 3),
  singular3rdPerson: Word('обменивается', 3),
  plural1stPerson: Word('обмениваемся', 3),
  plural2ndPerson: Word('обмениваетесь', 3),
  plural3rdPerson: Word('обмениваются', 3),
  masculinePast: Word('обменивался', 3),
  femininePast: Word('обменивалась', 3),
  neuterPast: Word('обменивалось', 3),
  pluralPast: Word('обменивались', 3),
  imperativeInformal: Word('обменивайся', 3),
  imperativeFormal: Word('обменивайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(обмениваться.name.text, обмениваться);

export { обмениваться };