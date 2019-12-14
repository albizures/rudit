import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отломаться: PerfectVerb = {
  name: Word('отломаться', 5),
  singular1stPerson: Word('отломаюсь', 5),
  singular2ndPerson: Word('отломаешься', 5),
  singular3rdPerson: Word('отломается', 5),
  plural1stPerson: Word('отломаемся', 5),
  plural2ndPerson: Word('отломаетесь', 5),
  plural3rdPerson: Word('отломаются', 5),
  masculinePast: Word('отломался', 5),
  femininePast: Word('отломалась', 5),
  neuterPast: Word('отломалось', 5),
  pluralPast: Word('отломались', 5),
  imperativeInformal: Word('отломайся', 5),
  imperativeFormal: Word('отломайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отломаться.name.text, отломаться);

export { отломаться };