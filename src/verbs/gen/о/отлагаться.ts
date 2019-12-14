import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const отлагаться: PerfectVerb = {
  name: Word('отлагаться', 5),
  singular1stPerson: Word('отлагаюсь', 5),
  singular2ndPerson: Word('отлагаешься', 5),
  singular3rdPerson: Word('отлагается', 5),
  plural1stPerson: Word('отлагаемся', 5),
  plural2ndPerson: Word('отлагаетесь', 5),
  plural3rdPerson: Word('отлагаются', 5),
  masculinePast: Word('отлагался', 5),
  femininePast: Word('отлагалась', 5),
  neuterPast: Word('отлагалось', 5),
  pluralPast: Word('отлагались', 5),
  imperativeInformal: Word('отлагайся', 5),
  imperativeFormal: Word('отлагайтесь', 5),
  imperfect: [],
};

perfectVerbs.set(отлагаться.name.text, отлагаться);

export { отлагаться };