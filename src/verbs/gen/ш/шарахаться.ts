import { PerfectVerb } from '../../../utils/Verb';
import { Word } from '../../../utils/Word';
import { perfectVerbs } from '../../map';

const шарахаться: PerfectVerb = {
  name: Word('шарахаться', 3),
  singular1stPerson: Word('шарахаюсь', 3),
  singular2ndPerson: Word('шарахаешься', 3),
  singular3rdPerson: Word('шарахается', 3),
  plural1stPerson: Word('шарахаемся', 3),
  plural2ndPerson: Word('шарахаетесь', 3),
  plural3rdPerson: Word('шарахаются', 3),
  masculinePast: Word('шарахался', 3),
  femininePast: Word('шарахалась', 3),
  neuterPast: Word('шарахалось', 3),
  pluralPast: Word('шарахались', 3),
  imperativeInformal: Word('шарахайся', 3),
  imperativeFormal: Word('шарахайтесь', 3),
  imperfect: [],
};

perfectVerbs.set(шарахаться.name.text, шарахаться);

export { шарахаться };